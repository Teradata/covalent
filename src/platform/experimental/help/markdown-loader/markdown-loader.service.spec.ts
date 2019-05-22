import { TestBed } from '@angular/core/testing';

import { MarkdownLoaderService } from './markdown-loader.service';

describe('MarkdownLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkdownLoaderService = TestBed.get(MarkdownLoaderService);
    expect(service).toBeTruthy();
  });
});
