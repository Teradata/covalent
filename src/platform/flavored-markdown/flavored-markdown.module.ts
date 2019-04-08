import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { CovalentDataTableModule, TdDataTableComponent } from '@covalent/core/data-table';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule, TdMarkdownComponent } from '@covalent/markdown';

import { TdFlavoredListComponent } from './cfm-list/cfm-list.component';
import { TdFlavoredCodeBlockComponent } from './cfm-code-block/cfm-code-block.component';
import { TdFlavoredMarkdownComponent, TdFlavoredMarkdownContainerDirective } from './flavored-markdown.component';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
  ],
  declarations: [
    TdFlavoredListComponent,
    TdFlavoredCodeBlockComponent,
    TdFlavoredMarkdownComponent,
    TdFlavoredMarkdownContainerDirective,
  ],
  exports: [
    TdFlavoredMarkdownComponent,
  ],
  entryComponents: [
    TdDataTableComponent,
    TdMarkdownComponent,
    MatCheckbox,
    TdFlavoredListComponent,
    TdFlavoredCodeBlockComponent,
  ],
})
export class CovalentFlavoredMarkdownModule {
}
