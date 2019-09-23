export function assignDefined(target: any, ...sources: any[]): any {
  let keys: Set<string> = new Set<string>();
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      keys.add(key);
      const val: any = source[key];
      /* tslint:disable-next-line */
      if (val !== undefined && val !== null) {
        target[key] = val;
        /* tslint:disable-next-line */
      } else if (val === null) {
        delete target[key];
      }
    }
  }
  // delete keys that are not in any source
  for (const key of Object.keys(target)) {
    if (!keys.has(key)) {
      delete target[key];
    }
  }
  return target;
}
