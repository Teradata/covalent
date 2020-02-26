import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentFileModule } from '@covalent/core/file';
import { CovalentHighlightModule } from '@covalent/highlight';
import { setComponentRoutes } from 'app/content/components/components';
import { FileInputDemoComponent } from './file-input.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: FileInputDemoComponent,
  id: 'file-input',
});

@NgModule({
  declarations: [FileInputDemoComponent],
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
    MatTabsModule,
    ComponentDetailsModule,
    // Covalent
    CovalentFileModule,
    CovalentHighlightModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class FileInputDemoModule {}
