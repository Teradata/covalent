/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTab } from './tab';

describe('Tab', () => {
  it('should work', () => {
    expect(new CovalentTab()).toBeDefined();
  });
});
