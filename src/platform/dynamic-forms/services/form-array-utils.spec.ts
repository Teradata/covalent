import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormArrayUtils } from './form-array-utils';
import { ITdDynamicElementConfig, TdDynamicType } from './dynamic-forms.service';

describe('Class: FormArrayUtils', () => {

  let fb: FormBuilder;
  let formGroup: FormGroup;
  let formArrayUtils: FormArrayUtils;

  // helper functions
  let subFormGroupFactory: Function;
  let loadFormArray: Function;

  beforeEach(() => {

    fb = new FormBuilder();

    // Parent form Group containing FormArray as 'formArray'
    formGroup = fb.group({
      formArray: fb.array([]),
    });

    // Add 'formArray' to FormArrayUtils class property
    formArrayUtils = new FormArrayUtils();
    formArrayUtils.formArray = <FormArray>formGroup.controls.formArray;

    // Helper function to create sub form groups ( controllers )
    subFormGroupFactory = (name: string): FormGroup => {
      let groupConfig: any = {};

      // Generic control -- not testing the control itself
      groupConfig[ name ] = ['', Validators.required];

      return fb.group(groupConfig);
    };

    loadFormArray = () => {
      // push to FormArray
      (<FormArray>formGroup.controls.formArray).push(subFormGroupFactory('fooName'));
      (<FormArray>formGroup.controls.formArray).push(subFormGroupFactory('barName'));
      (<FormArray>formGroup.controls.formArray).push(subFormGroupFactory('bazName'));
    };
  });

  afterEach(() => {
    fb = undefined;
    formGroup = undefined;
    formArrayUtils = undefined;
    subFormGroupFactory = undefined;
    loadFormArray = undefined;
  });

  it('expect formArray to be defined on FormGroup controls', () => {
    expect(formGroup.controls.formArray).toBeDefined();
  });

  it('should get control name', () => {
    let fooFormGroup: FormGroup = subFormGroupFactory('fooName');

    expect(formArrayUtils.getControlName(<{ [ key: string]: AbstractControl }>fooFormGroup.controls)).toBe('fooName');
  });

  it('should get names from multiple controls', () => {
    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    expect(formArrayUtils.getControlNames()).toEqual(['fooName', 'barName', 'bazName']);
  });

  it('should return true if FormArray contains control name', () => {

    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    expect(formArrayUtils.contains('barName')).toBeTruthy();
  });

  it('should return false if FormArray does not contain control name', () => {
    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    expect(formArrayUtils.contains('bumName')).toBeFalsy();
  });

  it('should return FormArray index of control by name', () => {
    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    expect(formArrayUtils.indexOf('fooName')).toEqual(0);
    expect(formArrayUtils.indexOf('barName')).toEqual(1);
    expect(formArrayUtils.indexOf('bazName')).toEqual(2);

    // Not in FormArray
    expect(formArrayUtils.indexOf('bumName')).toEqual(-1);
  });

  it('should return array of control names to remove from FormArray', () => {

    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    // 'barName' is not included in formGroup2.
    // 'bumName' is added
    let newControlNames: string[] = ['fooName', 'bazName', 'bumName'];

    expect(formArrayUtils.getControlNamesToRemove(newControlNames)).toEqual(['barName']);
  });

  it('should get names from array of ITdDynamicElementConfig', () => {

    // type is not tested, but required by interface ITdDynamicElementConfig
    let configs: ITdDynamicElementConfig[] = [
      { name: 'elem1', type: TdDynamicType.Text },
      { name: 'elem2', type: TdDynamicType.Text },
      { name: 'elem3', type: TdDynamicType.Text },
    ];

    // Not in FormArray
    expect(formArrayUtils.getElementNames(configs)).toEqual(['elem1', 'elem2', 'elem3']);
  });

  it('should get control names to remove from array of ITdDynamicElementConfig', () => {

    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    // 'barName' is not included in formGroup2.
    // 'bumName' is added.
    // type is not tested, but required by interface ITdDynamicElementConfig
    let configs: ITdDynamicElementConfig[] = [
      { name: 'fooName', type: TdDynamicType.Text },
      { name: 'bazName', type: TdDynamicType.Text },
      { name: 'bumName', type: TdDynamicType.Text },
    ];

    expect(formArrayUtils.getControlNamesToRemoveByElements(configs)).toEqual(['barName']);
  });

  it('should return object with control keys defined', () => {

    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    let controls: any = formArrayUtils.getControls();

    expect(controls.fooName).toEqual(jasmine.anything());
    expect(controls.barName).toEqual(jasmine.anything());
    expect(controls.bazName).toEqual(jasmine.anything());
  });

  it('should return value of controls', () => {

    // push fooName', 'barName', 'bazName' to FormArray
    let subGroupFoo: any = subFormGroupFactory('fooName');
    let subGroupBar: any = subFormGroupFactory('barName');
    let subGroupBaz: any = subFormGroupFactory('bazName');

    (<FormArray>formGroup.controls.formArray).push(subGroupFoo);
    (<FormArray>formGroup.controls.formArray).push(subGroupBar);
    (<FormArray>formGroup.controls.formArray).push(subGroupBaz);

    subGroupFoo.setValue({
      fooName: 'fooValue',
    });

    subGroupBar.setValue({
      barName: 'barValue',
    });

    subGroupBaz.setValue({
      bazName: 'bazValue',
    });

    let values: any = formArrayUtils.getValue();

    expect(values.fooName).toBe('fooValue');
    expect(values.barName).toBe('barValue');
    expect(values.bazName).toBe('bazValue');

    // not on values object
    expect(values.bumName).toBeUndefined();
  });

  it('should return error object', () => {

    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    let controls: any = formArrayUtils.getControls();

    // so barName control does not have an error
    controls.barName.setValue({
      barName: 'some value',
    });

    let errors: any = formArrayUtils.getErrors();

    // Has error
    expect(errors.fooName.required).toBeTruthy();
    expect(errors.bazName.required).toBeTruthy();

    // No error
    expect(errors.barName).toBeNull();
  });

  it('should return object containing only pushed control keys', () => {

    // push fooName', 'barName', 'bazName' to FormArray
    loadFormArray();

    let controls: any = formArrayUtils.getControls();

    expect(Object.keys(controls)).toEqual(['fooName', 'barName', 'bazName']);
  });

});
