import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'components-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
  animations: [slideInDownAnimation],
})
export class ComponentsOverviewComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
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
      color: 'light-blue-700',
      icon: 'space_bar',
      route: 'file-input',
      title: 'File Input',
    }, {
      color: 'cyan-700',
      icon: 'attach_file',
      route: 'file-upload',
      title: 'File Upload',
    }, {
      color: 'grey-700',
      icon: 'label',
      route: 'chips',
      title: 'Chips',
    }, {
      color: 'light-green-700',
      icon: 'hourglass_empty',
      route: 'loading',
      title: 'Loading',
    }, {
      color: 'amber-700',
      icon: 'open_in_browser',
      route: 'dialogs',
      title: 'Simple Dialogs',
    }, {
      color: 'green-700',
      icon: 'grid_on',
      route: 'data-table',
      title: 'Data Table',
    }, {
      color: 'teal-700',
      icon: 'format_indent_increase',
      route: 'json-formatter',
      title: 'JSON Formatter',
    }, {
      color: 'blue-grey-700',
      icon: 'swap_horiz',
      route: 'paging',
      title: 'Paging',
    }, {
      color: 'purple-700',
      icon: 'notifications',
      route: 'notifications',
      title: 'Notifications',
    }, {
      color: 'light-blue-A400',
      icon: 'info_outline',
      route: 'message',
      title: 'Messages',
    }, {
      color: 'lime-700',
      icon: 'search',
      route: 'search',
      title: 'Search',
    }, {
      color: 'red-700',
      icon: 'devices',
      route: 'media',
      title: 'Media Queries',
    }, {
      color: 'light-blue-700',
      icon: 'wb_iridescent',
      route: 'directives',
      title: 'Directives',
    }, {
      color: 'deep-orange-700',
      icon: 'filter_list',
      route: 'pipes',
      title: 'Pipes',
    },
  ];
  optional: Object[] = [{
      color: 'pink-700',
      icon: 'code',
      route: 'syntax-highlighting',
      title: 'Highlighting',
    }, {
      color: 'orange-700',
      icon: 'chrome_reader_mode',
      route: 'markdown',
      title: 'Markdown',
    }, {
      color: 'green-700',
      icon: 'format_align_center',
      route: 'dynamic-forms',
      title: 'Dynamic Forms',
    }, {
      color: 'indigo-700',
      icon: 'http',
      route: 'http',
      title: 'HTTP Service',
    },
  ];
  external: Object[] = [{
      color: 'purple-600',
      icon: 'insert_chart',
      route: 'ngx-charts',
      title: 'NGX-Charts',
    }, {
      color: 'blue-600',
      icon: 'language',
      route: 'ngx-translate',
      title: 'NGX-Translate',
    },
  ];
}
