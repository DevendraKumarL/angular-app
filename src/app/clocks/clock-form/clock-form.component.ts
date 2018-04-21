import { Component, OnInit } from '@angular/core';
import { ClockRegionsService } from './../../services/clocks-service/clock-regions.service';

@Component({
  selector: 'clock-form',
  templateUrl: './clock-form.component.html',
  styleUrls: ['./clock-form.component.css']
})
export class ClockFormComponent {

  public region : string ;
  public hours : number ;
  public minutes : number ;

  constructor(public clockRegionsService : ClockRegionsService) {}

  addClock() {
    this.clockRegionsService.addClock(
      this.region,Number(this.hours), Number(this.minutes)
    );
    this.region = "";
    this.hours = null;
    this.minutes = null;
  }
  
}
