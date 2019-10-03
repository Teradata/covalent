import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-docs',
  styleUrls: ['./docs.component.scss'],
  templateUrl: './docs.component.html',
})
export class DocsComponent {
  items: Object[] = [
    {
      description: 'Installing Covalent & dependencies',
      icon: 'chrome_reader_mode',
      route: '.',
      title: 'Getting Started',
    },
    {
      description: 'Familiarize yourself with Angular',
      icon: 'change_history',
      route: 'angular',
      title: 'Angular',
    },
    {
      description: 'Material Design components',
      icon: 'layers',
      route: 'angular-material',
      title: 'Angular Material',
    },
    {
      description: 'Angular CLI build tasks',
      icon: 'build',
      route: 'build-tasks',
      title: 'Understanding Build Tasks',
    },
    {
      description: 'Views, routes & services',
      icon: 'fiber_new',
      route: 'creating',
      title: 'Creating new views',
    },
    {
      description: 'Build your UI',
      icon: 'cached',
      route: 'deployment',
      title: 'Building',
    },
    {
      description: 'Access 1000+ Material Design icons',
      icon: 'photo_size_select_actual',
      route: 'icons',
      title: 'SVG Icon Sets',
    },
    {
      description: 'Customize the SCSS color scheme',
      icon: 'palette',
      route: 'theme',
      title: 'Custom Theme',
    },
    {
      description: 'Include individual styles',
      icon: 'gradient',
      route: 'utility-sass-mixins',
      title: 'Utility SASS Mixins',
    },
    {
      description: 'Mock data API prototyping server',
      icon: 'wifi_tethering',
      route: 'mock-data',
      title: 'Mock Data Server',
    },
    {
      description: 'A full suite of test tools',
      icon: 'playlist_add_check',
      route: 'testing',
      title: 'Testing',
    },
  ];

  constructor(private _changeDetectorRef: ChangeDetectorRef, public media: TdMediaService) {}
}
