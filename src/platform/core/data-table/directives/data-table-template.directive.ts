import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';

@Directive({selector: '[tdDataTableTemplate]template'})
export class TdDataTableTemplateDirective extends TemplatePortalDirective {

  @Input() tdDataTableTemplate: string;
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
