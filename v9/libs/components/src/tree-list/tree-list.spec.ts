/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTreeList } from './tree-list';

describe('Tree list', () => {
  it('should work', () => {
    expect(new CovalentTreeList()).toBeDefined();
  });
});
