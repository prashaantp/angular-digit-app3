import { Component } from '@angular/core';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {
  errorMessage: string;

  constructor(public authService: AuthService, public router: Router) {
    this.errorMessage = null
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin/admin-view-details';

        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
  }

}
