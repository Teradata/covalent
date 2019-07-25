
export const DIRECTION_STORAGE_KEY: string = 'app-direction';

/**
 * Utility method to get selected direction from sessionStorage
 */
export function getDirection(): 'ltr' | 'rtl' {
  let storedDirection: 'ltr' | 'rtl' = <any>sessionStorage.getItem(DIRECTION_STORAGE_KEY);
  // Check if the direction was stored
  if (storedDirection) {
    return storedDirection;
  }
  return 'ltr';
}

/**
 * Utility method to set selected direction to sessionStorage
 */
export function setDirection(direction: 'ltr' | 'rtl'): void {
  sessionStorage.setItem(DIRECTION_STORAGE_KEY, direction);
}
