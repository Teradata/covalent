/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTreeListItem } from './tree-list-item';

describe('Tree list item', () => {
  it('should work', () => {
    expect(new CovalentTreeListItem()).toBeDefined();
  });
});
