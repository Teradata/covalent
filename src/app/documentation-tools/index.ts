import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { CovalentDataTableModule, TdDataTableComponent } from '@covalent/core/data-table';
import { CovalentHighlightModule, TdHighlightComponent } from '@covalent/highlight';
import { CovalentMarkdownModule, TdMarkdownComponent } from '@covalent/markdown';

import { TdFlavoredListComponent } from './pretty-markdown/cfm-list/cfm-list.component';
import { TdPrettyMarkdownComponent, TdPrettyMarkdownContainerDirective } from './pretty-markdown/pretty-markdown.component';
import { TdReadmeLoaderComponent } from './readme-loader/readme-loader.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
  ],
  declarations: [
    TdFlavoredListComponent,
    TdPrettyMarkdownComponent,
    TdPrettyMarkdownContainerDirective,
    TdReadmeLoaderComponent,
  ],
  exports: [
    TdPrettyMarkdownComponent,
    TdPrettyMarkdownContainerDirective,
    TdReadmeLoaderComponent,
  ],
  entryComponents: [TdDataTableComponent, TdMarkdownComponent, TdHighlightComponent, MatCheckbox, TdFlavoredListComponent ],
})
export class DocumentationToolsModule {
}
