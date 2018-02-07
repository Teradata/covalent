import { Component, Directive, Input, HostBinding, OnInit, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';

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

@Directive({selector: '[tdDynamicFormsError]ng-template'})
export class TdDynamicFormsErrorTemplate extends TemplatePortalDirective {

  @Input() tdDynamicFormsError: string;
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

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
                                       implements ControlValueAccessor, OnInit, OnChanges {

  private _instance: any;

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
      this.onModelChange(v);
    }
  }
  get value(): any {
    return this._value;
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
   * Sets minLength validation checkup (if supported by element).
   */
  @Input() minLength: number = undefined;

  /**
   * Sets maxLength validation checkup (if supported by element).
   */
  @Input() maxLength: number = undefined;

  /**
   * Sets selections for array elements (if supported by element).
   */
  @Input() selections: any[] = undefined;

  @ViewChild(TdDynamicElementDirective) childElement: TdDynamicElementDirective;

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
    this._instance = ref.instance;
    this._instance.control = this.dynamicControl;
    this._instance.label = this.label;
    this._instance.type = this.type;
    this._instance.value = this.value;
    this._instance.required = this.required;
    this._instance.min = this.min;
    this._instance.max = this.max;
    this._instance.minLength = this.minLength;
    this._instance.maxLength = this.maxLength;
    this._instance.selections = this.selections;
    this._instance.registerOnChange((value: any) => {
      this.value = value;
    });
    this.registerOnModelChange((value: any) => {
      // fix to check if value is NaN (type=number)
      if (!Number.isNaN(value)) {
        this._instance.value = value;
      }

    });
  }

  /**
   * Reassign any inputs that have changed
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (this._instance) {
      for (let prop in changes) {
        this._instance[prop] = changes[prop].currentValue;
      }
    }
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  registerOnModelChange(fn: any): void {
    this.onModelChange = fn;
  }

  onModelChange = (_: any) => noop;
}
