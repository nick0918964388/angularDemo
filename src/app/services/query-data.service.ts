import { MatToolbarModule } from '@angular/material/toolbar';
import { Injectable } from '@angular/core';

import { AuthHttp } from './common/auth-http.service';
import { environment } from '../../environments/environment';

@Injectable()
export class QueryApiService {
  constructor(private authHttp: AuthHttp) { }

  getQueryResult(pageIndex, pageSize, currentFilter, currentSort) {
    // const baseUrl = 'http://' + environment.base + '/maxrest/rest/mbo/workorder/';
    const baseUrl = environment.base + '/maximo/oslc/os/xx_wo/';
    let baseuw = 'historyflag=0 and siteid="F12" and istask=0 and wolo9=\"*\"';
    /*let sortAsc: string;
    let sortDesc: string;*/
    console.log('this.currentFilterData=' + currentFilter);
    console.log('baseUrl=' + baseUrl);

    if (currentFilter !== undefined && currentFilter !== '') {
      baseuw = baseuw + ' AND LEAD LIKE \'\%' + currentFilter.toUpperCase() + '\%\'';
    }
    try {
      return this.authHttp.get(baseUrl,
        {
          /*
          _includecols: 'wolo9,wonum,siteid,lead,owner,schedstart',
          _maxItems: pageSize,
          _format: 'json',
          _dropnulls: false,
          _uw: baseuw,
          _rsStart: pageIndex * pageSize + 1,*/
          'lean': 1,
          'collectioncount': 1,
          'oslc.select': 'wolo9,wonum,siteid,assetnum,route,lead,owner,status,schedstart,ownerperson.displayname',
          'oslc.pageSize': pageSize,
          'oslc.where': baseuw,
          'pageno': pageIndex + 1
        });
    } catch (err) {
      return err;
    }
  }
}
