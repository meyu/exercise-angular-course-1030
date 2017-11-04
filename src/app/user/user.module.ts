import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverComponent } from './recover/recover.component';
import { RemindLeaveGuard } from '../remind-leave.guard';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [RemindLeaveGuard],
  declarations: [LoginComponent, LockComponent, SignupComponent, RecoverComponent]
})
export class UserModule { }
