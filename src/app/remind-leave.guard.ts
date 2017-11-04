import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from './user/login/login.component';

@Injectable()
export class RemindLeaveGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (component.form.dirty) {
      return confirm('要離開了嗎？');
    } else {
      return true;
    }
  }
}
