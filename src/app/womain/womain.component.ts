import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthHttp } from '../services/common/auth-http.service';
import { environment } from '../../environments/environment';
import { jsonParse } from '../../utility/jsonParse';

@Component({
  selector: 'app-womain',
  templateUrl: './womain.component.html',
  styleUrls: ['./womain.component.css']
})
export class WomainComponent implements OnInit {
  workorderid: any;
  constructor(private route: ActivatedRoute,
    private authHttp: AuthHttp) {
    this.workorderid = this.route.snapshot.params['id'];
    console.log("workorderid : " + this.route.snapshot.params['id']);
  }

  ngOnInit() {
    //get WO info with workorderid
    const baseUrl = environment.base + '/maximo/oslc/os/xx_wo/' + this.workorderid;

    try {
      this.authHttp.get(baseUrl,
        {
          'lean': 1,
          'collectioncount': 1
        }).subscribe(
          (res: any) => {
            console.log('woInfo:' + res);
            let jsonRes = jsonParse(res);
            console.log('woInfo: wolo9' + jsonRes.wolo9);
            console.log('woInfo: wonum' + jsonRes.wonum);
          }
        );

    } catch (err) {

    }
  }

}
