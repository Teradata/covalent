/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentStatusHeaderItem } from './status-header-item';

describe('Status header item', () => {
  it('should work', () => {
    expect(new CovalentStatusHeaderItem()).toBeDefined();
  });
});
