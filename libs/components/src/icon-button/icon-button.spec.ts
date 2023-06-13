/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconButton } from './icon-button';

describe('Icon button', () => {
  it('should work', () => {
    expect(new CovalentIconButton()).toBeDefined();
  });
});
