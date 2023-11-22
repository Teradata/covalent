/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentEmptyState } from './empty-state';

describe('Empty state', () => {
  it('should work', () => {
    expect(new CovalentEmptyState()).toBeDefined();
  });
});
