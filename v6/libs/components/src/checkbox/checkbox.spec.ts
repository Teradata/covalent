/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCheckboxBase } from './checkbox';

describe('Check box', () => {
  it('should work', () => {
    expect(new CovalentCheckboxBase()).toBeDefined();
  });
});
