import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { TdReadmeLoaderComponent } from './readme-loader/readme-loader.component';

@NgModule({
  imports: [CommonModule, MatCardModule, CovalentFlavoredMarkdownModule],
  declarations: [TdReadmeLoaderComponent],
  exports: [TdReadmeLoaderComponent],
})
export class DocumentationToolsModule {}
