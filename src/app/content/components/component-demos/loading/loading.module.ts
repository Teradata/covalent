import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { setComponentRoutes } from 'app/content/components/components';
import { LoadingDemoComponent } from './loading.component';
import { DocumentationToolsModule } from 'app/documentation-tools';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: LoadingDemoComponent,
  id: 'loading',
});

@NgModule({
  declarations: [LoadingDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatTabsModule,
    DocumentationToolsModule,
    ComponentDetailsModule,
    // Covalent
    CovalentHighlightModule,
    CovalentLoadingModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class LoadingDemoModule {}
