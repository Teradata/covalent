/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSlider } from './slider';

describe('Slider', () => {
  it('should work', () => {
    expect(new CovalentSlider()).toBeDefined();
  });
});
