import { WomainComponent } from './womain/womain.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatToolbarModule, MatListModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule,
  MatMenuModule, MatTableModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatTabsModule,
  MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WolistComponent } from './wolist/wolist.component';
import { WoplanComponent } from './womain/womain-sub/woplan/woplan.component';
import { WoactualComponent } from './womain/womain-sub/woactual/woactual.component';

import { MaterialComponent } from './material/material.component';
import { AssetComponent } from './asset/asset.component';
import { WowfComponent } from './womain/womain-sub/wowf/wowf.component';
import { HttpModule } from '@angular/http';
import { ProcessingService } from './services/common/processing.service';
import { AuthService } from './services/common/auth.service';
import { AuthHttp } from './services/common/auth-http.service';
import { QueryApiService } from './services/query-data.service';
import { AlertService } from './services/alert/alert.service';
import { TreeTableModule } from 'ng-treetable';
import { AlertComponent } from './_directives/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { AuthenticationService } from './services/login/authentication.service';
import { WomainInfoComponent } from './womain/womain-info/womain-info.component';




@NgModule({
  declarations: [
    AppComponent,
    WolistComponent,
    WoplanComponent,
    WoactualComponent,
    WomainComponent,
    MaterialComponent,
    AssetComponent,
    WowfComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    FieldErrorDisplayComponent,
    WomainInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule, MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpModule,
    MatProgressSpinnerModule,
    TreeTableModule,
    MatGridListModule,
    FormsModule, ReactiveFormsModule, MatTabsModule,
    MatCardModule
  ],
  providers: [
    ProcessingService,
    AuthService,
    AuthHttp,
    AlertService,
    QueryApiService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
