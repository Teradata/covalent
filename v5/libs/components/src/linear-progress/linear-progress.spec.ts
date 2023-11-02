/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentLinearProgressBase } from './linear-progress';

describe('Linear progress', () => {
  it('should work', () => {
    expect(new CovalentLinearProgressBase()).toBeDefined();
  });
});
