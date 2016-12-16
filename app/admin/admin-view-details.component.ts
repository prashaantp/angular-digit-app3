import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubscriptionService } from '../subscription/subscription.service';
import { Subscription } from '../subscription/subscription';

@Component({
  moduleId: module.id,
  templateUrl: './admin-view-details.component.html'
})
export class AdminViewDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[];

  constructor(private service: SubscriptionService) { }

  ngOnInit() {
    this.subscriptions = [];

    this.service.getSubscriptions()
      .then((data: Subscription[]) => this.subscriptions = data)
      .catch((e: any) => alert(`Could not retrieve subscriptions: ${e}`))
  }

  ngOnDestroy() {

  }

}
