import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.authService.getToken()!;
    // decode the token to get its payload
    const tokenPayload: any = decode(token);
    if (!this.authService.isLoggedIn || tokenPayload.isAdmin !== true) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
