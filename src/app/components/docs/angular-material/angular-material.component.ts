import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { MdAnchor } from '@angular2-material/button';

@Component({
  directives: [ MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon, MdAnchor ],
  moduleId: module.id,
  selector: 'td-docs-angular-material',
  styleUrls: ['angular-material.component.css'],
  templateUrl: 'angular-material.component.html',
})
export class AngularMaterialComponent {

}
