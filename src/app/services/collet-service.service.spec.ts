import { TestBed } from '@angular/core/testing';

import { ColletServiceService } from './collet-service.service';

describe('ColletServiceService', () => {
  let service: ColletServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColletServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
