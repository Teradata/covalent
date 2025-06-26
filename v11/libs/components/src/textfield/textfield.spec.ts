/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentTextField } from './textfield';

describe('Text field', () => {
  it('should work', () => {
    expect(new CovalentTextField()).toBeDefined();
  });
});
