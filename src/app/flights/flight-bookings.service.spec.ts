import { TestBed, inject } from '@angular/core/testing';

import { FlightBookingsService } from './flight-bookings.service';

describe('FlightBookingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightBookingsService]
    });
  });

  it('should be created', inject([FlightBookingsService], (service: FlightBookingsService) => {
    expect(service).toBeTruthy();
  }));
});
