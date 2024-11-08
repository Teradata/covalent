/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconLockup } from './icon-lockup';

describe('Icon lockup', () => {
  it('should work', () => {
    expect(new CovalentIconLockup()).toBeDefined();
  });
});
