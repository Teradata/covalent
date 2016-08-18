import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdIcon } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { TD_LAYOUT_DIRECTIVES } from '../../../platform/core';

@Component({
  directives: [
    ROUTER_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES,
    TD_LAYOUT_DIRECTIVES,
  ],
  moduleId: module.id,
  selector: 'td-components',
  styleUrls: ['components.component.css'],
  templateUrl: 'components.component.html',
})
export class ComponentsComponent {

  items: Object[] = [{
    description: 'Custom Angular 2.0 components',
    icon: 'picture_in_picture',
    route: '.',
    title: 'Teradata Components',
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
    description: 'Upload input button',
    icon: 'file_upload',
    route: 'file-upload',
    title: 'File Upload',
  }, {
    description: 'Build a list of strings',
    icon: 'playlist_add',
    route: 'chips',
    title: 'Chips',
  }, {
    description: 'Circular or linear progress loader',
    icon: 'hourglass_empty',
    route: 'loading',
    title: 'Loading',
  }, {
    description: 'Highlighting your code snippets',
    icon: 'code',
    route: 'syntax-highlighting',
    title: 'Syntax Highlighting',
  }, {
    description: 'JSON object tree with collapsible nodes',
    icon: 'format_indent_increase',
    route: 'json-formatter',
    title: 'JSON Formatter',
  }, {
    description: 'Parse markdown files.',
    icon: 'chrome_reader_mode',
    route: 'markdown',
    title: 'Markdown',
  }, {
    description: 'Responsive service & directive',
    icon: 'devices',
    route: 'media',
    title: 'Media Queries',
  }, {
    description: 'Http wrappers and helpers',
    icon: 'http',
    route: 'http',
    title: 'Http',
  }, {
    description: 'Custom Angular pipes (filters)',
    icon: 'filter_list',
    route: 'pipes',
    title: 'Pipes',
  }];

}
