import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  styleUrls: ['docs.component.scss'],
  templateUrl: 'docs.component.html',
})
export class DocsComponent {

  items: Object[] = [{
    description: 'Forking & setup for dev',
    icon: 'chrome_reader_mode',
    route: '.',
    title: 'Getting Started',
  }, {
    description: 'Familiarize yourself with ng2',
    icon: 'change_history',
    route: 'angular-2',
    title: 'Angular 2.0',
  }, {
    description: 'Material Design components for Angular 2',
    icon: 'layers',
    route: 'angular-material',
    title: 'Angular-Material',
  }, {
    description: 'Angular CLI build tasks',
    icon: 'build',
    route: 'build-tasks',
    title: 'Understanding Build Tasks',
  }, {
    description: 'Views, routes & services',
    icon: 'fiber_new',
    route: 'creating',
    title: 'Creating new views',
  }, {
    description: 'Deploy your UI',
    icon: 'local_shipping',
    route: 'deployment',
    title: 'Deployment',
  }, {
    description: 'Access 750+ Material Design icons',
    icon: 'photo_size_select_actual',
    route: 'icons',
    title: 'SVG Icon Sets',
  }, {
    description: 'Customize the SCSS color scheme',
    icon: 'palette',
    route: 'theme',
    title: 'Custom Theme',
  }, {
    description: 'Mock data API prototyping server',
    icon: 'wifi_tethering',
    route: 'mock-data',
    title: 'Mock Data Server',
  }, {
    description: 'A full suite of test tools',
    icon: 'playlist_add_check',
    route: 'testing',
    title: 'Testing',
  }];

}
