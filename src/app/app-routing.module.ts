import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ActivityComponent} from './activity';
import {DocumentationComponent} from './documentation/documentation.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {LoglevelComponent} from './configurations/logs/';
import {SearchComponent} from './search/search.component';
import {CrawlJobsComponent} from './configurations/crawljobs/crawljobs-page.component';
import {SchedulePageComponent} from './configurations/schedule/schedule-page.component';
import {CrawlHostGroupConfigPageComponent} from './configurations/crawlhostgroupconfig/crawlhostgroupconfig-page.component';
import {PolitenessConfigPageComponent} from './configurations/politenessconfig/politenessconfig-page.component';
import {BrowserConfigPageComponent} from './configurations/browserconfig/browserconfig-page.component';
import {BrowserScriptPageComponent} from './configurations/browserscript/browserscript-page.component';
import {CrawlConfigPageComponent} from './configurations/crawlconfig/';
import {RoleMappingPageComponent} from './rolemapping/rolemapping-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'full',
      },
      {
        path: 'activity',
        component: ActivityComponent
      },
      {
        path: 'crawljobs',
        component: CrawlJobsComponent
      },
      {
        path: 'documentation',
        component: DocumentationComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'schedule',
        component: SchedulePageComponent
      },
      {
        path: 'crawlconfig',
        component: CrawlConfigPageComponent
      },
      {
        path: 'crawlhostgroupconfig',
        component: CrawlHostGroupConfigPageComponent
      },
      {
        path: 'browserconfig',
        component: BrowserConfigPageComponent
      },
      {
        path: 'browserscript',
        component: BrowserScriptPageComponent
      },
      {
        path: 'politenessconfig',
        component: PolitenessConfigPageComponent
      },
      {
        path: 'logconfig',
        component: LoglevelComponent
      },
      {
        path: 'rolemapping',
        component: RoleMappingPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
