import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';

import { SubscriptionComponent } from './subscription/subscription.component';

import { AuthGuard } from './admin/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, loadChildren: 'app/admin/admin.module#AdminModule'
    , canLoad: [AuthGuard]
  },
  {
    path: 'subscription', component: SubscriptionComponent, loadChildren: 'app/subscription/subscription.module#SubscriptionModule'
  },
  { path: '', redirectTo: 'subscription', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

