/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentNotebookCell } from './notebook-cell';

describe('Notebook cell', () => {
  it('should work', () => {
    expect(new CovalentNotebookCell()).toBeDefined();
  });
});
