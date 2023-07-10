/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentToolbar } from './toolbar';

describe('Toolbar', () => {
  it('should work', () => {
    expect(new CovalentToolbar()).toBeDefined();
  });
});
