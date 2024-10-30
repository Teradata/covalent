/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentFullscreenDialog } from './full-screen-dialog';

describe('Covalent Fullscreen Dialog', () => {
  it('should work', () => {
    expect(new CovalentFullscreenDialog()).toBeDefined();
  });
});
