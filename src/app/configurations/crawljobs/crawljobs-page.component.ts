import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import {CrawlJobService} from './crawljob.service';
import {MatDialog, MatDialogConfig, PageEvent} from '@angular/material';
import {CrawlConfig, CrawlJob, CrawlScheduleConfig, Label} from '../../commons/models/config.model';
import {combineLatest, from, Subject} from 'rxjs';
import {catchError, map, mergeMap, startWith, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {SnackBarService} from '../../commons/snack-bar/snack-bar.service';
import {CrawlConfigService} from '../crawlconfig/crawlconfig.service';
import {ScheduleService} from '../schedule/schedule.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DetailDirective} from '../shared/detail.directive';
import {FormBuilder} from '@angular/forms';
import {DeleteDialogComponent} from '../../dialog/delete-dialog/delete-dialog.component';
import {CrawljobDetailsComponent} from './crawljob-details/crawljob-details.component';
import {LabelsComponent} from '../../commons/labels/labels.component';

@Component({
  selector: 'app-crawljobs',
  template: `
    <app-search-config [term]="term"
                       (submit)="onSearch($event)"></app-search-config>
    <div fxLayout="column" fxLayoutGap="8px">
      <div>
        <app-toolbar>
          <span class="toolbar--title">Høstejobber</span>
          <button mat-mini-fab (click)="onCreateCrawlJob()">
            <mat-icon>add</mat-icon>
          </button>
        </app-toolbar>
        <app-selection-base-list (rowClick)="onSelectCrawlJob($event)"
                                 [data]="data$ | async"
                                 (selectedChange)="onSelectedChange($event)"
                                 (selectAll)="onSelectAll($event)"
                                 (page)="onPage($event)">
        </app-selection-base-list>
      </div>
      <app-crawljob-details [crawlJob]="crawlJob"
                            [crawlConfigs]="crawlConfigs"
                            [schedules]="schedules"
                            *ngIf="crawlJob && crawlConfigs && schedules && singleMode"
                            (update)="onUpdateCrawlJob($event)"
                            (save)="onSaveCrawlJob($event)"
                            (delete)="onDeleteCrawlJob($event)">
      </app-crawljob-details>
      <ng-template detail-host></ng-template>
    </div>
  `,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrawlJobsComponent implements OnInit {

  selectedConfigs = [];
  term = '';
  componentRef = null;

  crawlJob: CrawlJob;
  schedules: CrawlScheduleConfig[];
  crawlConfigs: CrawlConfig[];
  changes: Subject<void> = new Subject<void>();
  page: Subject<PageEvent> = new Subject<PageEvent>();
  data = new Subject<any>();
  data$ = this.data.asObservable();
  allSelected = false;

  @ViewChild(DetailDirective) detailHost: DetailDirective;

  constructor(private crawlJobService: CrawlJobService,
              private crawlConfigService: CrawlConfigService,
              private scheduleService: ScheduleService,
              private snackBarService: SnackBarService,
              private route: ActivatedRoute,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver,
              private fb: FormBuilder,
              private dialog: MatDialog) {
  }

  get singleMode(): boolean {
    return this.selectedConfigs.length < 2;
  }


  ngOnInit() {
    this.crawlConfigService.list().pipe(map(reply => reply.value))
      .subscribe(crawlConfigs => this.crawlConfigs = crawlConfigs);

    this.scheduleService.list().pipe(map(reply => reply.value))
      .subscribe(schedules => this.schedules = schedules);

    combineLatest(this.page, this.changes.pipe(startWith(null))).pipe(
      switchMap(([pageEvent]) => {
        return this.crawlJobService.search({
          page_size: pageEvent.pageSize,
          page: pageEvent.pageIndex
        });
      }),
    ).subscribe((reply) => {
      this.data.next({
        value: reply.value,
        pageLength: parseInt(reply.count, 10),
        pageSize: reply.page_size || 0,
        pageIndex: reply.page || 0,
      });
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.crawlJobService.get(id)
        .subscribe(crawlJob => {
          this.crawlJob = crawlJob;
        });
    }
  }

  loadComponent(crawlJob: CrawlJob, schedules: CrawlScheduleConfig[], crawlConfigs: CrawlConfig[], labels: Label[]) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CrawljobDetailsComponent);
    const viewContainerRef = this.detailHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = this.componentRef.instance as CrawljobDetailsComponent;
    instance.crawlJob = crawlJob;
    instance.schedules = schedules.map((schedule) => ({
      id: schedule.id,
      itemName: schedule.meta.name
    }));
    instance.crawlConfigs = crawlConfigs.map((crawlConfig) => ({
      id: crawlConfig.id,
      itemName: crawlConfig.meta.name
    }));

    if (!this.allSelected) {
      instance.form.get('crawl_config_id').clearValidators();
      instance.form.get('limits.depth').clearValidators();
      instance.form.get('limits.max_duration_s').clearValidators();
      instance.form.get('limits.max_bytes').clearValidators();
      instance.data = false;
      instance.updateForm();
      instance.update.subscribe((crawlJobConfig) => this.onUpdateMultipleCrawlJobs(crawlJobConfig, labels));
      instance.delete.subscribe(() => this.onDeleteMultipleCrawlConfigs(this.selectedConfigs));
    }

    if (this.allSelected) {
      instance.data = false;
      instance.updateForm();
      instance.update.subscribe((crawlJobConfig) => this.onUpdateAllCrawlJobs(crawlJobConfig));
      instance.delete.subscribe(() => this.onDeleteAllCrawlJobs());

    }
  }

  onPage(page: PageEvent) {
    this.page.next(page);
  }

  onSearch(labelQuery: string[]) {
    console.log('in pageComp ', labelQuery);
  }

  onSelectedChange(crawlJobs: CrawlJob[]) {
    this.selectedConfigs = crawlJobs;
    if (!this.singleMode) {
      if (!this.allSelected) {
        this.loadComponent(
          this.mergeCrawlJobs(crawlJobs), this.schedules, this.crawlConfigs, LabelsComponent.getInitialLabels(crawlJobs, CrawlJob));
      } else {
        const crawlJob = new CrawlJob();
        crawlJob.id = '1234567';
        crawlJob.meta.name = 'updateAll';
        this.loadComponent(crawlJob, this.schedules, this.crawlConfigs, []);
      }
    } else {
      this.crawlJob = crawlJobs[0];
      if (this.componentRef !== null) {
        this.componentRef.destroy();
      }
      if (this.crawlJob === undefined) {
        this.crawlJob = null;
      }
    }
  }

  onSelectAll(allSelected: boolean) {
    this.allSelected = allSelected;
    if (allSelected) {
      this.onSelectedChange([new CrawlJob(), new CrawlJob()]);
    } else {
      this.crawlJob = null;
      this.componentRef.destroy();
    }
  }

  onCreateCrawlJob(): void {
    this.selectedConfigs = [];
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.crawlJob = new CrawlJob();
  }

  onSelectCrawlJob(crawlJob: CrawlJob) {
    this.router.navigate(['crawljobs', crawlJob.id]);
    this.crawlJob = crawlJob;
  }

  onSaveCrawlJob(crawlJob: CrawlJob) {
    this.crawlJobService.create(crawlJob)
      .subscribe(newCrawlJob => {
        this.crawlJob = newCrawlJob;
        this.changes.next();
        this.snackBarService.openSnackBar('Lagret');
      });
    this.changes.next();
  }

  onUpdateCrawlJob(crawlJob: CrawlJob) {
    this.crawlJobService.update(crawlJob)
      .subscribe(updatedCrawljob => {
        this.crawlJob = updatedCrawljob;
        this.changes.next();
        this.snackBarService.openSnackBar('Oppdatert');
      });
  }

  onUpdateMultipleCrawlJobs(crawlJobUpdate: CrawlJob, initialLabels: Label[]) {
    const numOfConfigs = this.selectedConfigs.length.toString();
    from(this.selectedConfigs).pipe(
      mergeMap((crawlJob: CrawlJob) => {
        crawlJob.disabled = crawlJobUpdate.disabled;
        if (crawlJob.meta.label === undefined) {
          crawlJob.meta.label = [];
        }
        crawlJob.meta.label = LabelsComponent.updatedLabels(crawlJobUpdate.meta.label.concat(crawlJob.meta.label));
        for (const label of initialLabels) {
          if (!LabelsComponent.findLabel(crawlJobUpdate.meta.label, label.key, label.value)) {
            crawlJob.meta.label.splice(
              crawlJob.meta.label.findIndex(
                removedLabel => removedLabel.key === label.key && removedLabel.value === label.value),
              1);
          }
        }
        if (crawlJobUpdate.limits.depth !== null) {
          crawlJob.limits.depth = crawlJobUpdate.limits.depth;
        }
        if (crawlJobUpdate.limits.max_bytes !== '') {
          crawlJob.limits.max_bytes = crawlJobUpdate.limits.max_bytes;
        }
        if (!(crawlJobUpdate.limits.max_duration_s === '')) {
          crawlJob.limits.max_duration_s = crawlJobUpdate.limits.max_duration_s;
        }
        if (!(crawlJobUpdate.schedule_id === '')) {
          crawlJob.schedule_id = crawlJobUpdate.schedule_id;
        }
        if (crawlJobUpdate.crawl_config_id !== '') {
          crawlJob.crawl_config_id = crawlJobUpdate.crawl_config_id;
        }
        return this.crawlJobService.update(crawlJob);
      }),
      catchError((err) => {
        console.log(err);
        return of('true');
      }),
    ).subscribe(() => {
      this.selectedConfigs = [];
      this.componentRef.destroy();
      this.crawlJob = null;
      this.changes.next();
      this.snackBarService.openSnackBar(numOfConfigs, ' konfigurasjoner er oppdatert');
    });
  }

  onDeleteCrawlJob(crawlJob: CrawlJob) {
    this.crawlJobService.delete(crawlJob.id)
      .subscribe((response) => {
        this.crawlJob = null;
        this.changes.next();
        this.snackBarService.openSnackBar('Slettet');
      });
  }

  onDeleteMultipleCrawlConfigs(configs: CrawlJob[]) {
    const numOfConfigs = configs.length.toString();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      numberOfConfigs: numOfConfigs
    };
    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          from(configs).pipe(
            mergeMap((config) => this.crawlJobService.delete(config.id)),
            catchError((err) => {
              console.log(err);
              return of('true');
            }),
          ).subscribe(() => {
            this.selectedConfigs = [];
            this.componentRef.destroy();
            this.crawlJob = null;
            this.changes.next();
            this.snackBarService.openSnackBar(numOfConfigs, ' konfigurasjoner slettet');
          });
        } else {
          this.snackBarService.openSnackBar('Sletter ikke konfigurasjonene');
        }
      });
  }

  onDeleteAllCrawlJobs() {
    console.log('alle er markert og alle skal slettes');

  }

  onUpdateAllCrawlJobs(crawlJob: CrawlJob) {
    console.log('alle er markert, alle skal oppdateres');
    console.log('får inn dette pbjektet: ', crawlJob);
  }

  mergeCrawlJobs(configs: CrawlJob[]) {
    const config = new CrawlJob();
    const compareObj = configs[0];
    config.id = '1234567';
    config.meta.name = 'Multi';

    const equalDisabledStatus = configs.every(function (cfg: CrawlJob) {
      return cfg.disabled === compareObj.disabled;
    });

    const equalDepth = configs.every(function (cfg: CrawlJob) {
      return cfg.limits.depth === compareObj.limits.depth;
    });

    const equalMaxDuration = configs.every(function (cfg: CrawlJob) {
      return cfg.limits.max_duration_s === compareObj.limits.max_duration_s;
    });

    const equalMaxBytes = configs.every(function (cfg: CrawlJob) {
      return cfg.limits.max_bytes === compareObj.limits.max_bytes;
    });

    const equalSchedule = configs.every(function (cfg: CrawlJob) {
      return cfg.schedule_id === compareObj.schedule_id;
    });

    const equalCrawlConfig = configs.every(function (cfg: CrawlJob) {
      return cfg.crawl_config_id === compareObj.crawl_config_id;
    });

    if (equalDisabledStatus) {
      config.disabled = compareObj.disabled;
    } else {
      config.disabled = true;
    }

    if (equalDepth) {
      config.limits.depth = compareObj.limits.depth;
    } else {
      config.limits.depth = null;
    }

    if (equalMaxDuration) {
      config.limits.max_duration_s = compareObj.limits.max_duration_s;
    } else {
      config.limits.max_duration_s = '';
    }

    if (equalMaxBytes) {
      config.limits.max_bytes = compareObj.limits.max_bytes;
    } else {
      config.limits.max_bytes = '';
    }

    if (equalSchedule) {
      config.schedule_id = compareObj.schedule_id;
    }

    if (equalCrawlConfig) {
      config.crawl_config_id = compareObj.crawl_config_id;
    }
    const label = configs.reduce((acc: CrawlJob, curr: CrawlJob) => {
      config.meta.label = LabelsComponent.intersectLabel(acc.meta.label, curr.meta.label);
      return config;
    });
    return config;
  }
}
