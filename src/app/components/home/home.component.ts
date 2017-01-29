import { Component, HostBinding, OnInit } from '@angular/core';

import { GitHubService } from '../../services';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation],
})

export class HomeComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  starCount: number = 0;

  items: Object[] = [{
      color: 'purple-700',
      description: 'Your guide to start using the UI platform in your app!',
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    }, {
      color: 'blue-700',
      description: 'Teradata brand logo usage, color palettes and more',
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    }, {
      color: 'teal-700',
      description: 'Several different material design layout options for your apps',
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    }, {
      color: 'green-700',
      description: 'Covalent Components, Directives, Pipes & Services',
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Components & Addons',
    },
  ];

  updates: Object[] = [{
      description: 'Navigation Drawer sidenav component',
      icon: 'kitchen',
      route: 'style-guide/navigation-drawer',
      title: 'New component & pattern',
    }, {
      description: 'Management list (data-list) pattern',
      icon: 'view_list',
      route: 'style-guide/management-list',
      title: 'New pattern',
    }, {
      description: 'Responsive layout modes & toggles',
      icon: 'dashboard',
      route: 'layouts',
      title: 'Component updated',
    }, {
      description: 'Highlight themes & hardening',
      icon: 'code',
      route: 'components/syntax-highlighting',
      title: 'Component updated',
    }, {
      description: 'Markdown file support & hardening',
      icon: 'chrome_reader_mode',
      route: 'components/markdown',
      title: 'Component updated',
    }, {
      description: 'Loading colors & enhancements',
      icon: 'hourglass_empty',
      route: 'components/loading',
      title: 'Component updated',
    }, {
      description: 'Sketch template updated',
      icon: 'cloud_download',
      route: 'style-guide/resources',
      title: 'Resource updated',
    },
  ];

  constructor(private _gitHubService: GitHubService) {
  }

  ngOnInit(): void {
    this._gitHubService.queryStartCount().subscribe((starsCount: number) => {
      this.starCount = starsCount;
    });
  }

}
