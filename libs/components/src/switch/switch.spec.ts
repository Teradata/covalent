/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSwitch } from './switch';

describe('Switch', () => {
  it('should work', () => {
    expect(new CovalentSwitch()).toBeDefined();
  });
});
