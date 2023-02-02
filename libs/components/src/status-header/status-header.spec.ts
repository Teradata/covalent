/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentStatusHeader } from './status-header';

describe('Status header', () => {
  it('should work', () => {
    expect(new CovalentStatusHeader()).toBeDefined();
  });
});
