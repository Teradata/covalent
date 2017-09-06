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
      color: 'deep-purple-A700',
      icon: 'view_list',
      route: 'steps',
      title: 'Stepper',
    }, {
      color: 'blue-A700',
      icon: 'open_with',
      route: 'expansion-panel',
      title: 'Expansion Panel',
    }, {
      color: 'pink-A700',
      icon: 'space_bar',
      route: 'file-input',
      title: 'File Input',
    }, {
      color: 'cyan-A700',
      icon: 'attach_file',
      route: 'file-upload',
      title: 'File Upload',
    }, {
      color: 'deep-orange-A700',
      icon: 'label',
      route: 'chips',
      title: 'Chips',
    }, {
      color: 'lime-A700',
      icon: 'hourglass_empty',
      route: 'loading',
      title: 'Loading',
    }, {
      color: 'amber-A700',
      icon: 'open_in_browser',
      route: 'dialogs',
      title: 'Simple Dialogs',
    }, {
      color: 'green-A700',
      icon: 'grid_on',
      route: 'data-table',
      title: 'Data Table',
    }, {
      color: 'orange-A700',
      icon: 'format_line_spacing',
      route: 'virtual-scroll',
      title: 'Virtual Scroll',
    }, {
      color: 'teal-A700',
      icon: 'format_indent_increase',
      route: 'json-formatter',
      title: 'JSON Formatter',
    }, {
      color: 'indigo-A700',
      icon: 'swap_horiz',
      route: 'paging',
      title: 'Paging',
    }, {
      color: 'purple-A700',
      icon: 'notifications',
      route: 'notifications',
      title: 'Notifications',
    }, {
      color: 'light-blue-A700',
      icon: 'info_outline',
      route: 'message',
      title: 'Messages',
    }, {
      color: 'indigo-A700',
      icon: 'search',
      route: 'search',
      title: 'Search',
    }, {
      color: 'red-A700',
      icon: 'devices',
      route: 'media',
      title: 'Media Queries',
    }, {
      color: 'light-blue-A700',
      icon: 'wb_iridescent',
      route: 'directives',
      title: 'Directives',
    }, {
      color: 'deep-orange-A700',
      icon: 'filter_list',
      route: 'pipes',
      title: 'Pipes',
    },
    {
      color: 'amber-A700',
      icon: 'theaters',
      route: 'animations',
      title: 'Animations',
    },
  ];
  optional: Object[] = [{
      color: 'pink-A700',
      icon: 'code',
      route: 'syntax-highlighting',
      title: 'Highlighting',
    }, {
      color: 'orange-A700',
      icon: 'chrome_reader_mode',
      route: 'markdown',
      title: 'Markdown Parser',
    }, {
      color: 'green-A700',
      icon: 'format_align_center',
      route: 'dynamic-forms',
      title: 'Dynamic Forms',
    }, {
      color: 'purple-A700',
      icon: 'featured_play_list',
      route: 'code-editor',
      title: 'Code Editor',
    }, {
      color: 'cyan-A700',
      icon: 'keyboard',
      route: 'text-editor',
      title: 'Markdown Text Editor',
    }, {
      color: 'indigo-A700',
      icon: 'http',
      route: 'http',
      title: 'HTTP Service',
    },
  ];
  external: Object[] = [{
      color: 'purple-A700',
      icon: 'insert_chart',
      route: 'ngx-charts',
      title: 'NGX-Charts',
    }, {
      color: 'blue-A700',
      icon: 'language',
      route: 'ngx-translate',
      title: 'NGX-Translate',
    },
  ];
}
