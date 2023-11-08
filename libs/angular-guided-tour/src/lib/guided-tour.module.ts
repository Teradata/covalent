import { NgModule } from '@angular/core';
import { CovalentGuidedTourService } from './guided-tour.service';

/**
 * @deprecated since version 8.x, this module is no longer needed, import CovalentGuidedTourService where needed
 */
@NgModule({
  providers: [CovalentGuidedTourService],
})
export class CovalentGuidedTourModule {}
