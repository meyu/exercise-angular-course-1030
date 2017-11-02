import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { E403Component } from './e403/e403.component';

const routes: Routes = [
  {
    path: 'error', children: [
      { path: '404', component: E404Component },
      { path: '403', component: E403Component },
      { path: '', redirectTo: '404', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
