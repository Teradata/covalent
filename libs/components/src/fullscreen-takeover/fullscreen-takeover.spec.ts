/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentFullscreenTakeover } from './fullscreen-takeover';

describe('Covalent Fullscreen Takeover', () => {
  it('should work', () => {
    expect(new CovalentFullscreenTakeover()).toBeDefined();
  });
});
