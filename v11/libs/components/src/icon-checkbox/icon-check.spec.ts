/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconCheckToggle } from './icon-check-toggle';

describe('Icon check', () => {
  it('should work', () => {
    expect(new CovalentIconCheckToggle()).toBeDefined();
  });
});
