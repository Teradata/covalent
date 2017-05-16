import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-docs',
  styleUrls: ['./docs.component.scss'],
  templateUrl: './docs.component.html',
  animations: [fadeAnimation],
})
export class DocsComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    description: 'Forking & setup for dev',
    icon: 'chrome_reader_mode',
    route: '.',
    title: 'Getting Started',
  }, {
    description: 'Familiarize yourself with Angular',
    icon: 'change_history',
    route: 'angular',
    title: 'Angular',
  }, {
    description: 'Material Design components',
    icon: 'layers',
    route: 'angular-material',
    title: 'Angular Material',
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

  constructor(public media: TdMediaService) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }

}
