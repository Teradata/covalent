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
      description: 'Keyboard support for selection',
      icon: 'grid_on',
      route: 'components/data-table',
      title: 'Data Table feature',
    }, {
      description: 'Row click events',
      icon: 'grid_on',
      route: 'components/data-table',
      title: 'Data Table feature',
    }, {
      description: 'Hide columns & exclude from filtering',
      icon: 'grid_on',
      route: 'components/data-table',
      title: 'Data Table feature',
    }, {
      description: 'Async & boolean loading',
      icon: 'hourglass_empty',
      route: 'components/loading',
      title: 'Loading features',
    }, {
      description: 'Component for alerts/info/warning/error/success',
      icon: 'info_outline',
      route: 'components/message',
      title: 'New Messages component',
    }, {
      description: 'Numbered page links to jump ahead',
      icon: 'swap_horiz',
      route: 'components/paging',
      title: 'Pagination feature',
    }, {
      description: 'Disable adding of chips',
      icon: 'label',
      route: 'components/chips',
      title: 'Chips feature',
    }, {
      description: 'New formData property',
      icon: 'attach_file',
      route: 'components/file-upload',
      title: 'File service feature',
    }, {
      description: 'New contentReady event binding',
      icon: 'chrome_reader_mode',
      route: 'components/markdown',
      title: 'Markdown feature',
    }, {
      description: 'New contentReady event binding',
      icon: 'code',
      route: 'components/highlight',
      title: 'Highlight feature',
    }, {
      description: 'Make navigationRoute optional',
      icon: 'view_quilt',
      route: 'components/layouts',
      title: 'Layouts feature',
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
