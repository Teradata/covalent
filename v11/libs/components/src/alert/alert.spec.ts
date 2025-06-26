/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { CovalentAlert } from './alert';

global.ResizeObserver = class MockResizeObserver {
  constructor() {
    /**/
  }
  observe() {
    /**/
  }
  unobserve() {
    /**/
  }
  disconnect() {
    /**/
  }
};

describe('Alert', () => {
  it('should work', () => {
    expect(new CovalentAlert()).toBeDefined();
  });
});
