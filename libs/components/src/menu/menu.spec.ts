/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentMenuBase } from './menu';

describe('Menu', () => {
  it('should work', () => {
    expect(new CovalentMenuBase()).toBeDefined();
  });
});
