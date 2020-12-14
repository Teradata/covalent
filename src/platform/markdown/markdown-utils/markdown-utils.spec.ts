import {
  removeLeadingHash,
  removeTrailingHash,
  genHeadingId,
  isAnchorLink,
  isGithubHref,
  rawGithubHref,
  scrollToAnchor,
  isRawGithubHref,
} from './markdown-utils';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'jump-to-anchor-test-component',
  template: `
    <main>
      <section id="s1">
        <article id="a1">
          <h1 id="heading1">heading 1</h1>
          <h1 id="heading2">heading 2</h1>
        </article>
        <article id="a2">
          <h1 id="heading3">heading 3</h1>
          <h1 id="heading4">heading 4</h1>
        </article>
      </section>

      <section id="s2">
        <article id="a3">
          <h1 id="heading5">heading 5</h1>
          <h1 id="heading6">heading 6</h1>
        </article>
        <article id="a4">
          <h1 id="heading7">heading 7</h1>
          <h1 id="heading8">heading 8</h1>
        </article>
      </section>
    </main>
  `,
})
class JumpToAnchorTestComponent {}

describe('Markdown utils', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JumpToAnchorTestComponent],
      }).compileComponents();
    }),
  );

  it('removeLeadingHash should remove leading hashes', () => {
    expect(removeLeadingHash('')).toBe('');
    expect(removeLeadingHash('#')).toBe('');
    expect(removeLeadingHash('#anchor')).toBe('anchor');
    expect(removeLeadingHash('##anchor')).toBe('anchor');
    expect(removeLeadingHash('#anchor#')).toBe('anchor#');
    expect(removeLeadingHash('#before#anchor')).toBe('before#anchor');
  });

  it('removeTrailingHash should remove trailing hashes', () => {
    expect(removeTrailingHash('')).toBe('');
    expect(removeTrailingHash('#')).toBe('');
    expect(removeTrailingHash('#anchor')).toBe('');
    expect(removeTrailingHash('before#')).toBe('before');
    expect(removeTrailingHash('even-before#before#')).toBe('even-before');
    expect(removeTrailingHash('before##')).toBe('before');
  });

  it('genHeadingId should generate proper heading id', () => {
    expect(genHeadingId('')).toBe('');
    expect(genHeadingId('Markdown Utils')).toBe('markdownutils');
    expect(genHeadingId('Markdown-Utils')).toBe('markdownutils');
    expect(genHeadingId('Markdown_Utils')).toBe('markdownutils');
    expect(genHeadingId('(component/module/utility)')).toBe('componentmoduleutility');
    expect(genHeadingId('Markdown Utils!?')).toBe('markdownutils');
    expect(genHeadingId('#markdown_utils')).toBe('markdownutils');
    expect(genHeadingId('#markdown-utils')).toBe('markdownutils');
    expect(genHeadingId('#markdown utils')).toBe('markdownutils');
    expect(genHeadingId('#(component/module/utility)')).toBe('componentmoduleutility');
    expect(genHeadingId('#')).toBe('');
  });

  it('isAnchorLink should generate proper heading id', () => {
    expect(isAnchorLink(undefined)).toBe(false);
    const anchor: HTMLAnchorElement = document.createElement('a');
    expect(isAnchorLink(anchor)).toBe(false);
    anchor.setAttribute('href', undefined);
    expect(isAnchorLink(anchor)).toBe(false);
    anchor.setAttribute('href', '');
    expect(isAnchorLink(anchor)).toBe(false);
    anchor.setAttribute('href', 'github.com');
    expect(isAnchorLink(anchor)).toBe(false);
    anchor.setAttribute('href', '#anchor');
    expect(isAnchorLink(anchor)).toBe(true);
  });

  it('rawGithubHref should generate raw github href', () => {
    expect(rawGithubHref('')).toBe('');
    expect(rawGithubHref(undefined)).toBe('');
    expect(rawGithubHref('invalid-href')).toBe('');
    expect(rawGithubHref('http://non-github-url.com')).toBe('');

    const something: string = `https://github.com/Teradata/covalent/blob/`;
    const somethingElse: string = 'https://raw.githubusercontent.com/Teradata/covalent/';
    const path: string = '/docs/CONTRIBUTING.md';
    const developBranch: string = 'develop';
    const masterBranch: string = 'master';
    const anchor: string = '#anchor';

    const DEVELOP_NON_RAW_HREF: string = `${something}${developBranch}${path}`;
    const DEVELOP_RAW_HREF: string = `${somethingElse}${developBranch}${path}`;
    const MASTER_NON_RAW_HREF: string = `${something}${masterBranch}${path}`;
    const MASTER_RAW_HREF: string = `${somethingElse}${masterBranch}${path}`;
    const DEVELOP_NON_RAW_HREF_WITH_ANCHOR: string = `${something}${developBranch}${path}${anchor}`;
    const DEVELOP_RAW_HREF_WITH_ANCHOR: string = `${somethingElse}${developBranch}${path}${anchor}`;

    expect(rawGithubHref(anchor)).toBe('');
    expect(rawGithubHref(DEVELOP_NON_RAW_HREF)).toBe(DEVELOP_RAW_HREF);
    expect(rawGithubHref(DEVELOP_RAW_HREF)).toBe(DEVELOP_RAW_HREF);
    expect(rawGithubHref(MASTER_NON_RAW_HREF)).toBe(MASTER_RAW_HREF);
    expect(rawGithubHref(MASTER_RAW_HREF)).toBe(MASTER_RAW_HREF);
    expect(rawGithubHref(DEVELOP_NON_RAW_HREF_WITH_ANCHOR)).toBe(DEVELOP_RAW_HREF_WITH_ANCHOR);
    expect(rawGithubHref(DEVELOP_RAW_HREF_WITH_ANCHOR)).toBe(DEVELOP_RAW_HREF_WITH_ANCHOR);
  });

  it('isGithubHref should check whether an href is from github.com', () => {
    expect(isGithubHref('')).toBe(false);
    expect(isGithubHref(undefined)).toBe(false);
    expect(isGithubHref('github.com')).toBe(false);
    expect(isGithubHref('subdomain.github.com')).toBe(false);
    expect(isGithubHref('https://raw.githubusercontent.com')).toBe(false);
    expect(isGithubHref('http://github.com')).toBe(true);
    expect(isGithubHref('https://github.com')).toBe(true);
    expect(isGithubHref('https://github.com/something')).toBe(true);
  });

  it('isRawGithubHref should check whether an href is from raw.githubusercontent.com', () => {
    expect(isRawGithubHref('')).toBe(false);
    expect(isRawGithubHref(undefined)).toBe(false);
    expect(isRawGithubHref('raw.githubusercontent.com')).toBe(false);
    expect(isRawGithubHref('https://raw.githubusercontent.com')).toBe(true);
    expect(isRawGithubHref('http://raw.githubusercontent.com')).toBe(true);
    expect(isRawGithubHref('https://raw.githubusercontent.com')).toBe(true);
    expect(isRawGithubHref('https://raw.githubusercontent.com/something')).toBe(true);
  });

  it('scrollToAnchor should scroll to anchor within provided element, or parent if tryParent is true', async () => {
    const fixture: ComponentFixture<JumpToAnchorTestComponent> = TestBed.createComponent(JumpToAnchorTestComponent);

    fixture.detectChanges();
    await fixture.whenRenderingDone();
    await fixture.whenStable();

    const a1: HTMLDivElement = fixture.debugElement.query(By.css('#a1')).nativeElement;

    expect(scrollToAnchor(a1, 'heading 1', false)).toBeTruthy();
    expect(scrollToAnchor(a1, 'heading 1', true)).toBeTruthy();
    expect(scrollToAnchor(a1, 'heading 3', false)).toBeFalsy();
    expect(scrollToAnchor(a1, 'heading 3', true)).toBeTruthy();

    expect(scrollToAnchor(a1, 'heading 5', false)).toBeFalsy();
    expect(scrollToAnchor(a1, 'heading 5', true)).toBeFalsy();

    expect(scrollToAnchor(a1, 'heading1', false)).toBeTruthy();
    expect(scrollToAnchor(a1, 'heading-1', false)).toBeTruthy();
    expect(scrollToAnchor(a1, 'heading_1', false)).toBeTruthy();
    expect(scrollToAnchor(a1, 'heading 1!', false)).toBeTruthy();
  });
});
