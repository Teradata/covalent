import { Type } from '@angular/core';
import { NgModule } from '@angular/core';
import {
  TdMessageComponent,
  TdMessageContainerDirective,
} from './message.component';

const TD_MESSAGE: Type<any>[] = [
  TdMessageComponent,
  TdMessageContainerDirective,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TD_MESSAGE],
  exports: [TD_MESSAGE],
})
export class CovalentMessageModule {}
