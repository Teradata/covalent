import { TestBed } from '@angular/core/testing';

import { DocSearchService } from './doc-search.service';

describe('DocSearchService', () => {
  let service: DocSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
