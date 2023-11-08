import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { TdMessageComponent } from './message.component';

const TD_MESSAGE: Type<any>[] = [TdMessageComponent];

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TD_MESSAGE],
  exports: [TD_MESSAGE],
})
export class CovalentMessageModule {}
