export function assignDefined(target: any, ...sources: any[]): any {
  for (const key of Object.keys(target)) {
    delete target[key];
  }
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const val: any = source[key];
      if (val !== undefined) {
        target[key] = val;
      } else {
        delete target[key];
      }
    }
  }
  return target;
}
