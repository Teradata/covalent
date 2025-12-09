import 'jest-preset-angular/setup-jest';
import 'jest-canvas-mock';

// Mock CSS class for Monaco Editor 0.55.1+
// Monaco usa CSS.supports() y otras APIs CSS que no existen en jsdom
(globalThis as any).CSS = {
  supports: (rule: string) => true,
  escape: (value: string) => value,
};

// Mock ResizeObserver requerido por Monaco Editor
(globalThis as any).ResizeObserver = class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
};

// Mock IntersectionObserver si es necesario
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
