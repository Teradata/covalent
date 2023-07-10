/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentRadio } from './radio';

describe('Radio', () => {
  it('should work', () => {
    expect(new CovalentRadio()).toBeDefined();
  });
});
