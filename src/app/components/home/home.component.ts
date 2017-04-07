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
      description: 'Refactored Autocomplete Chips',
      icon: 'label_outline',
      route: 'components/chips',
      title: 'Component updated',
    }, {
      description: 'Refactored Toggle Directives',
      icon: 'wb_iridescent',
      route: 'components/directives',
      title: 'Directives updated',
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
