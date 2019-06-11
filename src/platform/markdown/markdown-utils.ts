export function removeLeadingHash(str: string): string {
  if (str) {
    return str.replace(/^#+/, '');
  }
  return undefined;
}

export function removeTrailingHash(str: string): string {
  if (str) {
    return str.replace(/\#.*/, '');
  }
  return undefined;
}

export function normalize(str: string): string {
  if (str) {
    return removeLeadingHash(str.replace(/\W+/g, '')).toLowerCase();
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
      // TODO: leave this warning?
      // tslint:disable-next-line
      console.warn(`Could not jump to heading '${anchor}'`);
    }
  }
}

export function isAnchorLink(anchor: HTMLAnchorElement): boolean {
  if (anchor) {
    return anchor.getAttribute('href').startsWith('#');
  }
}
