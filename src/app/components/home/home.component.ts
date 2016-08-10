import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html',
})
export class HomeComponent {

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
      description: 'Using our custom Angular 2.0 components',
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Teradata Components',
    },
  ];

}
