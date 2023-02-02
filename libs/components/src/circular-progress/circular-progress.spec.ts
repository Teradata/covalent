/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCircularProgressBase } from './circular-progress';

describe('Circular progress', () => {
  it('should work', () => {
    expect(new CovalentCircularProgressBase()).toBeDefined();
  });
});
