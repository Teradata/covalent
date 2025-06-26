/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentFocusedPage } from './focused-page';

describe('Covalent Focused Page', () => {
  it('should work', () => {
    expect(new CovalentFocusedPage()).toBeDefined();
  });
});
