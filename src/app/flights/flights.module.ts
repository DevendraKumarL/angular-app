import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsBookingComponent } from './flights-booking/flights-booking.component';
import { FlightBookingsService } from './flight-bookings.service';
import { UtilitiesModule } from '../utilities/utilities.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule,
    FormsModule
  ],
  providers: [
    FlightBookingsService
  ],
  declarations: [FlightsBookingComponent]
})
export class FlightsModule { }
