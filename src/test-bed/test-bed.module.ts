import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TestBedComponent } from './test-bed/test-bed.component';
import { MainComponent } from './main/main.component';

import { appRoutes, appRoutingProviders } from './test-bed.routes';
import { TdMarkdownLoaderModule } from '@covalent/experimental/help/markdown-loader';
// import { DraggableDialogService } from '@covalent/experimental/help/draggable-dialog/draggable-dialog.service';
// import { DraggableDialogModule } from '@covalent/experimental/help/draggable-dialog/draggable-dialog.module';
import { SampleComponent } from './main/sample/sample.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HelpComponent } from '@covalent/experimental/help/help/help.component';
import { TdMarkdownComponent, CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { HelpWindowComponent } from '@covalent/experimental/help/help-window/help-window.component';

@NgModule({
  declarations: [
    TestBedComponent,
    MainComponent,
    SampleComponent, // to test dialog
    HelpComponent,
    HelpWindowComponent,
    // TdMarkdownComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    MatToolbarModule,
    appRoutes,
    /** Experimental Modules */
    TdMarkdownLoaderModule,
    // DraggableDialogModule,
    MatListModule,
    MatIconModule,
    CovalentMarkdownModule,
    CovalentFlavoredMarkdownModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    // DraggableDialogService,
  ],
  bootstrap: [TestBedComponent],
  entryComponents: [ SampleComponent],
})
export class TestBedModule { }
