import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatamapsComponent } from './datamaps/datamaps.component';
import { GoogleMapsFullComponent } from './google-maps-full/google-maps-full.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';

const routes: Routes = [
  { path: 'datamaps', component: DatamapsComponent },
  { path: 'google-maps', component: GoogleMapsComponent },
  { path: 'google-maps-full', component: GoogleMapsFullComponent },
  { path: 'vector-maps', component: VectorMapsComponent },
  { path: '', redirectTo: 'datamaps', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
