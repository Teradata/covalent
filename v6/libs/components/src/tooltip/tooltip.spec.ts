/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTooltip } from './tooltip';

describe('Tooltip', () => {
  it('should work', () => {
    expect(new CovalentTooltip()).toBeDefined();
  });
});
