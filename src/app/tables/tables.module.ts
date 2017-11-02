import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { ClassicComponent } from './classic/classic.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BootgridComponent } from './bootgrid/bootgrid.component';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  declarations: [ClassicComponent, DatatableComponent, BootgridComponent]
})
export class TablesModule { }
