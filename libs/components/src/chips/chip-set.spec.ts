/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentChipSet } from './chip-set';

describe('Chip set', () => {
  it('should work', () => {
    expect(new CovalentChipSet()).toBeDefined();
  });
});
