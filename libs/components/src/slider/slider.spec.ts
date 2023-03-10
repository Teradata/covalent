/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSliderBase } from './slider';

describe('Slider', () => {
  it('should work', () => {
    expect(new CovalentSliderBase()).toBeDefined();
  });
});
