/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTabBarBase } from './tab-bar';

describe('Tab bar', () => {
  it('should work', () => {
    expect(new CovalentTabBarBase()).toBeDefined();
  });
});
