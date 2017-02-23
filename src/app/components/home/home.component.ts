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
      description: 'File Input component',
      icon: 'space_bar',
      route: 'components/file-input',
      title: 'New component',
    }, {
      description: 'NGX Translate',
      icon: 'language',
      route: 'components/ngx-translate',
      title: 'New supported feature',
    }, {
      description: 'Route on toolbar logos',
      icon: 'dashboard',
      route: 'layouts',
      title: 'Component updated',
    }, {
      description: 'Data Table additional features',
      icon: 'grid_on',
      route: 'components/data-table',
      title: 'Component updated',
    }, {
      description: 'File upload refactored',
      icon: 'attach_file',
      route: 'components/file-upload',
      title: 'Component updated',
    }, {
      description: 'Paging Bar additional features',
      icon: 'swap_horiz',
      route: 'components/paging',
      title: 'Component updated',
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
