/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentFormfieldBase } from './formfield';

describe('Form field', () => {
  it('should work', () => {
    expect(new CovalentFormfieldBase()).toBeDefined();
  });
});
