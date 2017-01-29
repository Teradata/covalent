import { Routes, RouterModule } from '@angular/router';

import { StyleGuideComponent } from './style-guide.component';
import { LogoComponent } from './logo/logo.component';
import { ProductIconsComponent } from './product-icons/product-icons.component';
import { TypographyComponent } from './typography/typography.component';
import { IconographyComponent } from './iconography/iconography.component';
import { ColorsComponent } from './colors/colors.component';
import { CardsComponent } from './cards/cards.component';
import { DialogsToastsComponent } from './dialogs/dialogs.component';
import { ManagementListComponent } from './management-list/management-list.component';
import { UtilityStylesComponent } from './utility-styles/utility-styles.component';
import { ResourcesComponent } from './resources/resources.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';

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
      component: CardsComponent,
      path: 'cards',
    }, {
      component: DialogsToastsComponent,
      path: 'dialogs',
    }, {
      component: ManagementListComponent,
      path: 'management-list',
    }, {
      component: UtilityStylesComponent,
      path: 'utility-styles',
    }, {
      component: ResourcesComponent,
      path: 'resources',
    }, {
      component: NavigationDrawerComponent,
      path: 'navigation-drawer',
    },
  ],
  component: StyleGuideComponent,
  path: 'style-guide',
}];

export const styleGuideRoutes: any = RouterModule.forChild(routes);
