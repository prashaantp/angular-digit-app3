import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './unsubscribe-details.component.html'
})
export class UnsubscribeDetailsComponent {
  public selectedUserAction(event: Event) {
    console.log((<HTMLSelectElement>event.srcElement).value);
  }
}
