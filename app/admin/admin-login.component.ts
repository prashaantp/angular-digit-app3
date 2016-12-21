import { Component } from '@angular/core';
import {
  Router,
  NavigationExtras
} from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {
  errorMessage: string;

  constructor(public router: Router, public authService: AuthService) {
    this.errorMessage = null
  }

  login(event: Event, username: string, password: string) {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      this.authService.isLoggedIn = true;
      this.router.navigate(['admin', 'admin-view-details']);
      console.log('login1');
    } else {
      this.errorMessage = 'Invalid username or password';
      console.log('login2');
    }
  }

  logout() {
  }
}
