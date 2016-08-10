import { Routes, RouterModule } from '@angular/router';

import { StyleGuideComponent } from './style-guide.component';
import { LogoComponent } from './logo';
import { ProductIconsComponent } from './product-icons';
import { TypographyComponent } from './typography';
import { IconographyComponent } from './iconography';
import { ColorsComponent } from './colors';
import { MaterialComponentsComponent } from './material-components';
import { CardsComponent } from './cards';
import { UtilityStylesComponent } from './utility-styles';

const routes: Routes = [{
  children: [{
      component: LogoComponent,
      path: '',
    }, {
      component: ColorsComponent,
      path: 'colors',
    }, {
      component: TypographyComponent,
      path: 'typography',
    }, {
      component: IconographyComponent,
      path: 'iconography',
    }, {
      component: ProductIconsComponent,
      path: 'product-icons',
    }, {
      component: MaterialComponentsComponent,
      path: 'material-components',
    }, {
      component: CardsComponent,
      path: 'cards',
    }, {
      component: UtilityStylesComponent,
      path: 'utility-styles',
    },
  ],
  component: StyleGuideComponent,
  path: 'style-guide',
}];

export const styleGuideRoutes: any = RouterModule.forRoot(routes, { useHash: true });
