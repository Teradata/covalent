/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentListItem } from './list-item';

describe('List item', () => {
  it('should work', () => {
    expect(new CovalentListItem()).toBeDefined();
  });
});
