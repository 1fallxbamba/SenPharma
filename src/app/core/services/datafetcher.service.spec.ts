import { TestBed } from '@angular/core/testing';

import { DatafetcherService } from './datafetcher.service';

describe('DatafetcherService', () => {
  let service: DatafetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
