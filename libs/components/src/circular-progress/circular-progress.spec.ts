/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCircularProgress } from './circular-progress';

describe('Circular progress', () => {
  it('should work', () => {
    expect(new CovalentCircularProgress()).toBeDefined();
  });
});
