/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTopAppBarBase } from './top-app-bar';

describe('Top app bar', () => {
  it('should work', () => {
    expect(new CovalentTopAppBarBase()).toBeDefined();
  });
});
