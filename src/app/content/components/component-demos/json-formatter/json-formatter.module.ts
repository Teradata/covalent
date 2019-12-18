import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentJsonFormatterModule } from '@covalent/core/json-formatter';
import { setComponentRoutes } from 'app/content/components/components';
import { JsonFormatterDemoComponent } from './json-formatter.component';
import { DocumentationToolsModule } from 'app/documentation-tools';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: JsonFormatterDemoComponent,
  id: 'json-formatter',
});

@NgModule({
  declarations: [JsonFormatterDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatCardModule,
    MatDividerModule,
    DocumentationToolsModule,
    ComponentDetailsModule,
    // Covalent
    CovalentHighlightModule,
    CovalentJsonFormatterModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class JsonFormatterDemoModule {}
