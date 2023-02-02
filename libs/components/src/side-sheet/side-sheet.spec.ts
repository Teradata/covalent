/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSideSheet } from './side-sheet';

describe('Side sheet', () => {
  it('should work', () => {
    expect(new CovalentSideSheet()).toBeDefined();
  });
});
