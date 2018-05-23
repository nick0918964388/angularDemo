import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../services/alert/alert.service';
import { AuthenticationService } from '../services/login/authentication.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder
    , private authservice: AuthenticationService,
    private alertservice: AlertService,

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    }

    )

  }
  onSubmit() {
    if (this.form.valid) {
      console.log('login in fam');
      this.authservice.login(this.form.controls.username.value, this.form.controls.password.value).subscribe(
        (data: any) => {
          if (data.status != null || data.status == 200) {
            this.alertservice.success('登入成功');
            window.location.href = '/home';
          } else {
            console.log('login fail !');
            this.alertservice.success('帳號密碼組合錯誤');
          }
        });
    } else {

    }
  }
  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
}
