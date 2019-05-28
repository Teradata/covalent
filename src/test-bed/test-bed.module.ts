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
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HelpComponent } from '@covalent/experimental/help/help/help.component';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { HelpWindowComponent } from '@covalent/experimental/help/help-window/help-window.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { DraggableHelpWindowDialogService } from '@covalent/experimental/help/draggable-help-window-dialog/draggable-help-window-dialog.service';
import { DraggableHelpWindowDialogComponent } from '@covalent/experimental/help/draggable-help-window-dialog/draggable-help-window-dialog.component';
import { CovalentHighlightModule } from '@covalent/highlight';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HelpWindowToolbarComponent } from '@covalent/experimental/help/help-window-toolbar/help-window-toolbar.component';

@NgModule({
  declarations: [
    TestBedComponent,
    MainComponent,
    HelpComponent,
    HelpWindowComponent,
    DraggableHelpWindowDialogComponent,
    HelpWindowToolbarComponent,
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
    MatButtonModule,
    MatTooltipModule,
    /** Experimental Modules */
    TdMarkdownLoaderModule,
    MatListModule,
    MatIconModule,
    CovalentMarkdownModule,
    CovalentFlavoredMarkdownModule,
    DragDropModule,
    MatDialogModule,
    CovalentHighlightModule,
    MatFormFieldModule,
    MatInputModule,

  ], // modules needed to run this module
  providers: [appRoutingProviders, DraggableHelpWindowDialogService],
  bootstrap: [TestBedComponent],
  entryComponents: [DraggableHelpWindowDialogComponent],
})
export class TestBedModule {}
