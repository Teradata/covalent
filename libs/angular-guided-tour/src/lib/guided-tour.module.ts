import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentGuidedTourService } from './guided-tour.service';

@NgModule({
  imports: [CommonModule],
  providers: [CovalentGuidedTourService],
  declarations: [],
  exports: [],
})
export class CovalentGuidedTourModule {}
