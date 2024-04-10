import { NgModule } from '@angular/core';

import { ComponentOverviewModule } from '../../components/shared/component-overview/component-overview.module';
import { utilitiesRoutes } from './utilities.routes';
import { MatCardModule } from '@angular/material/card';
import { AnimationsComponent } from './utilities-demos/animations/animations.component';
import { MatDividerModule } from '@angular/material/divider';
import { DocumentationToolsModule } from '../../documentation-tools';
import { TdHighlightComponent } from '@covalent/highlight';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { PipesComponent } from './utilities-demos/pipes/pipes.component';
import { FunctionsDemoComponent } from './utilities-demos/functions/functions.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { UtilityStylesComponent } from './utilities-demos/utility-styles/utility-styles.component';
import { DirectivesComponent } from './utilities-demos/directives/directives.component';
import { CovalentCommonModule } from '@covalent/core/common';
import { TdMessageComponent } from '@covalent/core/message';

@NgModule({
  declarations: [
    AnimationsComponent,
    PipesComponent,
    FunctionsDemoComponent,
    DirectivesComponent,
    UtilityStylesComponent,
  ],
  imports: [
    utilitiesRoutes,
    // Angular
    FormsModule,
    CommonModule,
    // Angular Material
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    // Covalent
    TdHighlightComponent,
    CovalentCommonModule,
    ComponentOverviewModule,
    CovalentCommonModule,
    TdMessageComponent,
    // Documentation
    DocumentationToolsModule,
  ],
})
export class UtilitiesModule {}
