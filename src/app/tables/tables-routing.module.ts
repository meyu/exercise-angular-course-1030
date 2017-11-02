import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootgridComponent } from './bootgrid/bootgrid.component';
import { ClassicComponent } from './classic/classic.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  { path: 'bootgrid', component: BootgridComponent },
  { path: 'classic', component: ClassicComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: '', redirectTo: 'bootgrid', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
