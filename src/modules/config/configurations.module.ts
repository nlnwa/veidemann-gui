import {NgModule} from '@angular/core';

import {CommonsModule} from '../commons';
import {KindService, LabelService, OptionsResolver, OptionsService} from './services';
import {ConfigurationsRoutingModule} from './routing';
import {ConfigComponent, ConfigurationComponent, ConfigurationsComponent, ConfigNavListComponent} from './containers';
import {
  AnnotationComponent,
  BrowserConfigDetailsComponent,
  BrowserConfigDetailsMultiComponent,
  BrowserScriptDetailsComponent,
  BrowserScriptDetailsMultiComponent,
  BrowserScriptDirective,
  CollectionDetailsComponent,
  ConfigListComponent,
  ConfigQueryComponent,
  CrawlConfigDetailsComponent,
  CrawlConfigDetailsMultiComponent,
  CrawlExecutionStatusComponent,
  CrawlHostGroupConfigDetailsComponent,
  CrawlHostGroupConfigDetailsMultiComponent,
  CrawlJobDetailsComponent,
  CrawlJobDetailsMultiComponent,
  DeleteDialogComponent,
  DeleteMultiDialogComponent,
  DetailMultiComponent,
  DurationPickerComponent,
  EntityDetailsComponent,
  EntityDetailsMultiComponent,
  EntityDialogComponent,
  EntityViewComponent,
  FilesizeInputComponent,
  JobStatusComponent,
  LabelComponent,
  MetaComponent,
  PolitenessConfigDetailsComponent,
  PolitenessConfigDetailsMultiComponent,
  RoleMappingDetailsComponent,
  RoleMappingDetailsMultiComponent,
  RoleMappingListComponent,
  RunCrawlDialogComponent,
  RunningCrawlDialogComponent,
  ScheduleDetailsComponent,
  ScheduleDetailsMultiComponent,
  SeedDetailsComponent,
  SeedDetailMultiComponent,
  SeedMetaComponent,
  SelectorComponent,
} from './components';
import {
  BrowserConfigNamePipe,
  CollectionNamePipe,
  CrawlConfigNamePipe,
  CrawlExecutionStatusPipe,
  CrawlScheduleNamePipe,
  JobExecutionStatePipe,
  JobExecutionStatusPipe,
  PolitenessConfigNamePipe,
  BrowserScriptNamePipe,
} from './pipe';

import {ConfigService} from '../commons/services';
import {ConfigQueryDirective} from './directives';
import {SeedDialogComponent} from './components/seed/seed-dialog/seed-dialog.component';
import {PreviewComponent} from './components/preview/preview.component';
import {SeedPreviewComponent} from './components/seed/seed-preview/seed-preview.component';
import {ReportModule} from '../report/report.module';
import {ToArrayPipe} from './pipe/to-array.pipe';
import {MetaPreviewComponent} from './components/meta/meta-preview/meta-preview.component';
import {SeedMetaPreviewComponent} from './components/seed-meta/seed-meta-preview/seed-meta-preview.component';
import {CollectionPreviewComponent} from './components/collection/collection-preview/collection-preview.component';
import {CrawljobPreviewComponent} from './components/crawljobs/crawljob-preview/crawljob-preview.component';
import {SchedulePreviewComponent} from './components/schedule/schedule-preview/schedule-preview.component';
import {CrawlconfigPreviewComponent} from './components/crawlconfig/crawlconfig-preview/crawlconfig-preview.component';
import {CrawlhostgroupconfigPreviewComponent} from './components/crawlhostgroupconfig/crawlhostgroupconfig-preview/crawlhostgroupconfig-preview.component';
import {BrowserconfigPreviewComponent} from './components/browserconfig/browserconfig-preview/browserconfig-preview.component';
import {BrowserscriptPreviewComponent} from './components/browserscript/browserscript-preview/browserscript-preview.component';
import {PolitenessconfigPreviewComponent} from './components/politenessconfig/politenessconfig-preview/politenessconfig-preview.component';
import {ShortcutComponent} from './components/shortcut/shortcut.component';
import {ActionShortcutComponent} from './components/shortcut/action-shortcut/action-shortcut.component';
import {BrowserConfigDialogComponent} from './components/browserconfig/browserconfig-dialog/browserconfig-dialog.component';
import {BrowserScriptDialogComponent} from './components/browserscript/browserscript-dialog/browserscript-dialog.component';
import {CollectionDialogComponent} from './components/collection/collection-dialog/collection-dialog.component';
import {CrawlConfigDialogComponent} from './components/crawlconfig/crawlconfig-dialog/crawlconfig-dialog.component';
import {CrawlHostGroupConfigDialogComponent} from './components/crawlhostgroupconfig/crawlhostgroupconfig-dialog/crawlhostgroupconfig-dialog.component';
import { CrawlJobDialogComponent } from './components/crawljobs/crawljob-dialog/crawljob-dialog.component';
import { PolitenessConfigDialogComponent } from './components/politenessconfig/politenessconfig-dialog/politenessconfig-dialog.component';
import { RoleMappingDialogComponent } from './components/rolemapping/rolemapping-dialog/rolemapping-dialog.component';
import { ScheduleDialogComponent } from './components/schedule/schedule-dialog/schedule-dialog.component';
import { FilterShortcutComponent } from './components/shortcut/filter-shortcut/filter-shortcut.component';
import { ShortcutListComponent } from './components/shortcut/shortcut-list/shortcut-list.component';


