import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { MemberOnlyGuard } from './member-only.guard';

const routes: Routes = [
  {
    path: '', component: NaviComponent, children: [
      { path: '', component: DashboardComponent, canActivate: [MemberOnlyGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [MemberOnlyGuard] },
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
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
