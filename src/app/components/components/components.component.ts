import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';

import { TdMediaService } from '@covalent/core';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-components',
  styleUrls: ['./components.component.scss'],
  templateUrl: './components.component.html',
  animations: [fadeAnimation],
})
export class ComponentsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    description: 'Components, Directives, Pipes & more',
    icon: 'picture_in_picture',
    route: '.',
    title: 'Components & Addons',
  }, {
    description: 'A sequence of logical & numbered steps',
    icon: 'view_list',
    route: 'steps',
    title: 'Stepper (Wizard)',
  }, {
    description: 'Expand & collapse containers',
    icon: 'open_with',
    route: 'expansion-panel',
    title: 'Expansion Panels',
  }, {
    description: 'Text input for files',
    icon: 'space_bar',
    route: 'file-input',
    title: 'File Input',
  }, {
    description: 'All-in-one upload button',
    icon: 'attach_file',
    route: 'file-upload',
    title: 'File Upload Button',
  }, {
    description: 'Small blocks for multiple items',
    icon: 'label_outline',
    route: 'chips',
    title: 'Chips & Autocomplete',
  }, {
    description: 'Circular or linear progress loader',
    icon: 'hourglass_empty',
    route: 'loading',
    title: 'Loading',
  }, {
    description: 'Quick way to use alert, confirm and prompt dialogs',
    icon: 'open_in_browser',
    route: 'dialogs',
    title: 'Simple Dialogs',
  }, {
    description: 'Display sets of raw data',
    icon: 'grid_on',
    route: 'data-table',
    title: 'Data Table',
  }, {
    description: 'Scroll virtually on a set of items',
    icon: 'format_line_spacing',
    route: 'virtual-scroll',
    title: 'Virtual Scroll',
  }, {
    description: 'JSON object tree with collapsible nodes',
    icon: 'format_indent_increase',
    route: 'json-formatter',
    title: 'JSON Formatter',
  }, {
    description: 'Paging for lists and tables',
    icon: 'swap_horiz',
    route: 'paging',
    title: 'Paging',
  }, {
    description: 'Notification count & menu',
    icon: 'notifications',
    route: 'notifications',
    title: 'Notifications',
  }, {
    description: 'Info, warning & alert messages',
    icon: 'info_outline',
    route: 'message',
    title: 'Messages & Alerts',
  }, {
    description: 'Search and filter items',
    icon: 'search',
    route: 'search',
    title: 'Search',
  }, {
    description: 'Responsive service & directive',
    icon: 'devices',
    route: 'media',
    title: 'Media Queries',
  }, {
    description: 'Core directives & utilities',
    icon: 'wb_iridescent',
    route: 'directives',
    title: 'Directives',
  }, {
    description: 'Custom Angular pipes (filters)',
    icon: 'filter_list',
    route: 'pipes',
    title: 'Pipes',
  }, {
    description: 'Custom Angular animation utilities',
    icon: 'theaters',
    route: 'animations',
    title: 'Animations',
  }];

  optional: Object[] = [{
    description: 'Highlighting your code snippets',
    icon: 'code',
    route: 'syntax-highlighting',
    title: 'Syntax Highlighting',
  }, {
    description: 'Parse markdown code',
    icon: 'chrome_reader_mode',
    route: 'markdown',
    title: 'Markdown Parser',
  }, {
    description: 'Build forms from a JS object',
    icon: 'format_align_center',
    route: 'dynamic-forms',
    title: 'Dynamic Forms',
  }, {
    description: 'Multi-languge code editor for Browser and Electron',
    icon: 'featured_play_list',
    route: 'code-editor',
    title: 'Code Editor',
  }, {
    description: 'Text and Markdown editor component',
    icon: 'keyboard',
    route: 'text-editor',
    title: 'Markdown Text Editor',
  }, {
    description: 'Http wrappers and helpers',
    icon: 'http',
    route: 'http',
    title: 'HTTP Service',
  }];

  external: Object[] = [{
    description: 'Declarative D3 framework',
    icon: 'insert_chart',
    route: 'ngx-charts',
    title: 'NGX-Charts',
  }, {
    description: 'i18n library',
    icon: 'language',
    route: 'ngx-translate',
    title: 'NGX-Translate',
  }];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}
}
