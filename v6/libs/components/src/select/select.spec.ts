/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSelectBase } from './select';

describe('Select', () => {
  it('should work', () => {
    expect(new CovalentSelectBase()).toBeDefined();
  });
});
