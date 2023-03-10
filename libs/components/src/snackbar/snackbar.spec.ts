/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentSnackbarBase } from './snackbar';

describe('Snackbar', () => {
  it('should work', () => {
    expect(new CovalentSnackbarBase()).toBeDefined();
  });
});
