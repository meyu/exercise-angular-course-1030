import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '', component: NaviComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'forms', loadChildren: './forms/forms.module#ForrmsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'layouts', loadChildren: './layouts/layouts.module#LayoutsModule' },
      { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
      { path: 'user', loadChildren: './user/user.module#UserModule' },
    ]
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
