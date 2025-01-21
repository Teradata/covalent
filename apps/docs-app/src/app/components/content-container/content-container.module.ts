import { NgModule } from '@angular/core';
import { ContentContainerComponent } from './content-container.component';

@NgModule({
  exports: [ContentContainerComponent],
  imports: [
    ContentContainerComponent,
  ],
})
export class ContentContainerModule {}
