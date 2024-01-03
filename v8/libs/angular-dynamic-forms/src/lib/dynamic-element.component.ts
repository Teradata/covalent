import {
  Component,
  Directive,
  Input,
  HostBinding,
  OnInit,
  SimpleChanges,
  OnChanges,
  TemplateRef,
  ChangeDetectorRef,
  Type,
  Injector,
} from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';
import { CdkPortal } from '@angular/cdk/portal';

import {
  mixinControlValueAccessor,
  IControlValueAccessor,
} from '@covalent/core/common';

import {
  TdDynamicElement,
  TdDynamicType,
  TdDynamicFormsService,
  ITdDynamicElementCustomConfig,
} from './services/dynamic-forms.service';

export class TdDynamicElementBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicElementMixinBase =
  mixinControlValueAccessor(TdDynamicElementBase);

@Directive({ selector: '[tdDynamicFormsError]ng-template' })
export class TdDynamicFormsErrorTemplateDirective extends CdkPortal {
  @Input() tdDynamicFormsError?: string;
  constructor(
    public override templateRef: TemplateRef<any>,
    viewContainerRef: ViewContainerRef
  ) {
    super(templateRef, viewContainerRef);
  }
}

@Directive({
  selector: '[tdDynamicContainer]',
})
export class TdDynamicElementDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}

@Component({
  providers: [
    TdDynamicFormsService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TdDynamicElementComponent,
      multi: true,
    },
  ],
  selector: 'td-dynamic-element',
  template: '<div tdDynamicContainer></div>',
})
export class TdDynamicElementComponent
  extends _TdDynamicElementMixinBase
  implements IControlValueAccessor, OnInit, OnChanges
{
  private _instance: any;

  /**
   * Sets form control of the element.
   */
  @Input() dynamicControl!: AbstractControl;

  /**
   * Sets label to be displayed.
   */
  @Input() label = '';

  /**
   * Sets hint to be displayed.
   */
  @Input() hint? = '';

  /**
   * Sets name to be displayed as attribute.
   */
  @Input() name = '';

  /**
   * Sets type or element of element to be rendered.
   * Throws error if does not exist or no supported.
   */
  @Input() type?: TdDynamicElement | TdDynamicType | Type<any>;

  /**
   * Sets required validation checkup (if supported by element).
   */
  @Input() required?: boolean | string | undefined;

  /**
   * Sets min validation checkup (if supported by element).
   */
  @Input() min?: number;

  /**
   * Sets max validation checkup (if supported by element).
   */
  @Input() max?: number;

  /**
   * Sets minLength validation checkup (if supported by element).
   */
  @Input() minLength?: number;

  /**
   * Sets maxLength validation checkup (if supported by element).
   */
  @Input() maxLength?: number;

  /**
   * Sets selections for array elements (if supported by element).
   */
  @Input() selections?: any[];

  /**
   * Sets multiple property for array elements (if supported by element).
   */
  @Input() multiple?: boolean;

  /**
   * Sets any additional properties on custom component.
   */
  @Input() customConfig?: ITdDynamicElementCustomConfig;

  /**
   * Sets error message template so it can be injected into dynamic components.
   */
  @Input() errorMessageTemplate!: TemplateRef<any> | undefined;

  /**
   * Sets the placeholder message
   */
  @Input() placeholder? = '';

  @ViewChild(TdDynamicElementDirective, { static: true })
  childElement!: TdDynamicElementDirective;

  @HostBinding('attr.max')
  get maxAttr(): any {
    return this.max;
  }

  @HostBinding('attr.min')
  get minAttr(): any {
    return this.min;
  }

  constructor(
    private _injector: Injector,
    private _dynamicFormsService: TdDynamicFormsService,
    _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_changeDetectorRef);
  }

  ngOnInit(): void {
    const component: any =
      <any>this.type instanceof Type
        ? this.type
        : this._dynamicFormsService.getDynamicElement(this.type);
    const ref = this.childElement.viewContainer.createComponent(component, {
      injector: this._injector,
    });
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
    this._instance.placeholder = this.placeholder;
    if (this.customConfig) {
      Object.getOwnPropertyNames(this.customConfig).forEach((name: string) => {
        if (this.customConfig) {
          this._instance[name] = this.customConfig[name];
        }
      });
    }
  }

  /**
   * Reassign any inputs that have changed
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (this._instance) {
      for (const prop of Object.keys(changes)) {
        this._instance[prop] = changes[prop].currentValue;
      }
    }
  }
}
