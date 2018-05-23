import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators';
import { iif, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import encodeQueryData from '../../../utility/encodeQueryData';
import { AuthService } from './auth.service';
import { AlertService } from '../alert/alert.service';
import { ProcessingService } from './processing.service';
// import { PROCESSING_GLOBAL, PROCESSING_LOCAL } from '../../../environments/constants';
import { randomRocessId } from '../../../utility/guid';


@Injectable()
export class AuthHttp {

  constructor(
    private authService: AuthService,
    private http: Http,
    private alertService: AlertService,
    private processingService: ProcessingService
  ) { }

  createAuthorizationHeader(headers: Headers) {
    // headers.append('Authorization', 'Bearer ' + this.authService.accessToken);
    // headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    headers.append('Content-Type', 'application/json;charset=utf-8');

  }
  /*
    errorHandler(processing, method= 'get', url= '', data: {}, error: any) {
      this.processingService.del(processing);
      let errorList = this.alertService.value.filter(item => item.type === AlertService.TYPE_ERROR);
      if(error.status !== undefined) {
        let message = typeof error._body === 'string' ? JSON.parse(error._body).Message : `${error.statusText}`;
        if(error.status === 401) {
          // access_token 失效重新要
          return this.authService.refreshAuthentication().mergeMap(res => {
            if (res.access_token) {
              // 回傳重打API訊息
              switch(method) {
                case 'get':
                  return this.get(url, data);
                case 'post':
                  return this.post(url, data);
                case 'put':
                  return this.put(url, data);
                case 'delete':
                  return this.delete(url, data);
              }
            }
          });
  
        } else {
          // 其他錯誤
          if(errorList.length === 0) {
            this.alertService.push({
              type: AlertService.TYPE_ERROR,
              title: `Error ${error.status}`,
              message: message
            });
          }
          return Observable.throw(
            new Error(JSON.stringify({
              status: error.status,
              body: typeof error._body === 'string' ? JSON.parse(error._body) : `${error.statusText}`
            }))
          )
        }
      }
      // else if(error.message){ // IE
      //   this.processingService.del(processing);
      //   if(errorList.length === 0) {
      //     this.alertService.push({
      //       type: AlertService.TYPE_ERROR,
      //       message: error.message
      //     });
      //   }
      //   return Observable.throw(
      //     new Error(JSON.stringify({
      //       status: 403,
      //       body: { error: error.message }
      //     }))
      //   )
      // }
    }
  */
  responseHandler(processing, res: Response) {
    this.processingService.del(processing);
    return res.json();
  }
  /* */
  errorHandler(error: any, method: string) {
    if (error.status != undefined) {
      console.log('errorHandler==>' + error.status + error.statusText);
      /*
      if(method==='login'){
        this.alertService.error('登入錯誤! error stats:' + error.status + ',error statusText:' + error.statusText);
      }
      */

      return throwError(
        new Error(JSON.stringify({
          status: error.status,
          body: { error: error.statusText }
        }))
      )
    } else {
      //undefined
      return throwError(
        new Error(JSON.stringify({
          status: 403,
          body: { error: error.statusText }
        }))
      )
    }
  }
  get(url, data = {}) {
    console.log('http.get data:' + JSON.stringify(data));
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    // const processing = { level, id: randomRocessId() };
    // this.processingService.add(processing);
    /*
     let a = 'http://nickall.asuscomm.com:9080/maxrest/rest/mbo/workorder/';
     a = a + '?_includecols=wolo9,wonum,siteid,lead,owner,schedstart&_maxItems=10&_dropnulls=false&_rsStart=1&_format=json';
     return this.http.get(a, {
       headers: headers
     });
     */
    return this.http.get(url + '?' + encodeQueryData(data), {
      headers: headers
    }).pipe(map((res: any) => {

      if (res.Error != undefined) {
        //400 error
        catchError(err => of(
          JSON.stringify({
            status: err.Error.statusCode,
            body: { error: err.Error.message }
          })
        ))
      } else {
        console.log('http success ok!', res);
        return res;
      }
    }), catchError(err => of(
      JSON.stringify({
        status: err.status,
        body: { error: err.statusText }
      })
    )));
    // .map(this.responseHandler.bind(this, processing));
    // .catch(this.errorHandler.bind(this, processing, 'get', url, data));
  }

  post(url, data = {}) {
    console.log('url==>' + url);
    console.log('http.post data:' + JSON.stringify(data));
    const headers = new Headers();
    // this.createAuthorizationHeader(headers);
    // let processing = { level:PROCESSING_GLOBAL, id:randomRocessId() };
    // this.processingService.add(processing);
    return this.http.post(url, data, {
      headers: headers
    }).pipe(map((res: any) => {
      console.log('res', res);
      return res;
    }), catchError(err => this.errorHandler(err, 'post')));/*
    return this.http.get(url + '?' + encodeQueryData(data), {
      headers: headers
    });*/
    // .map(this.responseHandler.bind(this, processing))
    // .catch(this.errorHandler.bind(this, processing, 'post', url, data));
  }
  login(url, maxauth: string) {
    console.log('login url==>' + url);
    console.log('login auth:' + maxauth);
    const headers = new Headers();
    headers.append('maxauth', maxauth);
    return this.http.get(url, {
      headers: headers
    }).pipe(map((res: any) => {
      console.log('res', res);
      return res;
    }), catchError(
      err => of(
        JSON.stringify({
          status: err.status,
          body: { error: err.statusText }
        })
      )
    ));
  }
  logout(url) {
    console.log('logout url==>' + url);
    const headers = new Headers();
    return this.http.get(url, {
      headers: headers
    }).pipe(map((res: any) => {
      console.log('res', res);
      return res;
    }), catchError(err =>
      this.errorHandler(err, 'logout')
    ));
  }
  /*
    put(url, data) {
  
      console.log('http.put data:' + JSON.stringify(data))
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      let processing = { level:PROCESSING_GLOBAL, id:randomRocessId() };
      this.processingService.add(processing);
      return this.http.put(url, data, {
        headers: headers
      })
      .map(this.responseHandler.bind(this, processing))
      .catch(this.errorHandler.bind(this, processing, 'put', url, data));
    }
  
    delete(url , data) {
      console.log('http.delete data:' + JSON.stringify(data))
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      let processing = { level:PROCESSING_GLOBAL, id:randomRocessId() };
      this.processingService.add(processing);
      return this.http.delete(url + "?" +encodeQueryData(data), {
        headers: headers
      })
      .map(this.responseHandler.bind(this, processing))
      .catch(this.errorHandler.bind(this, processing, 'delete', url, data));
    }
  
    file(url) {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.get(url, {
        headers: headers,
        responseType: ResponseContentType.Blob
      })
      .map((res: Response) => res.blob())
      .catch(err => Observable.throw(err));
    }
  */
}
