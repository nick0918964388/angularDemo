import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/login/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authservice: AuthenticationService) { }

  ngOnInit() {
    this.authservice.checkOnLine().subscribe(
      (data: any) => {
        try {
          let jsonObserve = JSON.parse(data);
          if (jsonObserve != undefined) {
            console.log('data==>' + jsonObserve.status);
          }
          if (jsonObserve.status != undefined && jsonObserve.status != "200") {
            window.location.href = '/login';
          }
        } catch (err) {
          //res is not json object ==> status = 200
        }
      });
  }
  onlogout() {
    console.log('logout fam');
    this.authservice.logout().subscribe(
      (data: any) => {
        console.log('data==>' + data);
        window.location.href = '/login';
      });
  }
}
