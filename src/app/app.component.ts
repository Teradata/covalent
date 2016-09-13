import { Component } from '@angular/core';

@Component({
  selector: 'docs-covalent',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.scss'],
})
export class DocsAppComponent {

  routes: Object[] = [{
      icon: 'home',
      route: '.',
      title: 'Home',
    }, {
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    }, {
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    }, {
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    }, {
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Teradata Components',
    },
  ];
}
