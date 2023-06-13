/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentLinearProgress } from './linear-progress';

describe('Linear progress', () => {
  it('should work', () => {
    expect(new CovalentLinearProgress()).toBeDefined();
  });
});
