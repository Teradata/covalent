/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconButtonToggle } from './icon-button-toggle';

describe('Icon button toggle', () => {
  it('should work', () => {
    expect(new CovalentIconButtonToggle()).toBeDefined();
  });
});
