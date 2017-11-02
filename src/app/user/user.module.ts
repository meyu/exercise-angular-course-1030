import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverComponent } from './recover/recover.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent, LockComponent, SignupComponent, RecoverComponent]
})
export class UserModule { }
