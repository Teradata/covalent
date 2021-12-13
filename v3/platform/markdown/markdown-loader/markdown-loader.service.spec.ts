import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TdMarkdownLoaderService } from './markdown-loader.service';
import { CovalentMarkdownModule } from '../markdown.module';

const SAMPLE_HEADING: string = 'Covalent: UI Platform based on Angular-Material';

const RAW_GH_URL: string = 'https://raw.githubusercontent.com/Teradata/covalent/develop/README.md';
const GH_URL: string = 'https://github.com/Teradata/covalent/blob/develop/README.md';
const BRANCH_GH_URL: string = 'https://github.com/Teradata/covalent/blob/master/README.md';
const RAW_GH_BRANCH_URL: string = 'https://raw.githubusercontent.com/Teradata/covalent/master/README.md';
const NON_MARKDOWN_URL: string = 'https://teradata.github.io/covalent/#/';
const UNREACHABLE_URL: string = 'https://github.com/Teradata/covalent/tree/develop/src';

describe('Service: MarkdownLoader', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CovalentMarkdownModule],
      });
    }),
  );

  it(
    'should fetch from a raw github url',
    waitForAsync(
      inject([TdMarkdownLoaderService], async (_markdownLoaderService: TdMarkdownLoaderService) => {
        const markdown: string = await _markdownLoaderService.load(RAW_GH_URL);
        expect(markdown).toContain(SAMPLE_HEADING);
      }),
    ),
  );

  it(
    'should fetch from a non-raw github url',
    waitForAsync(
      inject([TdMarkdownLoaderService], async (_markdownLoaderService: TdMarkdownLoaderService) => {
        const markdown: string = await _markdownLoaderService.load(GH_URL);
        expect(markdown).toContain(SAMPLE_HEADING);
      }),
    ),
  );

  it(
    'should fetch from a raw branch github url',
    waitForAsync(
      inject([TdMarkdownLoaderService], async (_markdownLoaderService: TdMarkdownLoaderService) => {
        const markdown: string = await _markdownLoaderService.load(RAW_GH_BRANCH_URL);
        expect(markdown).toContain(SAMPLE_HEADING);
      }),
    ),
  );

  it(
    'should fetch from a non-raw branch github url',
    waitForAsync(
      inject([TdMarkdownLoaderService], async (_markdownLoaderService: TdMarkdownLoaderService) => {
        const markdown: string = await _markdownLoaderService.load(BRANCH_GH_URL);
        expect(markdown).toContain(SAMPLE_HEADING);
      }),
    ),
  );

  it(
    'should throw error if content response type is not plain or markdown',
    waitForAsync(
      inject([TdMarkdownLoaderService], async (_markdownLoaderService: TdMarkdownLoaderService) => {
        let failed: boolean = false;
        try {
          await _markdownLoaderService.load(NON_MARKDOWN_URL);
        } catch (error) {
          failed = true;
        } finally {
          expect(failed).toBeTruthy();
        }
      }),
    ),
  );

  it(
    'should throw error if url is not reachable',
    waitForAsync(
      inject([TdMarkdownLoaderService], async (_markdownLoaderService: TdMarkdownLoaderService) => {
        let failed: boolean = false;
        try {
          await _markdownLoaderService.load(UNREACHABLE_URL);
        } catch (error) {
          failed = true;
        } finally {
          expect(failed).toBeTruthy();
        }
      }),
    ),
  );

  // TODO: test http params
});
