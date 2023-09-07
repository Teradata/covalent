/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentDrawer } from './drawer';

describe('Drawer', () => {
  it('should work', () => {
    expect(new CovalentDrawer()).toBeDefined();
  });
});
