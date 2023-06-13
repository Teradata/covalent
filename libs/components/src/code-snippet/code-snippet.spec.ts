/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCodeSnippet } from './code-snippet';

describe('Code snippet', () => {
  it('should work', () => {
    expect(new CovalentCodeSnippet()).toBeDefined();
  });
});
