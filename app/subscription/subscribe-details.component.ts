import { Component } from '@angular/core';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription';

@Component({
  moduleId: module.id,
  templateUrl: './subscribe-details.component.html'
})
export class SubscribeDetailsComponent {
  subscriptionType: String;
  subscriptionPackage: String;
  email: String;
  subscriptionStartMonth: String;
  subscriptionStartYear: String;
  shippingAddress: String;

  constructor(private service: SubscriptionService) { }

  public subscribeUser(subscriptionType: string, subscriptionPackage: string, email: string,
    subscriptionStartMonth: string, subscriptionStartYear: string, shippingAddress: string) {

    if (!(subscriptionType || subscriptionPackage || email
      || subscriptionStartMonth || subscriptionStartYear || shippingAddress)) {
      alert('Please fill all the fields!!');
      return;
    }

    let subscription = new Subscription();
    subscription.email = email;
    subscription.active = true;
    subscription.package = subscriptionPackage;
    subscription.startDate = new Date(+subscriptionStartYear, +subscriptionStartMonth);

    this.service.findByEmail(email)
      .then((existing: Subscription[]) => this.upsertSubscription(existing, subscription))
      .catch((e: any) => alert(`Failed to subscribe: ${e}`));
  }

  private upsertSubscription(existing: Subscription[], subscription: Subscription) {
    if (existing && existing.length > 0)
      subscription.id = existing[0].id;

    if (!subscription.id)
      this.service.createSubscription(subscription)
        .then(() => alert(`Subscription created for ${subscription.email}`))
        .catch(() => alert(`Subscription request failed for ${subscription.email}`));
    else
      this.service.updateSubscription(subscription)
        .then(() => alert(`Subscription updated for ${subscription.email}`))
        .catch(() => alert(`Subscription update failed for ${subscription.email}`));

    this.clearInputs();
  }

  public clearInputs() {
    this.subscriptionType = this.subscriptionPackage = this.email =
      this.subscriptionStartMonth = this.subscriptionStartYear = this.shippingAddress = '';
  }
}
