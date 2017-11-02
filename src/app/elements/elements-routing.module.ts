import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'colors', component: ColorsComponent },
  { path: 'whiteframes', component: WhiteframesComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'sweet-alert', component: SweetAlertComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'nestable', component: NestableComponent },
  { path: 'grid', component: GridComponent },
  { path: 'grid-masonry', component: GridMasonryComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: '', redirectTo: 'colors', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
