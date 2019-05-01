import { TestBed } from '@angular/core/testing';

import { DataBaseSericeService } from './data-base-serice.service';

describe('DataBaseSericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBaseSericeService = TestBed.get(DataBaseSericeService);
    expect(service).toBeTruthy();
  });
});
