/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTypography } from './typography';

describe('Tooltip', () => {
  it('should work', () => {
    expect(new CovalentTypography()).toBeDefined();
  });
});
