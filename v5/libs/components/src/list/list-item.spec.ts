/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentListItemBase } from './list-item';

describe('List item', () => {
  it('should work', () => {
    expect(new CovalentListItemBase()).toBeDefined();
  });
});
