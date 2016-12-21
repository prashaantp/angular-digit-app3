import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.authService.isLoggedIn)
            this.router.navigate(['admin', 'admin-login']);

        console.log('isLoggedIn', this.authService.isLoggedIn);

        return this.authService.isLoggedIn;
    }
}
