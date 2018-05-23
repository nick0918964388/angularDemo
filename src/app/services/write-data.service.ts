import { Injectable } from '@angular/core';

import { AuthHttp } from './common/auth-http.service';
import { environment } from '../../environments/environment';

@Injectable()
export class WriteApiService {
  constructor(private authHttp: AuthHttp) { }

  writeResult(pageIndex, pageSize , currentFilter , currentSort) {
    const baseUrl = 'http://' + environment.base + '/maxrest/rest/mbo/workorder/';
    let baseuw = 'siteid\= \'F14B\' AND WOLO9 IS NOT NULL';
    /*let sortAsc: string;
    let sortDesc: string;*/
    console.log('this.currentFilterData=' + currentFilter);
    console.log('baseUrl=' + baseUrl);

    if (currentFilter !== undefined && currentFilter !== '') {
      baseuw = baseuw + ' AND LEAD LIKE \'\%' + currentFilter.toUpperCase() + '\%\'';
    }
    return this.authHttp.post(baseUrl,
      {
        _includecols: 'wolo9,wonum,siteid,lead,owner,schedstart',
        _maxItems: pageSize,
        _format: 'json',
        _dropnulls: false,
        _uw: baseuw,
        _rsStart: pageIndex * pageSize + 1,

    });
  }
}
