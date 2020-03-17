import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';

@Directive({selector: '[tdVirtualScrollRow]'})
export class TdVirtualScrollRowDirective extends TemplatePortalDirective {

  constructor(templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
  
}
