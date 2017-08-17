import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { GitHubService } from '../../services';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation],
})

export class HomeComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  starCount: number = 0;

  sections: Object[] = [{
      color: 'deep-purple-A400',
      description: 'Your guide to start using the UI platform in your app!',
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    }, {
      color: 'teal-A700',
      description: 'Covalent Components, Directives, Pipes, & Services',
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Components',
    }, {
      color: 'cyan-A700',
      description: 'Several different material design layout options for your apps',
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    }, {
      color: 'indigo-A400',
      description: 'Teradata brand logo usage, color palettes and more',
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    }, {
      color: 'yellow-800',
      description: 'Solutions for commonly occuring problems',
      icon: 'extension',
      route: 'design-patterns',
      title: 'Design Patterns',
    }, {
      color: 'green-A700',
      description: 'Gallery of example applications and usages',
      icon: 'view_carousel',
      route: 'templates',
      title: 'Templates',
    },
  ];

  repos: Object[] = [{
      color: 'amber-A400',
      description: 'A pre-built Angular 4 app using Covalent ready to go!',
      icon: 'flash_on',
      link: 'https://github.com/Teradata/covalent-quickstart',
      title: 'Covalent Quickstart',
    }, {
      color: 'orange-A400',
      description: 'A native desktop hybrid starter app built on Electron.',
      icon: 'laptop_mac',
      link: 'https://github.com/Teradata/covalent-electron',
      title: 'Covalent Electron',
    }, {
      color: 'deep-orange-A400',
      description: 'Mock API server for rapid prototyping and API standards.',
      icon: 'aspect_ratio',
      link: 'https://github.com/Teradata/covalent-data',
      title: 'Covalent Data',
    },
  ];

  constructor(private _gitHubService: GitHubService) {
  }

  ngAfterViewInit(): void {
    this._gitHubService.queryStartCount().subscribe((starsCount: number) => {
      this.starCount = starsCount;
    });
  }

}
