import { NgModule } from '@angular/core';
import { TdHighlightComponent } from '@covalent/highlight';
import { HighlightDemoCssComponent } from './highlight-demo-css.component';

@NgModule({
  declarations: [HighlightDemoCssComponent],
  imports: [
    /** Covalent Modules */
    TdHighlightComponent,
  ],
  exports: [HighlightDemoCssComponent],
})
export class HighLightDemoCssSharedModule {}
