/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCardBase } from './card';

describe('Card', () => {
  it('should work', () => {
    expect(new CovalentCardBase()).toBeDefined();
  });
});
