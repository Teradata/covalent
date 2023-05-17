/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentAlert } from './alert';

describe('Alert', () => {
  it('should work', () => {
    expect(new CovalentAlert()).toBeDefined();
  });
});
