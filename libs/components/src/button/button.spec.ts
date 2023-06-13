/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentButton } from './button';

describe('Button', () => {
  it('should work', () => {
    expect(new CovalentButton()).toBeDefined();
  });
});
