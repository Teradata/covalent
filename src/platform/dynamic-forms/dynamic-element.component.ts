import { Component, Directive, Input, HostBinding, OnInit } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { DynamicElement, DynamicFormsService } from './services/dynamic-forms.service';
import { AbstractControlValueAccessor } from './dynamic-elements/abstract-control-value-accesor';

const noop: any = () => {
  // empty method
};

export const ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicElementComponent),
  multi: true,
};

@Directive({
  selector: '[tdDynamicContainer]',
})
export class TdDynamicElementDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}

@Component({
  providers: [ DynamicFormsService, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-element',
  template: '<div tdDynamicContainer></div>',
})
export class TdDynamicElementComponent extends AbstractControlValueAccessor
                                       implements ControlValueAccessor, OnInit {

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
      this.onModelChange(v);
    }
  }

  @Input() dynamicControl: FormControl;

  @Input() label: string = '';

  @Input() type: DynamicElement = undefined;

  @Input() required: boolean = undefined;

  @Input() min: number = undefined;

  @Input() max: number = undefined;

  @ViewChild(TdDynamicElementDirective) childElement: TdDynamicElementDirective;

  @HostBinding('attr.flex')
  get flex(): any {
    if (this.type) {
      return this._dynamicFormsService.getElementFlex(this.type);
    }
    return true;
  }

  @HostBinding('attr.max')
  get maxAttr(): any {
    return this.max;
  }

  @HostBinding('attr.min')
  get minAttr(): any {
    return this.min;
  }

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _dynamicFormsService: DynamicFormsService) {
    super();
  }

  ngOnInit(): void {
    let ref: ComponentRef<any> = this._componentFactoryResolver.
      resolveComponentFactory(this._dynamicFormsService.getElementType(this.type))
      .create(this.childElement.viewContainer.injector);
    this.childElement.viewContainer.insert(ref.hostView);
    ref.instance.control = this.dynamicControl;
    ref.instance.label = this.label;
    ref.instance.type = this.type;
    ref.instance._value = this._value;
    ref.instance.required = this.required;
    ref.instance.min = this.min;
    ref.instance.max = this.max;
    ref.instance.registerOnChange((value: any) => {
      this.value = value;
    });
    this.registerOnModelChange((value: any) => {
      // fix to check if value is NaN (type=number)
      if (!Number.isNaN(value)) {
        ref.instance.value = value;
      }
    });
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  registerOnModelChange(fn: any): void {
    this.onModelChange = fn;
  }

  onModelChange = (_: any) => noop;
}
