/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTextAreaBase } from './textarea';

describe('Text area', () => {
  it('should work', () => {
    expect(new CovalentTextAreaBase()).toBeDefined();
  });
});
