/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIconRadioToggleBase } from './icon-radio-toggle';

describe('Icon radio', () => {
  it('should work', () => {
    expect(new CovalentIconRadioToggleBase()).toBeDefined();
  });
});
