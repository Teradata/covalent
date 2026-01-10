/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentIcon } from './icon';

describe('Icon', () => {
  it('should work', () => {
    expect(new CovalentIcon()).toBeDefined();
  });

  it('should have filled property', () => {
    const icon = new CovalentIcon();
    expect(icon.filled).toBe(false);
  });

  it('should set filled attribute when property is true', async () => {
    const icon = new CovalentIcon();
    document.body.appendChild(icon);

    icon.filled = true;
    await icon.updateComplete;

    expect(icon.hasAttribute('filled')).toBe(true);
    document.body.removeChild(icon);
  });
});
