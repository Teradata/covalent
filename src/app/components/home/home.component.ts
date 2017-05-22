import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
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

  items: Object[] = [{
      color: 'deep-purple-A400',
      description: 'Your guide to start using the UI platform in your app!',
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    }, {
      color: 'indigo-A400',
      description: 'Teradata brand logo usage, color palettes and more',
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    }, {
      color: 'cyan-A400',
      description: 'Several different material design layout options for your apps',
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    }, {
      color: 'teal-A400',
      description: 'Covalent Components, Directives, Pipes & Services',
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Components & Addons',
    },
  ];

  constructor(private _gitHubService: GitHubService,
              public media: TdMediaService) {
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this._gitHubService.queryStartCount().subscribe((starsCount: number) => {
      this.starCount = starsCount;
    });
  }

}
