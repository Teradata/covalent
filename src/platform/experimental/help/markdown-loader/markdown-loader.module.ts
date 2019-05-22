import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdMarkdownLoaderComponent } from './markdown-loader.component';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { CovalentLoadingModule } from '@covalent/core/loading';

@NgModule({
  imports: [
    CommonModule,
    CovalentFlavoredMarkdownModule,
    CovalentLoadingModule,
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
