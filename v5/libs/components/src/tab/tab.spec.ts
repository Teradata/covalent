/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTabBase } from './tab';

describe('Tab', () => {
  it('should work', () => {
    expect(new CovalentTabBase()).toBeDefined();
  });
});
