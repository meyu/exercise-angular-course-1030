import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleMapsFullComponent } from './google-maps-full/google-maps-full.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';
import { DatamapsComponent } from './datamaps/datamaps.component';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  declarations: [GoogleMapsFullComponent, GoogleMapsComponent, VectorMapsComponent, DatamapsComponent]
})
export class MapsModule { }
