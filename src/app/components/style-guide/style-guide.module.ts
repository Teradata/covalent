import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { styleGuideRoutes } from './style-guide.routes';

import { StyleGuideComponent } from './style-guide.component';
import { LogoComponent } from './logo/logo.component';
import { ProductIconsComponent } from './product-icons/product-icons.component';
import { TypographyComponent } from './typography/typography.component';
import { IconographyComponent } from './iconography/iconography.component';
import { ColorsComponent } from './colors/colors.component';
import { UtilityStylesComponent } from './utility-styles/utility-styles.component';
import { ResourcesComponent } from './resources/resources.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CovalentLayoutModule, CovalentMediaModule, CovalentSearchModule, CovalentPagingModule,
         CovalentExpansionPanelModule, CovalentDialogsModule, CovalentMessageModule } from '../../../platform/core';
import { CovalentHighlightModule } from '../../../platform/highlight';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    StyleGuideComponent,
    LogoComponent,
    ProductIconsComponent,
    TypographyComponent,
    IconographyComponent,
    ColorsComponent,
    UtilityStylesComponent,
    ResourcesComponent,
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    FormsModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressBarModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentExpansionPanelModule,
    CovalentHighlightModule,
    CovalentDialogsModule,
    CovalentMessageModule,
    styleGuideRoutes,
    ToolbarModule,
  ],
})
export class StyleGuideModule {}
