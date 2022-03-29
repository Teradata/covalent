import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchDemoBoxComponent } from './search-demo-box/search-demo-box.component';
import { SearchDemoInputComponent } from './search-demo-input/search-demo-input.component';
import { SearchDemoToolbarBoxComponent } from './search-demo-toolbar-box/search-demo-toolbar-box.component';
import { CovalentSearchModule } from '@covalent/core/search';
import { SearchDemoComponent } from './search-demo.component';
import { SearchDemoRoutingModule } from './search-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    SearchDemoComponent,
    SearchDemoBoxComponent,
    SearchDemoInputComponent,
    SearchDemoToolbarBoxComponent,
  ],
  imports: [
    DemoModule,
    FormsModule,
    SearchDemoRoutingModule,
    /** Covalent Modules */
    CovalentSearchModule,
    /** Angular Modules */
    CommonModule,
    /** Material Modules */
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
  ],
})
export class SearchDemoModule {}
