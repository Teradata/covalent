/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';

import { CovalentCommonModule } from '@covalent/core/common';

import { DraggableDialogComponent } from './draggable-dialog.component';
import { DraggableDialogService } from './draggable-dialog.service';

@NgModule({
  declarations: [
    DraggableDialogComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    CommonModule,
    FormsModule,
    /** Material Modules */
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    OverlayModule,
    /** Covalent Modules */
    CovalentCommonModule,
  ], // modules needed to run this module
  providers: [
    DraggableDialogService,
  ], // additional providers needed for this module
  entryComponents: [ DraggableDialogComponent ],
})
export class DraggableDialogModule {

}
