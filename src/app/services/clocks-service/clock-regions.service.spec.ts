import { TestBed, inject } from '@angular/core/testing';

import { ClockRegionsService } from './clock-regions.service';

describe('ClockRegionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClockRegionsService]
    });
  });

  it('should be created', inject([ClockRegionsService], (service: ClockRegionsService) => {
    expect(service).toBeTruthy();
  }));
});
