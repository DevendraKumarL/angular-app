import { Component, OnInit } from '@angular/core';
import { FlightBookingsService } from '../flight-bookings.service';

@Component({
  selector: 'flights-booking',
  templateUrl: './flights-booking.component.html',
  styleUrls: ['./flights-booking.component.css']
})
export class FlightsBookingComponent {

  constructor(public flightBookingsService : FlightBookingsService) {}

}
