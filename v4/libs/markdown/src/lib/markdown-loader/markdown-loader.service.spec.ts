import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TdMarkdownLoaderService } from './markdown-loader.service';
import { CovalentMarkdownModule } from '../markdown.module';

const SAMPLE_HEADING = 'Covalent: UI Platform based on Angular-Material';

const RAW_GH_URL =
  'https://raw.githubusercontent.com/Teradata/covalent/main/README.md';
const GH_URL = 'https://github.com/Teradata/covalent/blob/main/README.md';
const BRANCH_GH_URL =
  'https://github.com/Teradata/covalent/blob/main/README.md';
const RAW_GH_BRANCH_URL =
  'https://raw.githubusercontent.com/Teradata/covalent/main/README.md';
const NON_MARKDOWN_URL = 'https://teradata.github.io/covalent/#/';
const UNREACHABLE_URL = 'https://github.com/Teradata/covalent/tree/main/src';

describe('Service: MarkdownLoader', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CovalentMarkdownModule],
      });
    })
  );

  it(
    'should fetch from a raw github url',
    waitForAsync(
      inject(
        [TdMarkdownLoaderService],
        async (_markdownLoaderService: TdMarkdownLoaderService) => {
          const markdown: string = await _markdownLoaderService.load(
            RAW_GH_URL
          );
          expect(markdown).toContain(SAMPLE_HEADING);
        }
      )
    )
  );

  it(
    'should fetch from a non-raw github url',
    waitForAsync(
      inject(
        [TdMarkdownLoaderService],
        async (_markdownLoaderService: TdMarkdownLoaderService) => {
          const markdown: string = await _markdownLoaderService.load(GH_URL);
          expect(markdown).toContain(SAMPLE_HEADING);
        }
      )
    )
  );

  it(
    'should fetch from a raw branch github url',
    waitForAsync(
      inject(
        [TdMarkdownLoaderService],
        async (_markdownLoaderService: TdMarkdownLoaderService) => {
          const markdown: string = await _markdownLoaderService.load(
            RAW_GH_BRANCH_URL
          );
          expect(markdown).toContain(SAMPLE_HEADING);
        }
      )
    )
  );

  it(
    'should fetch from a non-raw branch github url',
    waitForAsync(
      inject(
        [TdMarkdownLoaderService],
        async (_markdownLoaderService: TdMarkdownLoaderService) => {
          const markdown: string = await _markdownLoaderService.load(
            BRANCH_GH_URL
          );
          expect(markdown).toContain(SAMPLE_HEADING);
        }
      )
    )
  );

  it(
    'should throw error if content response type is not plain or markdown',
    waitForAsync(
      inject(
        [TdMarkdownLoaderService],
        async (_markdownLoaderService: TdMarkdownLoaderService) => {
          let failed = false;
          try {
            await _markdownLoaderService.load(NON_MARKDOWN_URL);
          } catch (error) {
            failed = true;
          } finally {
            expect(failed).toBeTruthy();
          }
        }
      )
    )
  );

  it(
    'should throw error if url is not reachable',
    waitForAsync(
      inject(
        [TdMarkdownLoaderService],
        async (_markdownLoaderService: TdMarkdownLoaderService) => {
          let failed = false;
          try {
            await _markdownLoaderService.load(UNREACHABLE_URL);
          } catch (error) {
            failed = true;
          } finally {
            expect(failed).toBeTruthy();
          }
        }
      )
    )
  );

  // TODO: test http params
});
