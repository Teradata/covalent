import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdMarkdownLoaderComponent } from './markdown-loader.component';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';

@NgModule({
  imports: [
    CommonModule,
    CovalentFlavoredMarkdownModule,
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
