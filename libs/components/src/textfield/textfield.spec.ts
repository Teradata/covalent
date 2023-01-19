/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTextFieldBase } from './textfield';

describe('Text field', () => {
  it('should work', () => {
    expect(new CovalentTextFieldBase()).toBeDefined();
  });
});
