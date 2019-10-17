import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentSearchModule } from '@covalent/core/search';
import { setComponentRoutes } from 'app/content/components/components';
import { SearchDemoComponent } from './search.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: SearchDemoComponent,
  id: 'search',
});

@NgModule({
  declarations: [SearchDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    ComponentDetailsModule,
    // Covalent
    CovalentSearchModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class SearchDemoModule {}
