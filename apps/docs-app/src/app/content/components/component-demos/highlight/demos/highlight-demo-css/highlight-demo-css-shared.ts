import { NgModule } from '@angular/core';
import { CovalentHighlightModule } from '@covalent/highlight';
import { HighlightDemoCssComponent } from './highlight-demo-css.component';

@NgModule({
  declarations: [HighlightDemoCssComponent],
  imports: [
    /** Covalent Modules */
    CovalentHighlightModule,
  ],
  exports: [HighlightDemoCssComponent],
})
export class HighLightDemoCssSharedModule {}
