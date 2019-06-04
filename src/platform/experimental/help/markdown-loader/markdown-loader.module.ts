import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdMarkdownLoaderComponent } from './markdown-loader.component';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    CovalentFlavoredMarkdownModule,
    CovalentLoadingModule,
    CovalentMarkdownModule,
    MatProgressBarModule,
  ],
  declarations: [
    TdMarkdownLoaderComponent,
  ],
  exports: [
    TdMarkdownLoaderComponent,
  ],
})
export class TdMarkdownLoaderModule {

}
