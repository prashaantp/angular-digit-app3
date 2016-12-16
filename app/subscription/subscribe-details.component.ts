import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './subscribe-details.component.html'
})
export class SubscribeDetailsComponent {
  public selectedUserAction(event: Event) {
    console.log((<HTMLSelectElement>event.srcElement).value);
  }
}
