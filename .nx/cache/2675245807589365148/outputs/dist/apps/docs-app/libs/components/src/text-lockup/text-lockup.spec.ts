/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTextLockup } from './text-lockup';

describe('Text lockup', () => {
  it('should work', () => {
    expect(new CovalentTextLockup()).toBeDefined();
  });
});
