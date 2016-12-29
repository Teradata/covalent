import { Component, Directive, Input, HostBinding, OnInit } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { TdDynamicElement, TdDynamicType, TdDynamicFormsService } from './services/dynamic-forms.service';
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
  providers: [ TdDynamicFormsService, ELEMENT_INPUT_CONTROL_VALUE_ACCESSOR ],
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

  /**
   * Sets form control of the element.
   */
  @Input() dynamicControl: FormControl;

  /**
   * Sets label to be displayed.
   */
  @Input() label: string = '';

  /**
   * Sets type or element of element to be rendered.
   * Throws error if does not exist or no supported.
   */
  @Input() type: TdDynamicElement | TdDynamicType = undefined;

  /**
   * Sets required validation checkup (if supported by element).
   */
  @Input() required: boolean = undefined;

  /**
   * Sets min validation checkup (if supported by element).
   */
  @Input() min: number = undefined;

  /**
   * Sets max validation checkup (if supported by element).
   */
  @Input() max: number = undefined;

  /**
   * Sets selections for array elements (if supported by element).
   */
  @Input() selections: any[] = undefined;

  @ViewChild(TdDynamicElementDirective) childElement: TdDynamicElementDirective;

  @HostBinding('attr.flex')
  get flex(): any {
    if (this.type) {
      return this._dynamicFormsService.getDefaultElementFlex(this.type);
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
              private _dynamicFormsService: TdDynamicFormsService) {
    super();
  }

  ngOnInit(): void {
    let ref: ComponentRef<any> = this._componentFactoryResolver.
      resolveComponentFactory(this._dynamicFormsService.getDynamicElement(this.type))
      .create(this.childElement.viewContainer.injector);
    this.childElement.viewContainer.insert(ref.hostView);
    ref.instance.control = this.dynamicControl;
    ref.instance.label = this.label;
    ref.instance.type = this.type;
    ref.instance._value = this._value;
    ref.instance.required = this.required;
    ref.instance.min = this.min;
    ref.instance.max = this.max;
    ref.instance.selections = this.selections;
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
