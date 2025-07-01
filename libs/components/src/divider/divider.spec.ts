/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, beforeAll } from 'vitest';
import { CovalentDivider } from './divider';

describe('Covalent Divider', () => {
  let dividerElements: NodeListOf<CovalentDivider>;

  beforeAll(() => {
    document.body.innerHTML = `
      <cv-divider></cv-divider>
      <cv-divider orientation="vertical"></cv-divider>
      <cv-divider variant="inset"></cv-divider>
      <cv-divider hidden></cv-divider>
    `;
    dividerElements = document.body.querySelectorAll('cv-divider');
  });

  it('should work', () => {
    expect(new CovalentDivider()).toBeDefined();
  });

  it('should render with default properties', () => {
    const divider = dividerElements[0];
    expect(divider).toBeDefined();
    expect(divider.orientation).toBe('horizontal');
    expect(divider.variant).toBe('full-width');
    expect(divider.hidden).toBe(false);
  });

  it('should render vertical orientation', () => {
    const divider = dividerElements[1];
    expect(divider.orientation).toBe('vertical');
  });

  it('should render inset variant', () => {
    const divider = dividerElements[2];
    expect(divider.variant).toBe('inset');
  });

  it('should be hidden when hidden property is true', () => {
    const divider = dividerElements[3];
    expect(divider.hidden).toBe(true);
  });

  it('should have correct role attribute', () => {
    const divider = dividerElements[0];
    const dividerElement =
      divider.shadowRoot?.querySelector('[role="separator"]');
    expect(dividerElement).toBeDefined();
  });
});
