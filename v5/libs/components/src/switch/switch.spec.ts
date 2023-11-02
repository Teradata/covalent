/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSwitchBase } from './switch';

describe('Switch', () => {
  it('should work', () => {
    expect(new CovalentSwitchBase()).toBeDefined();
  });
});