@NgModule({
    declarations: [
        ConfigComponent,
        ConfigurationsComponent,
        ConfigurationComponent,
        CrawlJobDetailsComponent,
        CrawlJobDetailsMultiComponent,
        ScheduleDetailsComponent,
        ScheduleDetailsMultiComponent,
        CrawlConfigDetailsComponent,
        CrawlConfigDetailsMultiComponent,
        BrowserConfigDetailsComponent,
        BrowserConfigDetailsMultiComponent,
        PolitenessConfigDetailsComponent,
        PolitenessConfigDetailsMultiComponent,
        BrowserScriptDetailsComponent,
        BrowserScriptDetailsMultiComponent,
        CrawlHostGroupConfigDetailsComponent,
        CrawlHostGroupConfigDetailsMultiComponent,
        BrowserScriptDirective,
        RoleMappingListComponent,
        RoleMappingDetailsComponent,
        RoleMappingDetailsMultiComponent,
        CollectionDetailsComponent,
        DeleteDialogComponent,
        DeleteMultiDialogComponent,
        ConfigQueryComponent,
        DetailMultiComponent,
        ConfigListComponent,
        LabelComponent,
        SelectorComponent,
        MetaComponent,
        SeedMetaComponent,
        EntityDetailsComponent,
        EntityDetailsMultiComponent,
        SeedDetailsComponent,
        SeedDetailMultiComponent,
        EntityViewComponent,
        JobStatusComponent,
        JobExecutionStatePipe,
        JobExecutionStatusPipe,
        CrawlExecutionStatusPipe,
        CrawlConfigNamePipe,
        CrawlScheduleNamePipe,
        CollectionNamePipe,
        CrawlExecutionStatusComponent,
        DurationPickerComponent,
        BrowserConfigNamePipe,
        PolitenessConfigNamePipe,
        FilesizeInputComponent,
        AnnotationComponent,
        RunCrawlDialogComponent,
        RunningCrawlDialogComponent,
        ConfigNavListComponent,
        EntityDialogComponent,
        ConfigQueryDirective,
        SeedDialogComponent,
        PreviewComponent,
        SeedPreviewComponent,
        ToArrayPipe,
        MetaPreviewComponent,
        SeedMetaPreviewComponent,
        CollectionPreviewComponent,
        CrawljobPreviewComponent,
        SchedulePreviewComponent,
        CrawlconfigPreviewComponent,
        CrawlhostgroupconfigPreviewComponent,
        BrowserconfigPreviewComponent,
        BrowserscriptPreviewComponent,
        PolitenessconfigPreviewComponent,
        ShortcutComponent,
        BrowserScriptNamePipe,
        ActionShortcutComponent,
        BrowserConfigDialogComponent,
        BrowserScriptDialogComponent,
        CollectionDialogComponent,
        CrawlConfigDialogComponent,
        CrawlHostGroupConfigDialogComponent,
        CrawlJobDialogComponent,
        PolitenessConfigDialogComponent,
        RoleMappingDialogComponent,
        ScheduleDialogComponent,
        FilterShortcutComponent,
        ShortcutListComponent,
    ],
    entryComponents: [
        DeleteMultiDialogComponent,
        DeleteDialogComponent,
        EntityDialogComponent,
        SeedDialogComponent,
        BrowserConfigDialogComponent,
        BrowserScriptDialogComponent,
        CollectionDialogComponent,
        CrawlConfigDialogComponent,
        CrawlHostGroupConfigDialogComponent,
        CrawlJobDialogComponent,
        PolitenessConfigDialogComponent,
        RoleMappingDialogComponent,
        ScheduleDialogComponent,
    ],
    imports: [
        CommonsModule,
        ConfigurationsRoutingModule,
        ReportModule,
    ],
    exports: [
    ],
    providers: [
        OptionsResolver,
        ConfigService,
        KindService,
        OptionsService,
        LabelService,
    ]
})
export class ConfigurationsModule {
}
