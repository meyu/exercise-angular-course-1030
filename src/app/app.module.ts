import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ErrorModule } from './error/error.module';
import { NaviComponent } from './navi/navi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { MemberOnlyGuard } from './member-only.guard';
import { RemindLeaveGuard } from './remind-leave.guard';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    DashboardComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    ErrorModule,
    AppRoutingModule,
  ],
  providers: [MemberOnlyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
