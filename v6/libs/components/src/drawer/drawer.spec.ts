/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentDrawerBase } from './drawer';

describe('Drawer', () => {
  it('should work', () => {
    expect(new CovalentDrawerBase()).toBeDefined();
  });
});
