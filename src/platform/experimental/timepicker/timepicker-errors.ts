
/** @docs-private */
export function createMissingTimeImplError(provider: string): Error {
  return Error(
      `TdTimepicker: No provider found for ${provider}. You must import one of the following ` +
      `modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a ` +
      `custom implementation.`);
}
