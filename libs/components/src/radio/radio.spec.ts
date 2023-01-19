/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentRadioBase } from './radio';

describe('Radio', () => {
  it('should work', () => {
    expect(new CovalentRadioBase()).toBeDefined();
  });
});
