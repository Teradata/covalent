/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, beforeAll } from 'vitest';
import { CovalentBadge } from './badge';

describe('Covalent Badge', () => {
  let badgeElements: NodeListOf<CovalentBadge>;

  beforeAll(() => {
    document.body.innerHTML = `<cv-badge content="99"></cv-badge>
      <cv-badge content="0" showZero="true"></cv-badge>
      <cv-badge content="99" size="small"></cv-badge>
      <cv-badge content="1000" max="999"></cv-badge>
      `;
    badgeElements = document.body.querySelectorAll('cv-badge');
  });

  it('should work', () => {
    expect(new CovalentBadge()).toBeDefined();
  });

  it('should show content', () => {
    expect(badgeElements[0]?.shadowRoot?.innerHTML).toContain('99');
  });

  it('should show zero when showZero prop is true', () => {
    expect(badgeElements[1]?.shadowRoot?.innerHTML).toContain('0');
  });

  it('should not show content when size is small', () => {
    expect(badgeElements[2]?.shadowRoot?.innerHTML).not.toContain('99');
  });

  it('should cap the content based on max prop', () => {
    expect(badgeElements[3]?.shadowRoot?.innerHTML).toContain('999+');
  });
});
