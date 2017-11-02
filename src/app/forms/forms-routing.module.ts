import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassicComponent } from './classic/classic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { ValidationComponent } from './validation/validation.component';
import { MaterialComponent } from './material/material.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { XeditableComponent } from './xeditable/xeditable.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorsComponent } from './editors/editors.component';

const routes: Routes = [
  { path: 'classic', component: ClassicComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'advanced', component: AdvancedComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'dropzone', component: DropzoneComponent },
  { path: 'xeditable', component: XeditableComponent },
  { path: 'wizard', component: WizardComponent },
  { path: '', redirectTo: 'classic', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
