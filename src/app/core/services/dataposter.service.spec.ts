import { TestBed } from '@angular/core/testing';

import { DataposterService } from './dataposter.service';

describe('DataposterService', () => {
  let service: DataposterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataposterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
