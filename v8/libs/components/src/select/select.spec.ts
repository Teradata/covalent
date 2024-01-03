/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSelect } from './select';

describe('Select', () => {
  it('should work', () => {
    expect(new CovalentSelect()).toBeDefined();
  });
});
