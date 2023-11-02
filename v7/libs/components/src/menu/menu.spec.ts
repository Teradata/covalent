/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentMenu } from './menu';

describe('Menu', () => {
  it('should work', () => {
    expect(new CovalentMenu()).toBeDefined();
  });
});
