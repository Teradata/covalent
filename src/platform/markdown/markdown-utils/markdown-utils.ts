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

export function normalizeAnchor(str: string): string {
  if (str) {
    return removeLeadingHash(str.replace(/(_|-|\s)+/g, '')).toLowerCase();
  }
  return undefined;
}

export function scrollToAnchor(element: HTMLElement, anchor: string): void {
  if (element && anchor) {
    const normalizedAnchor: string = normalizeAnchor(anchor);
    const parent: HTMLElement = element.parentElement;

    let headingToJumpTo: HTMLElement;
    const headingWithinComponent: HTMLElement = element.querySelector(`[id="${normalizedAnchor}"]`);

    if (headingWithinComponent) {
      headingToJumpTo = headingWithinComponent;
    } else if (parent) {
      headingToJumpTo = parent.querySelector(`[id="${normalizedAnchor}"]`);
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

export function rawGithubHref(githubHref: string): string {
  if (githubHref) {
    const url: URL = new URL(githubHref);
    if (url.pathname.startsWith('/raw/')) {
      return githubHref;
    } else {
      url.hostname = 'raw.githubusercontent.com';
      url.pathname = url.pathname.split('/blob', 2).join('');
      return url.href;
    }
  }
  return undefined;
}

export function isGithubHref(href: string): boolean {
  try {
    const temp: URL = new URL(href);
    return temp.hostname === 'github.com';
  } catch {
    return false;
  }
}
