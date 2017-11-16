import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CustomValidators} from '../../../commons/';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrowserConfig, CrawlConfig, PolitenessConfig} from '../../../commons/models/config.model';


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
  selectedBrowserConfigItems: any[];
  browserConfigDropdownSettings = {
    singleSelection: true,
    text: 'Velg browserConfig',
    enableSearchFilter: true
  };

  politenessConfigList: any = [];
  selectedPolitenessConfigItems = [];
  politenessConfigDropdownSettings = {
    singleSelection: true,
    text: 'Velg Politeness',
    enableSearchFilter: true
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  get showSave(): boolean {
    return !this.crawlConfig.id;
  }

  get name() {
    return this.form.get('meta.name');
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
    if (changes.crawlConfig) {
      if (!this.crawlConfig) {
        this.form.reset();
      }
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
      minimum_dns_ttl_s: ['', [Validators.required, CustomValidators.min(0)]],
      depth_first: '',
      meta: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        description: '',
        created: this.fb.group({seconds: {value: '', disabled: true}}),
        created_by: {value: '', disabled: true},
        last_modified: this.fb.group({seconds: {value: '', disabled: true}}),
        last_modified_by: {value: '', disabled: true},
        label: [],
      }),
    });
  }

  private updateForm() {
    this.form.patchValue({
      id: this.crawlConfig.id,
      minimum_dns_ttl_s: this.crawlConfig.minimum_dns_ttl_s,
      depth_first: this.crawlConfig.depth_first,
      extra: {
        extract_text: this.crawlConfig.extra.extract_text,
        create_snapshot: this.crawlConfig.extra.create_snapshot,
      },
      meta: {
        name: this.crawlConfig.meta.name,
        description: this.crawlConfig.meta.description,
        label: [...this.crawlConfig.meta.label],
      },
    });
    this.setSelectedBrowserConfigItem();
    this.setSelectedPolitenessConfigItem();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  private prepareSave(): CrawlConfig {
    const formModel = this.form.value;
    return {
      id: this.crawlConfig.id,
      browser_config_id: formModel.browser_config_id[0].id,
      politeness_id: formModel.politeness_id[0].id,
      extra: {
        extract_text: formModel.extra.extract_text,
        create_snapshot: formModel.extra.create_snapshot,
      },
      minimum_dns_ttl_s: parseInt(formModel.minimum_dns_ttl_s, 10),
      depth_first: formModel.depth_first,
      meta: {
        name: formModel.meta.name,
        description: formModel.meta.description,
        label: formModel.meta.label.map(label => ({...label})),
      }
    };
  }

  private setSelectedBrowserConfigItem() {
    this.selectedBrowserConfigItems = this.browserConfigList.reduce((acc, curr) => {
      if (curr.id === this.crawlConfig.browser_config_id) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  private setSelectedPolitenessConfigItem() {
    this.selectedPolitenessConfigItems = this.politenessConfigList.reduce((acc, curr) => {
      if (curr.id === this.crawlConfig.politeness_id) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }
}
