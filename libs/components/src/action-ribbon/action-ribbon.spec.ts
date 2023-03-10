/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentActionRibbon } from './action-ribbon';

describe('Action ribbon', () => {
  it('should work', () => {
    expect(new CovalentActionRibbon()).toBeDefined();
  });
});
