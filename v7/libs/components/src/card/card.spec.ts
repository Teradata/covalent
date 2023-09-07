/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCard } from './card';

describe('Card', () => {
  it('should work', () => {
    expect(new CovalentCard()).toBeDefined();
  });
});
