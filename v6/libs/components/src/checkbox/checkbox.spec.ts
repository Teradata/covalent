/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCheckbox } from './checkbox';

describe('Check box', () => {
  it('should work', () => {
    expect(new CovalentCheckbox()).toBeDefined();
  });
});
