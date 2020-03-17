import { Subject, Observable } from 'rxjs';

/**
 * Waits until monaco has been loaded so we can reference its global object.
 */
export function waitUntilMonacoReady(): Observable<void> {
  const monacoReady$: Subject<void> = new Subject<void>();

  // create interval to check if monaco has been loaded
  const interval: any = setInterval(() => {
    if (isMonacoLoaded()) {
      // clear interval when monaco has been loaded
      clearInterval(interval);
      monacoReady$.next();
      monacoReady$.complete();
    }
  }, 100);
  return monacoReady$.asObservable();
}

/**
 * Check if monaco has been loaded
 */
export function isMonacoLoaded(): boolean {
  return typeof (<any>window).monaco === 'object';
}

/**
 * Loads monaco
 */
export function loadMonaco(): void {
  // check if the script tag has been created in case another code component has done this already
  if (!document.getElementById('monaco-loader-script')) {
    const onGotAmdLoader: () => void = () => {
      // Load monaco
      (<any>window).require.config({ paths: { vs: 'assets/monaco/vs' } });
      (<any>window).require(['vs/editor/editor.main'], () => {
        // TODO
      });
    };

    // Load AMD loader if necessary
    if (!(<any>window).require) {
      const loaderScript: HTMLScriptElement = document.createElement('script');
      loaderScript.id = 'monaco-loader-script';
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'assets/monaco/vs/loader.js';
      loaderScript.addEventListener('load', onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  }
}
