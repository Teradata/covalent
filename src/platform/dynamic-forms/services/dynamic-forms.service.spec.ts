import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { TdDynamicFormsService, TdDynamicType,
         TdDynamicElement } from './dynamic-forms.service';

describe('Service: TdDynamicFormsService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TdDynamicFormsService,
      ],
    });
  }));

  it('expect to validate element names correctly',
    async(inject([TdDynamicFormsService], (service: TdDynamicFormsService) => {
      try {
        service.validateDynamicElementName('normal-name');
      } catch (e) {
        expect(e).toBeFalsy('name should be validated correctly');
      }

      try {
        service.validateDynamicElementName('normal_22_name');
      } catch (e) {
        expect(e).toBeFalsy('name should be validated correctly');
      }

      try {
        service.validateDynamicElementName('normal_22-name_22');
      } catch (e) {
        expect(e).toBeFalsy('name should be validated correctly');
      }

      try {
        service.validateDynamicElementName('2normal_22-name_22');
        expect(false).toBeTruthy('2normal_22-name_22 name should not be validated correctly');
      } catch (e) { /* */ }

      try {
        service.validateDynamicElementName('normal@22-name_22');
        expect(false).toBeTruthy('normal@22-name_22 name should not be validated correctly');
      } catch (e) { /* */ }

    })
  ));

  it('expect to return components depending on type | element',
    async(inject([TdDynamicFormsService], (service: TdDynamicFormsService) => {

      expect(service.getDynamicElement(TdDynamicType.Text)).toBeTruthy();
      expect(service.getDynamicElement(TdDynamicType.Number)).toBeTruthy();
      expect(service.getDynamicElement(TdDynamicType.Boolean)).toBeTruthy();

      expect(service.getDynamicElement(TdDynamicElement.Input)).toBeTruthy();
      expect(service.getDynamicElement(TdDynamicElement.Checkbox)).toBeTruthy();
      expect(service.getDynamicElement(TdDynamicElement.Slider)).toBeTruthy();
      expect(service.getDynamicElement(TdDynamicElement.SlideToggle)).toBeTruthy();

      try {
        expect(service.getDynamicElement(undefined)).toBeFalsy('expect not to return a component');
      } catch (e) {
        expect(e).toBeTruthy();
      }
    })
  ));

  it('expect to return default flex depending on type | element',
    async(inject([TdDynamicFormsService], (service: TdDynamicFormsService) => {

      expect(service.getDefaultElementFlex(TdDynamicType.Text)).toBe(45);
      expect(service.getDefaultElementFlex(TdDynamicType.Number)).toBe(45);
      expect(service.getDefaultElementFlex(TdDynamicType.Boolean)).toBe(20);

      expect(service.getDefaultElementFlex(TdDynamicElement.Input)).toBe(45);
      expect(service.getDefaultElementFlex(TdDynamicElement.Checkbox)).toBe(20);
      expect(service.getDefaultElementFlex(TdDynamicElement.Slider)).toBe(45);
      expect(service.getDefaultElementFlex(TdDynamicElement.SlideToggle)).toBe(20);

      try {
        expect(service.getDefaultElementFlex(undefined)).toBeFalsy('expect not to return a component');
      } catch (e) {
        expect(e).toBeTruthy();
      }
    })
  ));

});
