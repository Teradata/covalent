import { DialogValidator } from './dialog-validator';
import { FormControl } from '@angular/forms';
// tslint:disable: no-null-keyword

describe('DialogValidator', () => {
  it('should create an instance', () => {
    expect(new DialogValidator()).toBeTruthy();
  });

  describe('min', () => {
    it('should not error on an empty string', () => {
      expect(DialogValidator.min(2)(new FormControl(''))).toBeNull();
    });

    it('should not error on null', () => {
      expect(DialogValidator.min(2)(new FormControl(null))).toBeNull();
    });

    it('should not error on undefined', () => {
      expect(DialogValidator.min(2)(new FormControl(undefined))).toBeNull();
    });

    it('should return a validation error on small values', () => {
      expect(DialogValidator.min(2)(new FormControl('a'))).toEqual({ min: { min: 2, actual: 'a' } });
    });

    it('should not error on big values', () => {
      expect(DialogValidator.min(2)(new FormControl('abc'))).toBeNull();
    });

    it('should not error on equal values', () => {
      expect(DialogValidator.min(2)(new FormControl('ab'))).toBeNull();
    });

    it('should validate as expected when min value is a string', () => {
      expect(DialogValidator.min('2' as any)(new FormControl('a'))).toEqual({
        min: { min: '2', actual: 'a' },
      });
    });

    it('should return null if min value is undefined', () => {
      expect(DialogValidator.min(undefined as any)(new FormControl('abc'))).toBeNull();
    });

    it('should return null if min value is null', () => {
      // tslint:disable-next-line: no-null-keyword
      expect(DialogValidator.min(null as any)(new FormControl('abc'))).toBeNull();
    });
  });

  describe('max', () => {
    it('should not error on an empty string', () => {
      expect(DialogValidator.max(2)(new FormControl(''))).toBeNull();
    });

    it('should not error on null', () => {
      expect(DialogValidator.max(2)(new FormControl(null))).toBeNull();
    });

    it('should not error on undefined', () => {
      expect(DialogValidator.max(2)(new FormControl(undefined))).toBeNull();
    });

    it('should return a validation error on big values', () => {
      expect(DialogValidator.max(2)(new FormControl('abc'))).toEqual({ max: { max: 2, actual: 'abc' } });
    });

    it('should not error on small values', () => {
      expect(DialogValidator.max(2)(new FormControl('a'))).toBeNull();
    });

    it('should not error on equal values', () => {
      expect(DialogValidator.max(2)(new FormControl('ab'))).toBeNull();
    });

    it('should validate as expected when max value is a string', () => {
      expect(DialogValidator.max('2' as any)(new FormControl('abc'))).toEqual({
        max: { max: '2', actual: 'abc' },
      });
    });

    it('should return null if max value is undefined', () => {
      expect(DialogValidator.max(undefined as any)(new FormControl('abc'))).toBeNull();
    });

    it('should return null if max value is null', () => {
      expect(DialogValidator.max(null as any)(new FormControl('abc'))).toBeNull();
    });
  });

  describe('required', () => {
    it('should error on an empty string', () => {
      expect(DialogValidator.required(true)(new FormControl(''))).toEqual({ required: true });
    });

    it('should error on null', () => {
      expect(DialogValidator.required(true)(new FormControl(null))).toEqual({ required: true });
    });

    it('should not error on undefined', () => {
      expect(DialogValidator.required(true)(new FormControl(undefined))).toEqual({ required: true });
    });

    it('should not error on a non-empty string', () => {
      expect(DialogValidator.required(true)(new FormControl('not empty'))).toBeNull();
    });

    it('should accept zero as valid', () => {
      expect(DialogValidator.required(true)(new FormControl(0))).toBeNull();
    });
    it('should not error on a empty string if passed false', () =>
      expect(DialogValidator.required(false)(new FormControl(''))).toBeNull());
  });

  describe('email', () => {
    it('should not error on an empty string', () =>
      expect(DialogValidator.email(true)(new FormControl(''))).toBeNull());

    it('should not error on null', () => expect(DialogValidator.email(true)(new FormControl(null))).toBeNull());

    it('should error on invalid email', () =>
      expect(DialogValidator.email(true)(new FormControl('some text'))).toEqual({ email: true }));

    it('should not error on valid email', () =>
      expect(DialogValidator.email(true)(new FormControl('test@gmail.com'))).toBeNull());

    it('should error on valid email if email passed as false', () =>
      expect(DialogValidator.email(false)(new FormControl('test@gmail.com'))).toBeNull());
  });

  describe('pattern', () => {
    it('should not error on an empty string', () => {
      expect(DialogValidator.pattern('[a-zA-Z ]+')(new FormControl(''))).toBeNull();
    });

    it('should not error on null', () => {
      expect(DialogValidator.pattern('[a-zA-Z ]+')(new FormControl(null))).toBeNull();
    });

    it('should not error on undefined', () => {
      expect(DialogValidator.pattern('[a-zA-Z ]+')(new FormControl(undefined))).toBeNull();
    });

    it('should not error on null value and "null" pattern', () => {
      expect(DialogValidator.pattern('null')(new FormControl(null))).toBeNull();
    });

    it('should not error on valid strings', () =>
      expect(DialogValidator.pattern('[a-zA-Z ]*')(new FormControl('aaAA'))).toBeNull());

    it('should accept RegExp object', () => {
      const pattern: RegExp = new RegExp('[a-zA-Z ]+');
      expect(DialogValidator.pattern(pattern)(new FormControl('aaAA'))).toBeNull();
    });

    it('should error on failure to match RegExp object', () => {
      const pattern: RegExp = new RegExp('^[a-zA-Z ]*$');
      expect(DialogValidator.pattern(pattern)(new FormControl('aaa0'))).toEqual({
        pattern: { requiredPattern: /^[a-zA-Z ]*$/, actualValue: 'aaa0' },
      });
    });

    it('should not error on "null" pattern', () =>
      expect(DialogValidator.pattern(null!)(new FormControl('aaAA'))).toBeNull());

    it('should not error on "undefined" pattern', () =>
      expect(DialogValidator.pattern(undefined!)(new FormControl('aaAA'))).toBeNull());

    it('should work with pattern string containing both boundary symbols', () =>
      expect(DialogValidator.pattern('^[aA]*$')(new FormControl('aaAA'))).toBeNull());

    it('should work with pattern string containing only start boundary symbols', () =>
      expect(DialogValidator.pattern('^[aA]*')(new FormControl('aaAA'))).toBeNull());

    it('should work with pattern string containing only end boundary symbols', () =>
      expect(DialogValidator.pattern('[aA]*$')(new FormControl('aaAA'))).toBeNull());

    it('should work with pattern string not containing any boundary symbols', () =>
      expect(DialogValidator.pattern('[aA]*')(new FormControl('aaAA'))).toBeNull());
  });
});
