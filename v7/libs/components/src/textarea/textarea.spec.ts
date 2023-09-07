/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTextArea } from './textarea';

describe('Text area', () => {
  it('should work', () => {
    expect(new CovalentTextArea()).toBeDefined();
  });
});
