/**
 * Test setup for Vitest
 * Mocks required browser APIs for Monaco Editor 0.55.1+
 */

// Mock CSS API required by Monaco Editor
(globalThis as any).CSS = {
  supports: () => true,
  escape: (value: string) => value,
};

// Mock deprecated document.queryCommandSupported used by Monaco clipboard
document.queryCommandSupported = () => false;

// Mock ResizeObserver
(globalThis as any).ResizeObserver = class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
};

// Mock IntersectionObserver
(globalThis as any).IntersectionObserver = class IntersectionObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = '';
  thresholds = [];
};
