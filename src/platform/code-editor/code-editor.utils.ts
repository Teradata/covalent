import { Subject, Observable } from 'rxjs';

/**
 * Waits until monaco has been loaded so we can reference its global object.
 */
export function waitUntilMonacoReady(): Observable<void> {
  let monacoReady$: Subject<void> = new Subject<void>();

  // create interval to check if monaco has been loaded
  let interval: any = setInterval(() => {
    if (isMonacoLoaded()) {
      // clear interval when monaco has been loaded
      clearInterval(interval);
      monacoReady$.next();
      monacoReady$.complete();
    }
  }, 100);
  return monacoReady$.asObservable();
}

export function isMonacoLoaded(): boolean {
  return typeof((<any>window).monaco) === 'object';
}
