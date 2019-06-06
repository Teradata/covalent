// TODO: DUPLICATED
export function removeHash(str: string): string {
  if (str) {
    return str.replace(/^#+/, '');
  }
  return undefined;
}

export function normalize(str: string): string {
  if (str) {
    const PREFIX: string = 'tdmarkdownanchor';
    const normalizedString: string = removeHash(str.replace(/\W+/g, '')).toLowerCase();
    const removePrefix: RegExp = new RegExp(`^${PREFIX}`, 'g');
    const unPrefixed: string = normalizedString.replace(removePrefix, '');
    const prefixed: string = `${PREFIX}${unPrefixed}`;
    return prefixed;
  }
  return undefined;
}

export function scrollToAnchor(element: HTMLElement, anchor: string): void {
  if (element && anchor) {
    const normalizedAnchor: string = normalize(anchor);
    const parent: HTMLElement = element.parentElement;

    let headingToJumpTo: HTMLElement;
    const headingWithinComponent: HTMLElement = element.querySelector(`#${normalizedAnchor}`);

    if (headingWithinComponent) {
      headingToJumpTo = headingWithinComponent;
    } else if (parent) {
      headingToJumpTo = parent.querySelector(`#${normalizedAnchor}`);
    }
    if (headingToJumpTo) {
      headingToJumpTo.scrollIntoView({ behavior: 'auto' });
    } else {
      console.warn(`Could not jump to heading '${anchor}'`);
    }
  }
}

export function isAnchorLink(anchor: HTMLAnchorElement): boolean {
  const url: URL = new URL(anchor.href);
  return url.host === window.location.host && url.pathname === '/';
}
