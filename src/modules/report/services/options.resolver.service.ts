import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {map, toArray} from 'rxjs/operators';

import {ConfigApiService} from '../../core/services';
import {Kind} from '../../../shared/models';
import {ListRequest} from '../../../api';
import {ConfigOptions} from '../containers/report/report.component';

@Injectable()
export class OptionsResolver implements Resolve<ConfigOptions> {


  constructor(private backendService: ConfigApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ConfigOptions> | Promise<ConfigOptions> | ConfigOptions {
    const listRequest = new ListRequest();
    listRequest.setKind(Kind.CRAWLJOB.valueOf());
    return this.backendService.list(listRequest).pipe(
      toArray(),
      map(crawlJobs => ({crawlJobs}))
    );
  }

}