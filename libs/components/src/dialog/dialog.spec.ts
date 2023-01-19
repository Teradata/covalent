/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentDialogBase } from './dialog';

describe('Dialog', () => {
  it('should work', () => {
    expect(new CovalentDialogBase()).toBeDefined();
  });
});
