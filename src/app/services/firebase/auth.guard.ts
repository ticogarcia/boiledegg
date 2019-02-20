import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { FireauthService } from './fireauth.service'
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: FireauthService, private router: Router) {}

  /**
   * Used for guarding routes that require authentication
   *
   * Example:
   *
   * ``` typescript
   * const routes: Routes = [
   * ///...
   * { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
   * ];
   * ```
   *
   * @param next - route
   * @param state - current route
   * @returns user login status
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.auth.user.pipe(
      take(1),
        map(user => !!user),
        tap(loggedIn => {
          if (!loggedIn) {
            console.log('access denied');
            this.router.navigate(['/login']);
          }
        })
      );
    }
}
