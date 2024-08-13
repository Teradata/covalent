/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentCodeEditor } from './code-editor';

describe('Code editor', () => {
  it('should work', () => {
    expect(new CovalentCodeEditor()).toBeDefined();
  });
});
