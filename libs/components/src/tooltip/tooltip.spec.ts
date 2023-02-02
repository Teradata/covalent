/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTooltipBase } from './tooltip';

describe('Tooltip', () => {
  it('should work', () => {
    expect(new CovalentTooltipBase()).toBeDefined();
  });
});
