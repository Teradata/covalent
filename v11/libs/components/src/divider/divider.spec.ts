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
      <cv-divider direction="vertical"></cv-divider>
      <cv-divider size="inset"></cv-divider>
      <cv-divider flush></cv-divider>
    `;
    dividerElements = document.body.querySelectorAll('cv-divider');
  });

  it('should work', () => {
    expect(new CovalentDivider()).toBeDefined();
  });

  it('should render with default properties', () => {
    const divider = dividerElements[0];
    expect(divider).toBeDefined();
    expect(divider.direction).toBe('horizontal');
    expect(divider.size).toBe('full');
    expect(divider.flush).toBe(false);
  });

  it('should render vertical direction', () => {
    const divider = dividerElements[1];
    expect(divider.direction).toBe('vertical');
  });

  it('should render inset size', () => {
    const divider = dividerElements[2];
    expect(divider.size).toBe('inset');
  });

  it('should be flush when flush property is true', () => {
    const divider = dividerElements[3];
    expect(divider.flush).toBe(true);
  });

  it('should have correct role attribute', () => {
    const divider = dividerElements[0];
    const dividerElement =
      divider.shadowRoot?.querySelector('[role="separator"]');
    expect(dividerElement).toBeDefined();
  });
});
