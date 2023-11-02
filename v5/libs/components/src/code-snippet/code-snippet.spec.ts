/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCodeSnippetBase } from './code-snippet';

describe('Code snippet', () => {
  it('should work', () => {
    expect(new CovalentCodeSnippetBase()).toBeDefined();
  });
});
