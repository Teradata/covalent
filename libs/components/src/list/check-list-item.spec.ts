/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCheckListItemBase } from './check-list-item';

describe('Check list expansion item', () => {
  it('should work', () => {
    expect(new CovalentCheckListItemBase()).toBeDefined();
  });
});
