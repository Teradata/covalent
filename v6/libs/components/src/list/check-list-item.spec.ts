/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCheckListItem } from './check-list-item';

describe('Check list expansion item', () => {
  it('should work', () => {
    expect(new CovalentCheckListItem()).toBeDefined();
  });
});
