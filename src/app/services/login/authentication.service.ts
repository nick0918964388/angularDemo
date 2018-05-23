import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'
import { environment } from '../../../environments/environment';
import { AuthHttp } from '../common/auth-http.service';

@Injectable()
export class AuthenticationService {
    constructor(private authHttp: AuthHttp) { }

    login(username: string, password: string) {
        let maxauth = btoa(username + ":" + password);
        try {
            return this.authHttp.login(environment.base + '/maximo/oslc/login', maxauth.toString());
        }
        catch (err) {
            return err;
        }


        /*.map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
 
            return user;
        });*/
    }

    logout() {
        // remove user from local storage to log user out
        return this.authHttp.login(environment.base + '/maximo/oslc/logout', '');
    }
    checkOnLine() {
        console.log('authentication==>');
        try {
            return this.authHttp.get(environment.base + '/maximo/oslc/os/xx_wo?lean=1&oslc.PageSize=1');
        } catch (err) {
            console.log('authentication==> catch err');
            return err;
        }

    }
}