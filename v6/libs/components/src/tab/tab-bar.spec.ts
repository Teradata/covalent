/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTabBar } from './tab-bar';

describe('Tab bar', () => {
  it('should work', () => {
    expect(new CovalentTabBar()).toBeDefined();
  });
});
