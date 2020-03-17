import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlavoredMarkdownDemoBasicComponent } from './flavored-markdown-demo-basic/flavored-markdown-demo-basic.component';
import { FlavoredMarkdownDemoInlineComponent } from './flavored-markdown-demo-inline/flavored-markdown-demo-inline.component';
import { FlavoredMarkdownDemoTablesComponent } from './flavored-markdown-demo-tables/flavored-markdown-demo-tables.component';
import { FlavoredMarkdownDemoLoaderComponent } from './flavored-markdown-demo-loader/flavored-markdown-demo-loader.component';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { FlavoredMarkdownDemoComponent } from './flavored-markdown-demo.component';
import { FlavoredMarkdownDemoRoutingModule } from './flavored-markdown-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    FlavoredMarkdownDemoComponent,
    FlavoredMarkdownDemoBasicComponent,
    FlavoredMarkdownDemoInlineComponent,
    FlavoredMarkdownDemoTablesComponent,
    FlavoredMarkdownDemoLoaderComponent,
  ],
  imports: [
    DemoModule,
    FlavoredMarkdownDemoRoutingModule,
    /** Covalent Modules */
    CovalentFlavoredMarkdownModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class FlavoredMarkdownDemoModule {}
