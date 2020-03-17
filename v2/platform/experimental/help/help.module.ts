import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { HelpWindowComponent } from './help-window/help-window.component';
import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog/draggable-help-window-dialog.component';
import { HelpWindowToolbarComponent } from './help-window/help-window-toolbar/help-window-toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,

    // material
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    DragDropModule,
    MatToolbarModule,

    CovalentFlavoredMarkdownModule,
  ],
  declarations: [
    HelpComponent,
    HelpWindowComponent,
    HelpWindowToolbarComponent,
    DraggableHelpWindowDialogComponent,
  ],
  exports: [
    HelpComponent,
    HelpWindowComponent,
    DraggableHelpWindowDialogComponent,
  ],
  entryComponents: [DraggableHelpWindowDialogComponent],
})
export class CovalentHelpModule {}
