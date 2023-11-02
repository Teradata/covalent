/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentChip } from './chip';

describe('Chip', () => {
  it('should work', () => {
    expect(new CovalentChip()).toBeDefined();
  });
});
