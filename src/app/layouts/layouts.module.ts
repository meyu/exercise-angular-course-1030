import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { ColumnsComponent } from './columns/columns.component';
import { OverlapComponent } from './overlap/overlap.component';
import { BoxedComponent } from './boxed/boxed.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContainersComponent } from './containers/containers.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  declarations: [ColumnsComponent, OverlapComponent, BoxedComponent, TabsComponent, ContainersComponent]
})
export class LayoutsModule { }
