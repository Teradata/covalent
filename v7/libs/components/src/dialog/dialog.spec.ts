/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentDialog } from './dialog';

describe('Dialog', () => {
  it('should work', () => {
    expect(new CovalentDialog()).toBeDefined();
  });
});
