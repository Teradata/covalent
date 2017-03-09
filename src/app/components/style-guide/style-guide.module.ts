import { NgModule } from '@angular/core';

import { styleGuideRoutes } from './style-guide.routes';

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

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentHighlightModule } from '../../../platform/highlight';

@NgModule({
  declarations: [
    StyleGuideComponent,
    LogoComponent,
    ProductIconsComponent,
    TypographyComponent,
    IconographyComponent,
    ColorsComponent,
    CardsComponent,
    DialogsToastsComponent,
    ManagementListComponent,
    UtilityStylesComponent,
    ResourcesComponent,
    NavigationDrawerComponent,
  ],
  imports: [
    CovalentCoreModule,
    CovalentHighlightModule,
    styleGuideRoutes,
  ],
})
export class StyleGuideModule {}
