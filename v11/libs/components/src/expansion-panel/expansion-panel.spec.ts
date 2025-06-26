/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentExpansionPanel } from './expansion-panel';

describe('Expansion panel', () => {
  it('should work', () => {
    expect(new CovalentExpansionPanel()).toBeDefined();
  });
});
