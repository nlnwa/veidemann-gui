import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CustomValidators} from '../../../commons/validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrowserConfig, CrawlConfig, Meta, PolitenessConfig} from '../../../commons/models/config.model';
import {RoleService} from '../../../auth/role.service';

@Component({
  selector: 'app-crawlconfig-details',
  templateUrl: './crawlconfig-details.component.html',
  styleUrls: ['./crawlconfig-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrawlConfigDetailsComponent implements OnChanges {

  @Input()
  crawlConfig: CrawlConfig;
  @Input()
  browserConfigs: BrowserConfig[];
  @Input()
  politenessConfigs: PolitenessConfig[];

  @Output()
  save = new EventEmitter<CrawlConfig>();
  @Output()
  update = new EventEmitter<CrawlConfig>();
  // noinspection ReservedWordAsName
  @Output()
  delete = new EventEmitter<CrawlConfig>();

  form: FormGroup;

  browserConfigList: any[];
  politenessConfigList: any = [];


  constructor(private fb: FormBuilder,
              private roleService: RoleService) {
    this.createForm();
  }

  get canEdit(): boolean {
    return this.roleService.isAdmin();
  }

  get showSave(): boolean {
    return (this.crawlConfig && !this.crawlConfig.id);
  }

  get name() {
    return this.form.get('meta').value.name;
  }

  get browserConfigId() {
    return this.form.get('browser_config_id');
  }

  get politenessId() {
    return this.form.get('politeness_id');
  }

  get minDnsTtlSeconds() {
    return this.form.get('minimum_dns_ttl_s');
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.crawlConfig && !changes.crawlConfig.currentValue) {
        this.form.reset();
        return;
    }
    if (changes.browserConfigs) {
      if (this.browserConfigs) {
        this.browserConfigList = this.browserConfigs.map((browserConfig) => ({
          id: browserConfig.id,
          itemName: browserConfig.meta.name,
        }));
      }
    }
    if (changes.politenessConfigs) {
      this.politenessConfigList = this.politenessConfigs.map((politenessConfig) => ({
        id: politenessConfig.id,
        itemName: politenessConfig.meta.name,
      }));
    }
    if (this.crawlConfig && this.browserConfigs && this.politenessConfigs) {
      this.updateForm();
    }
  }

  onSave() {
    this.save.emit(this.prepareSave());
  }

  onUpdate(): void {
    this.update.emit(this.prepareSave());
  }

  onDelete(): void {
    this.delete.emit(this.crawlConfig);
  }

  onRevert() {
    this.updateForm();
  }

  private createForm() {
    this.form = this.fb.group({
      id: {value: '', disabled: true},
      browser_config_id: ['', CustomValidators.nonEmpty],
      politeness_id: ['', CustomValidators.nonEmpty],
      extra: this.fb.group({
        extract_text: '',
        create_snapshot: '',
      }),
      minimum_dns_ttl_s: ['', [Validators.required, Validators.min(0)]],
      depth_first: '',
      meta: new Meta(),
    });
  }

  private updateForm() {
    this.form.patchValue({
      id: this.crawlConfig.id,
      minimum_dns_ttl_s: this.crawlConfig.minimum_dns_ttl_s,
      depth_first: this.crawlConfig.depth_first,
      politeness_id: this.crawlConfig.politeness_id,
      browser_config_id: this.crawlConfig.browser_config_id,
      extra: {
        extract_text: this.crawlConfig.extra.extract_text,
        create_snapshot: this.crawlConfig.extra.create_snapshot,
      },
      meta: this.crawlConfig.meta,
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    if (!( this.canEdit )) {
      this.form.disable();
    }
  }

  private prepareSave(): CrawlConfig {
    const formModel = this.form.value;
    return {
      id: this.crawlConfig.id,
      browser_config_id: formModel.browser_config_id,
      politeness_id: formModel.politeness_id,
      extra: {
        extract_text: formModel.extra.extract_text,
        create_snapshot: formModel.extra.create_snapshot,
      },
      minimum_dns_ttl_s: parseInt(formModel.minimum_dns_ttl_s, 10),
      depth_first: formModel.depth_first,
      meta: formModel.meta,
    };
  }
}
