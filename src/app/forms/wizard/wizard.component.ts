import { Component, OnInit } from '@angular/core';
import { formWizard } from './init';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    formWizard();
  }

}
