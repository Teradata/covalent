import { Routes, RouterModule } from '@angular/router';

import { StyleGuideComponent } from './style-guide.component';
import { LogoComponent } from './logo/logo.component';
import { ProductIconsComponent } from './product-icons/product-icons.component';
import { TypographyComponent } from './typography/typography.component';
import { IconographyComponent } from './iconography/iconography.component';
import { ColorsComponent } from './colors/colors.component';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import { CardsComponent } from './cards/cards.component';
import { UtilityStylesComponent } from './utility-styles/utility-styles.component';

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

export const styleGuideRoutes: any = RouterModule.forChild(routes);
