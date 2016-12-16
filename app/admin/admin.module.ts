import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login.component';
import { AdminViewDetailsComponent } from './admin-view-details.component';

@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: AdminComponent,
    children: [
      {
        path: 'admin-login', component: AdminLoginComponent
      }, {
        path: 'admin-view-details', component: AdminViewDetailsComponent
      }, {
        path: '', redirectTo: 'admin-login', pathMatch: 'full'
      }
    ]
  }])],
  declarations: [AdminComponent, AdminLoginComponent, AdminViewDetailsComponent],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
