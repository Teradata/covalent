/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconButtonBase } from './icon-button';

describe('Icon button', () => {
  it('should work', () => {
    expect(new CovalentIconButtonBase()).toBeDefined();
  });
});
