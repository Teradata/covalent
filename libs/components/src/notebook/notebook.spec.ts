/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentNotebook } from './notebook';

describe('Notebook', () => {
  it('should work', () => {
    expect(new CovalentNotebook()).toBeDefined();
  });
});
