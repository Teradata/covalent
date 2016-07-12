import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';

import { TD_LAYOUT_DIRECTIVES, TD_STEPS_DIRECTIVES } from '../../../../platform/core';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MdButton,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    TdHighlightComponent,
    TD_STEPS_DIRECTIVES,
  ],
  moduleId: module.id,
  selector: 'td-layouts-nav-list',
  styleUrls: ['nav-list.component.css'],
  templateUrl: 'nav-list.component.html',
})
export class NavListComponent {

  items: Object[] = [{
    description: 'A simple layout with toolbar & sidenav',
    icon: 'view_compact',
    route: '/nav-view',
    title: 'Nav View',
  }, {
    description: 'The Nav View with an embedded list',
    icon: 'view_quilt',
    route: '/nav-list',
    title: 'Nav List View',
  }, {
    description: 'A card overlaying a toolbar',
    icon: 'view_day',
    route: '/card-over',
    title: 'Card Over View',
  }, {
    description: 'Content/object management views',
    icon: 'view_list',
    route: '/manage-list',
    title: 'Management List View',
  }];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/layouts']);
  }
}
