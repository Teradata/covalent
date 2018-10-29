export function assignDefined(target: any, ...sources: any[]): any {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
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
  return target;
}
