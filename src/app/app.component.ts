import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdIcon } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TdLayoutComponent, TD_LOADING_ENTRY_COMPONENTS } from '../platform/core';

@Component({
  directives: [
    ROUTER_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES,
    TdLayoutComponent,
  ],
  moduleId: module.id,
  selector: 'td-docs-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
  precompile: [ TD_LOADING_ENTRY_COMPONENTS ],
})
export class DocsAppComponent {

  routes: Object[] = [{
      icon: 'home',
      route: '.',
      title: 'Home',
    }, {
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    }, {
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    }, {
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    }, {
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Teradata Components',
    },
  ];
}
