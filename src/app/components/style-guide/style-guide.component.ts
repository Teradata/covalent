import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-style-guide',
  styleUrls: ['style-guide.component.css'],
  templateUrl: 'style-guide.component.html',
})
export class StyleGuideComponent {

  items: Object[] = [{
    description: 'Teradata logo usage',
    icon: 'color_lens',
    route: '.',
    title: 'Logo',
  }, {
    description: 'Material color palette usage',
    icon: 'format_paint',
    route: 'colors',
    title: 'Colors',
  }, {
    description: 'Font options and usage',
    icon: 'font_download',
    route: 'typography',
    title: 'Typography',
  }, {
    description: 'Library of Material icons',
    icon: 'insert_emoticon',
    route: 'iconography',
    title: 'Iconography',
  }, {
    description: 'Product icon usage in apps',
    icon: 'photo_size_select_actual',
    route: 'product-icons',
    title: 'Product Icons',
  }, {
    description: 'Angular-Material core components',
    icon: 'change_history',
    route: 'material-components',
    title: 'Material Components',
  }, {
    description: 'Material Design card patterns',
    icon: 'view_agenda',
    route: 'cards',
    title: 'Cards',
  }, {
    description: 'Utility CSS classes',
    icon: 'build',
    route: 'utility-styles',
    title: 'Utility Styles',
  }, {
    description: 'Design templates & libraries',
    icon: 'cloud_download',
    route: 'resources',
    title: 'Resources',
  }];

}
