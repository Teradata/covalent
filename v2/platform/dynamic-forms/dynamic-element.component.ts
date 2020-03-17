import { Component, Directive, Input, HostBinding, OnInit, SimpleChanges, OnChanges, TemplateRef, ChangeDetectorRef, Type } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

import { TdDynamicElement, TdDynamicType, TdDynamicFormsService } from './services/dynamic-forms.service';

export class TdDynamicElementBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicElementMixinBase = mixinControlValueAccessor(TdDynamicElementBase);

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
  providers: [TdDynamicFormsService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicElementComponent),
    multi: true,
  }],
  selector: 'td-dynamic-element',
  template: '<div tdDynamicContainer></div>',
})
export class TdDynamicElementComponent extends _TdDynamicElementMixinBase
                                       implements IControlValueAccessor, OnInit, OnChanges {

  private _instance: any;

  /**
   * Sets form control of the element.
   */
  @Input() dynamicControl: FormControl;

  /**
   * Sets label to be displayed.
   */
  @Input() label: string = '';

  /**
   * Sets hint to be displayed.
   */
  @Input() hint: string = '';

  /**
   * Sets name to be displayed as attribute.
   */
  @Input() name: string = '';

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

  /**
   * Sets multiple property for array elements (if supported by element).
   */
  @Input() multiple: boolean = undefined;

  /**
   * Sets error message template so it can be injected into dynamic components.
   */
  @Input() errorMessageTemplate: TemplateRef<any> = undefined;

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
              private _dynamicFormsService: TdDynamicFormsService,
              _changeDetectorRef: ChangeDetectorRef) {
    super(_changeDetectorRef);
  }

  ngOnInit(): void {
    let component: any = <any>this.type instanceof Type ? this.type : this._dynamicFormsService.getDynamicElement(this.type);
    let ref: ComponentRef<any> = this._componentFactoryResolver.
      resolveComponentFactory(component)
      .create(this.childElement.viewContainer.injector);
    this.childElement.viewContainer.insert(ref.hostView);
    this._instance = ref.instance;
    this._instance.control = this.dynamicControl;
    this._instance.label = this.label;
    this._instance.hint = this.hint;
    this._instance.name = this.name;
    this._instance.type = this.type;
    this._instance.value = this.value;
    this._instance.required = this.required;
    this._instance.min = this.min;
    this._instance.max = this.max;
    this._instance.minLength = this.minLength;
    this._instance.maxLength = this.maxLength;
    this._instance.selections = this.selections;
    this._instance.multiple = this.multiple;
    this._instance.errorMessageTemplate = this.errorMessageTemplate;
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
}
