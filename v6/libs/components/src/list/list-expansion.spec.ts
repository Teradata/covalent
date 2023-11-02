/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentExpansionList } from './list-expansion';

describe('List expansion item', () => {
  it('should work', () => {
    expect(new CovalentExpansionList()).toBeDefined();
  });
});
