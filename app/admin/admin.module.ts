import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login.component';
import { AdminViewDetailsComponent } from './admin-view-details.component';

import { AuthGuard } from './auth-guard.service';


@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: AdminComponent,
    children: [
      {
        path: 'admin-login', component: AdminLoginComponent
      }, {
        path: 'admin-view-details', component: AdminViewDetailsComponent , canActivate: [AuthGuard]
      }, {
        path: '', redirectTo: 'admin-view-details', pathMatch: 'full'
      }
    ]
  }]), FormsModule, CommonModule],
  declarations: [AdminComponent, AdminLoginComponent, AdminViewDetailsComponent],
  providers: [AuthGuard],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
