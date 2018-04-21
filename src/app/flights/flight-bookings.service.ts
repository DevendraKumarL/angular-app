import { Injectable } from '@angular/core';

@Injectable()
export class FlightBookingsService {

  public Bookings : any = [] ;

  constructor() { }

  addNewEmptyBooking() {
    this.Bookings.push({
      flightName: "",
      onwardDate: "",
      returnDate: ""
    });
  }

}
