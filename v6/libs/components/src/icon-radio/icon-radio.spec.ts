/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconRadioToggle } from './icon-radio-toggle';

describe('Icon radio', () => {
  it('should work', () => {
    expect(new CovalentIconRadioToggle()).toBeDefined();
  });
});
