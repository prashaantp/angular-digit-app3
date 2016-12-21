import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';

import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'subscription', loadChildren: 'app/subscription/subscription.module#SubscriptionModule'
  },
  {
    path: '', redirectTo: 'subscription', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

