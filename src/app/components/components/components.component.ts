import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-components',
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
