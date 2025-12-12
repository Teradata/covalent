/**
 * Shared Monaco Editor test setup
 * Mocks required browser APIs for Monaco Editor 0.55.1+
 * Import this file in your test-setup.ts files
 */

// Mock CSS API required by Monaco Editor
(globalThis as any).CSS = {
  supports: () => true,
  escape: (value: string) => value,
};

// Mock deprecated document.queryCommandSupported used by Monaco clipboard
if (typeof document !== 'undefined') {
  document.queryCommandSupported = () => false;
}

// Mock ResizeObserver
(globalThis as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock IntersectionObserver
(globalThis as any).IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = '';
  thresholds = [];
};
