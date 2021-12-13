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

export function renderVideoElements(html: string): string {
  const ytLongEmbed: RegExp =
    /!\[(?:(?:https?:)?(?:\/\/)?)(?:(?:www)?.)?youtube.(?:.+?)\/(?:(?:embed\/)([\w-]{11})(\?[\w%;-]+(?:=[\w%;-]+)?(?:&[\w%;-]+(?:=[\w%;-]+)?)*)?)]/gi;
  const ytLongWatch: RegExp =
    /!\[(?:(?:https?:)?(?:\/\/)?)(?:(?:www)?.)?youtube.(?:.+?)\/(?:(?:watch\?v=)([\w-]{11})(&[\w%;-]+(?:=[\w%;-]+)?)*)]/gi;
  const ytShort: RegExp =
    /!\[(?:(?:https?:)?(?:\/\/)?)?youtu.be\/([\w-]{11})\??([\w%;-]+(?:=[\w%;-]+)?(?:&[\w%;-]+(?:=[\w%;-]+)?)*)?]/gi;
  const ytPlaylist: RegExp =
    /!\[(?:(?:https?:)?(?:\/\/)?)(?:(?:www)?.)?youtube.(?:.+?)\/(?:(?:playlist\?list=)([\w-]{34})(&[\w%;-]+(?:=[\w%;-]+)?)*)]/gi;

  function convert(match: string, id: string, flags: string): string {
    if (flags) {
      id += '?' + flags.replace(/&amp;/gi, '&');
    }
    return `<iframe allow="fullscreen" frameborder="0" src="https://www.youtube.com/embed/${id}"></iframe>`;
  }
  function convertPL(match: string, id: string, flags: string): string {
    if (flags) {
      id += flags.replace(/&amp;/gi, '&');
    }
    return `<iframe allow="fullscreen" frameborder="0" src="https://www.youtube.com/embed/videoseries?list=${id}"></iframe>`;
  }

  return html
    .replace(ytLongWatch, convert)
    .replace(ytLongEmbed, convert)
    .replace(ytShort, convert)
    .replace(ytPlaylist, convertPL);
}
