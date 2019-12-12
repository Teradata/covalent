export function removeLeadingHash(str: string): string {
  if (str) {
    return str.replace(/^#+/, '');
  }
  return '';
}

export function removeTrailingHash(str: string): string {
  if (str) {
    return str.replace(/\#.*/, '');
  }
  return '';
}

export function genHeadingId(str: string): string {
  if (str) {
    return removeLeadingHash(
      str
        .replace(/(_|-|\s)+/g, '')
        // Remove certain special chars to create heading ids similar to those in github
        // borrowed from showdown
        // https://github.com/showdownjs/showdown/blob/develop/src/subParsers/makehtml/headers.js#L94
        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, ''),
    ).toLowerCase();
  }
  return '';
}

export function scrollToAnchor(scope: HTMLElement, anchor: string, tryParent: boolean): boolean {
  if (scope && anchor) {
    const normalizedAnchor: string = genHeadingId(anchor);
    let headingToJumpTo: HTMLElement;
    const headingWithinComponent: HTMLElement = scope.querySelector(`[id="${normalizedAnchor}"]`);

    if (headingWithinComponent) {
      headingToJumpTo = headingWithinComponent;
    } else if (tryParent) {
      const parent: HTMLElement = scope.parentElement;
      if (parent) {
        headingToJumpTo = parent.querySelector(`[id="${normalizedAnchor}"]`);
      }
    }
    if (headingToJumpTo) {
      headingToJumpTo.scrollIntoView({ behavior: 'auto' });
      return true;
    }
  }
  return false;
}

export function isAnchorLink(anchor: HTMLAnchorElement): boolean {
  if (anchor) {
    const href: string = anchor.getAttribute('href');
    if (href) {
      return href.startsWith('#');
    }
  }
  return false;
}
const RAW_GITHUB_HOSTNAME: string = 'raw.githubusercontent.com';

export function rawGithubHref(githubHref: string): string {
  if (githubHref) {
    try {
      const url: URL = new URL(githubHref);
      if (url.hostname === RAW_GITHUB_HOSTNAME) {
        return url.href;
      } else if (isGithubHref(githubHref)) {
        url.hostname = RAW_GITHUB_HOSTNAME;
        url.pathname = url.pathname.split('/blob', 2).join('');
        return url.href;
      }
    } catch {
      return '';
    }
  }
  return '';
}

export function isGithubHref(href: string): boolean {
  try {
    const temp: URL = new URL(href);
    return temp.hostname === 'github.com';
  } catch {
    return false;
  }
}

export function isRawGithubHref(href: string): boolean {
  try {
    const temp: URL = new URL(href);
    return temp.hostname === RAW_GITHUB_HOSTNAME;
  } catch {
    return false;
  }
}
