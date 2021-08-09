import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { TdFlavoredListComponent } from './cfm-list/cfm-list.component';
import {
  TdFlavoredMarkdownComponent,
  TdFlavoredMarkdownContainerDirective,
  TdFlavoredMarkdownButtonComponent,
} from './flavored-markdown.component';
import { TdFlavoredMarkdownLoaderComponent } from './flavored-markdown-loader/flavored-markdown-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatListModule,
    MatProgressBarModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    MatButtonModule,
  ],
  declarations: [
    TdFlavoredListComponent,
    TdFlavoredMarkdownComponent,
    TdFlavoredMarkdownContainerDirective,
    TdFlavoredMarkdownLoaderComponent,
    TdFlavoredMarkdownButtonComponent,
  ],
  exports: [TdFlavoredMarkdownComponent, TdFlavoredMarkdownLoaderComponent],
})
export class CovalentFlavoredMarkdownModule {}
