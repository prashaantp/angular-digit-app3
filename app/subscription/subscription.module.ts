import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { SubscriptionComponent } from './subscription.component';

import { SubscribeDetailsComponent } from './subscribe-details.component';
import { UnsubscribeDetailsComponent } from './unsubscribe-details.component';

import { SubscriptionService } from './subscription.service';

@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: SubscriptionComponent,
    children: [
      {
        path: 'subscribe-details', component: SubscribeDetailsComponent
      }, {
        path: 'unsubscribe-details', component: UnsubscribeDetailsComponent
      }, {
        path: '', redirectTo: 'subscribe-details', pathMatch: 'full'
      }
    ]
  }]), InMemoryWebApiModule.forRoot(InMemoryDataService), FormsModule, CommonModule],
  declarations: [SubscriptionComponent, SubscribeDetailsComponent, UnsubscribeDetailsComponent],
  providers: [SubscriptionService]
})
export class SubscriptionModule { }
