/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCell } from './cell';

describe('Cell', () => {
  it('should work', () => {
    expect(new CovalentCell()).toBeDefined();
  });
});
