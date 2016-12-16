import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent {

  constructor(private router: Router) { }

  public selectedUserAction(event: Event) {
    this.router.navigate([((<HTMLSelectElement>event.srcElement).value)]);
  }
}
