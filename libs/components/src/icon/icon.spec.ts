/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIcon } from './icon';

describe('Icon', () => {
  it('should work', () => {
    expect(new CovalentIcon()).toBeDefined();
  });
});
