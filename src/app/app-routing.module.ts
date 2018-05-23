import { WowfComponent } from './womain/womain-sub/wowf/wowf.component';
import { AssetComponent } from './asset/asset.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WolistComponent } from './wolist/wolist.component';
import { WoplanComponent } from './womain/womain-sub/woplan/woplan.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WomainComponent } from './womain/womain.component';



const routes: Routes = [
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'wolist', component: WolistComponent },
      { path: 'woplan', component: WoplanComponent },
      { path: 'asset', component: AssetComponent },
      { path: 'wowf', component: WowfComponent },
      { path: 'womain/:id', component: WomainComponent }
    ]
  },



  { path: 'login', component: LoginComponent }//,
  //{path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
