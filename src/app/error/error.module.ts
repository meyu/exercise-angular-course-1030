import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { E404Component } from './e404/e404.component';
import { E403Component } from './e403/e403.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  declarations: [E404Component, E403Component]
})
export class ErrorModule { }
