import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckbox, MatCardModule, MatCheckboxModule } from '@angular/material';

import { CovalentDataTableModule, TdDataTableComponent } from '../../platform/core';
import { CovalentHighlightModule, TdHighlightComponent } from '../../platform/highlight';
import { CovalentMarkdownModule, TdMarkdownComponent } from '../../platform/markdown';

import { TdPrettyMarkdownComponent, TdPrettyMarkdownContainerDirective } from './pretty-markdown/pretty-markdown.component';
import { TdReadmeLoaderComponent } from './readme-loader/readme-loader.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
  ],
  declarations: [
    TdPrettyMarkdownComponent,
    TdPrettyMarkdownContainerDirective,
    TdReadmeLoaderComponent,
  ],
  exports: [
    TdPrettyMarkdownComponent,
    TdPrettyMarkdownContainerDirective,
    TdReadmeLoaderComponent,
  ],
  entryComponents: [ TdDataTableComponent, TdMarkdownComponent, TdHighlightComponent, MatCheckbox ],
})
export class DocumentationToolsModule {
}
