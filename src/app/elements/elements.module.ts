import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { WhiteframesComponent } from './whiteframes/whiteframes.component';
import { ListsComponent } from './lists/lists.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { NestableComponent } from './nestable/nestable.component';
import { GridComponent } from './grid/grid.component';
import { GridMasonryComponent } from './grid-masonry/grid-masonry.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@NgModule({
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  declarations: [ColorsComponent, WhiteframesComponent, ListsComponent, BootstrapComponent, ButtonsComponent, SweetAlertComponent, SpinnersComponent, NestableComponent, GridComponent, GridMasonryComponent, TypographyComponent, IconsComponent, UtilitiesComponent]
})
export class ElementsModule { }
