import { Type } from '@angular/core';
import { NgModule } from '@angular/core';
import { LOADING_PROVIDER } from './services/loading.service';
import { LOADING_FACTORY_PROVIDER } from './services/loading.factory';
import { TdLoadingDirective } from './directives/loading.directive';
import { TdLoadingComponent } from './loading.component';

const TD_LOADING: Type<any>[] = [TdLoadingComponent, TdLoadingDirective];

@NgModule({
  imports: [TD_LOADING],
  exports: [TD_LOADING],
  providers: [LOADING_FACTORY_PROVIDER, LOADING_PROVIDER],
})
export class CovalentLoadingModule {}
