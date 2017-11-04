import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverComponent } from './recover/recover.component';
import { RemindLeaveGuard } from '../remind-leave.guard';

const routes: Routes = [
  {
    // 不被navi框住的連結
    path: 'do', children: [
      { path: 'login', component: LoginComponent, canDeactivate: [RemindLeaveGuard] },
      { path: 'lock', component: LockComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'recover', component: RecoverComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  // 會被navi框住的連結
  { path: 'login', component: LoginComponent, canDeactivate: [RemindLeaveGuard] },
  { path: 'lock', component: LockComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
