/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentToolbarBase } from './toolbar';

describe('Toolbar', () => {
  it('should work', () => {
    expect(new CovalentToolbarBase()).toBeDefined();
  });
});
