import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import {
  TdDynamicFormsService,
  TdDynamicType,
  TdDynamicElement,
} from './dynamic-forms.service';

describe('Service: TdDynamicFormsService', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [TdDynamicFormsService],
      });
    })
  );

  it(
    'expect to validate element names correctly',
    waitForAsync(
      inject([TdDynamicFormsService], (service: TdDynamicFormsService) => {
        try {
          service.validateDynamicElementName('normal-name');
        } catch (e) {
          expect(e).toBeFalsy();
        }

        try {
          service.validateDynamicElementName('normal_22_name');
        } catch (e) {
          expect(e).toBeFalsy();
        }

        try {
          service.validateDynamicElementName('normal_22-name_22');
        } catch (e) {
          expect(e).toBeFalsy();
        }

        try {
          service.validateDynamicElementName('王先生');
        } catch (e) {
          expect(e).toBeFalsy();
        }

        try {
          service.validateDynamicElementName('日本語');
        } catch (e) {
          expect(e).toBeFalsy();
        }

        try {
          service.validateDynamicElementName('2normal_22-name_22');
          expect(false).toBeTruthy();
        } catch (e) {
          /* */
        }

        try {
          service.validateDynamicElementName('normal@22-name_22');
          expect(false).toBeTruthy();
        } catch (e) {
          /* */
        }
      })
    )
  );

  it(
    'expect to return components depending on type | element',
    waitForAsync(
      inject([TdDynamicFormsService], (service: TdDynamicFormsService) => {
        expect(service.getDynamicElement(TdDynamicType.Text)).toBeTruthy();
        expect(service.getDynamicElement(TdDynamicType.Number)).toBeTruthy();
        expect(service.getDynamicElement(TdDynamicType.Boolean)).toBeTruthy();
        expect(service.getDynamicElement(TdDynamicType.Array)).toBeTruthy();

        expect(service.getDynamicElement(TdDynamicElement.Input)).toBeTruthy();
        expect(
          service.getDynamicElement(TdDynamicElement.Textarea)
        ).toBeTruthy();
        expect(
          service.getDynamicElement(TdDynamicElement.Checkbox)
        ).toBeTruthy();
        expect(service.getDynamicElement(TdDynamicElement.Slider)).toBeTruthy();
        expect(
          service.getDynamicElement(TdDynamicElement.SlideToggle)
        ).toBeTruthy();
        expect(service.getDynamicElement(TdDynamicElement.Select)).toBeTruthy();

        try {
          expect(service.getDynamicElement(undefined)).toBeFalsy();
        } catch (e) {
          expect(e).toBeTruthy();
        }
      })
    )
  );
});
