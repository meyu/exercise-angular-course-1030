import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';

// 若套用 user-routing.module.ts 的 routes 寫法，會使 NaviComponent 的框架消息
const routes: Routes = [
  { path: 'flot', component: FlotComponent },
  { path: 'radial', component: RadialComponent },
  { path: 'rickshaw', component: RickshawComponent },
  { path: '', redirectTo: 'flot', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
