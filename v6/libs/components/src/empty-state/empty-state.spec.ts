/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentEmptyStateBase } from './empty-state';

describe('Empty state', () => {
  it('should work', () => {
    expect(new CovalentEmptyStateBase()).toBeDefined();
  });
});
