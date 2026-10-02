/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest';
import { CovalentCodeSnippet } from './code-snippet';

describe('Code snippet', () => {
  it('should work', () => {
    expect(new CovalentCodeSnippet()).toBeDefined();
  });

  it('should trim surrounding whitespace by default', async () => {
    const snippet = new CovalentCodeSnippet();
    (snippet as any)._code = '  const answer = 42;  ';
    document.body.appendChild(snippet);

    await snippet.updateComplete;

    const code = snippet.shadowRoot?.querySelector('code');
    expect(code?.textContent).toBe('const answer = 42;');

    document.body.removeChild(snippet);
  });

  it('should preserve surrounding whitespace when skipTrim is true', async () => {
    const snippet = new CovalentCodeSnippet();
    (snippet as any)._code = '  const answer = 42;  ';
    snippet.skipTrim = true;
    document.body.appendChild(snippet);

    await snippet.updateComplete;

    const code = snippet.shadowRoot?.querySelector('code');
    expect(code?.textContent).toBe('  const answer = 42;  ');

    document.body.removeChild(snippet);
  });
});
