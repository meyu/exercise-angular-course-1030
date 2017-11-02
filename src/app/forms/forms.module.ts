import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ClassicComponent } from './classic/classic.component';
import { ValidationComponent } from './validation/validation.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { MaterialComponent } from './material/material.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { XeditableComponent } from './xeditable/xeditable.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorsComponent } from './editors/editors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  declarations: [ClassicComponent, ValidationComponent, AdvancedComponent, MaterialComponent, DropzoneComponent, XeditableComponent, WizardComponent, EditorsComponent]
})
export class ForrmsModule { }
