
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Subscription } from './subscription';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let subscriptions: Subscription[] = [
      { id: 1, email: 'abc@gmail.com', startDate: new Date(), package: 'one_year', active: true, feedback: null },
      { id: 2, email: 'xyz@gmail.com', startDate: new Date(), package: 'three_year', active: true, feedback: null }
    ];
    return { subscriptions };
  }
}