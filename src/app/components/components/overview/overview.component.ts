import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
  ],
  moduleId: module.id,
  selector: 'td-components-overview',
  styleUrls: ['overview.component.css'],
  templateUrl: 'overview.component.html',
})
export class OverviewComponent {
  items: Object[] = [{
      color: 'pink-700',
      icon: 'code',
      route: 'syntax-highlighting',
      title: 'Syntax Highlighting',
    }, {
      color: 'deep-purple-700',
      icon: 'view_list',
      route: 'steps',
      title: 'Stepper',
    }, {
      color: 'blue-700',
      icon: 'open_with',
      route: 'expansion-panel',
      title: 'Expansion Panel',
    }, {
      color: 'cyan-700',
      icon: 'file_upload',
      route: 'file-upload',
      title: 'File Upload',
    }, {
      color: 'light-green-700',
      icon: 'hourglass_empty',
      route: 'loading',
      title: 'Loading',
    }, {
      color: 'orange-700',
      icon: 'chrome_reader_mode',
      route: 'markdown',
      title: 'Markdown',
    }, {
      color: 'red-700',
      icon: 'devices',
      route: 'media',
      title: 'Media',
    }, {
      color: 'deep-orange-700',
      icon: 'filter_list',
      route: 'pipes',
      title: 'Pipes',
    },
  ];
}
