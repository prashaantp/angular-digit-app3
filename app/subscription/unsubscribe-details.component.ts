import { Component } from '@angular/core';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription';

@Component({
  moduleId: module.id,
  templateUrl: './unsubscribe-details.component.html'
})
export class UnsubscribeDetailsComponent {
  email: string;
  unsubscribeReason: string;

  errorMessage: string;

  constructor(private service: SubscriptionService) { }

  public unsubscribeUser(email: string, unsubscribeReason: string) {
    if (!(email || unsubscribeReason)) {
      alert('Please fill all the fields!!');
      return;
    }

    this.service.findByEmail(email)
      .then((existing: Subscription[]) => this.upsertSubscription(existing, email, unsubscribeReason))
      .catch((e: any) => alert(`Failed to subscribe: ${e}`));
  }

  private upsertSubscription(existing: Subscription[], email: string, unsubscribeReason: string) {
    if (!existing || existing.length == 0) {
      this.errorMessage = `Subscription not found for ${email}`;
      return;
    }

    let subscription = existing[0];

    subscription.active = false;
    subscription.package = null;
    subscription.feedback = unsubscribeReason;

    console.log('sub id', subscription.id);

    this.service.updateSubscription(subscription)
      .then(() => alert(`Subscription canceled for ${subscription.email}`))
      .catch(() => alert(`Subscription cancelation failed for ${subscription.email}`));

    this.clearInputs();
  }

  public clearInputs() {
    this.email = this.unsubscribeReason = this.errorMessage = '';
  }
}
