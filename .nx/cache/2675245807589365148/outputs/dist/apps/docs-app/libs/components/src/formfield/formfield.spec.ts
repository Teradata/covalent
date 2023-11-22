/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentFormfield } from './formfield';

describe('Form field', () => {
  it('should work', () => {
    expect(new CovalentFormfield()).toBeDefined();
  });
});
