/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSnackbar } from './snackbar';

describe('Snackbar', () => {
  it('should work', () => {
    expect(new CovalentSnackbar()).toBeDefined();
  });
});
