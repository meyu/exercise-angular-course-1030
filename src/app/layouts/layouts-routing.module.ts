import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnsComponent } from './columns/columns.component';
import { OverlapComponent } from './overlap/overlap.component';
import { BoxedComponent } from './boxed/boxed.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContainersComponent } from './containers/containers.component';

const routes: Routes = [
  { path: 'columns', component: ColumnsComponent },
  { path: 'overlap', component: OverlapComponent },
  { path: 'boxed', component: BoxedComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'containers', component: ContainersComponent },
  { path: '', redirectTo: 'columns', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
