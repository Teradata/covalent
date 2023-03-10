/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentButtonBase } from './button';

describe('Button', () => {
  it('should work', () => {
    expect(new CovalentButtonBase()).toBeDefined();
  });
});
