import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  directives: [ MdToolbar , MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES ],
  moduleId: module.id,
  selector: 'td-layout-card-over',
  styleUrls: [ 'layout-card-over.component.css' ],
  templateUrl: 'layout-card-over.component.html',
})
export class TdLayoutCardOverComponent {

  /**
   * title in card
   */
  @Input('title') title: string;

  /**
   * subtitle in card
   */
  @Input('subtitle') subtitle: string;

}
