/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconCheckToggleBase } from './icon-check-toggle';

describe('Icon check', () => {
  it('should work', () => {
    expect(new CovalentIconCheckToggleBase()).toBeDefined();
  });
});
