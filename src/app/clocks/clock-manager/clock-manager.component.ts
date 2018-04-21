import { Component, OnInit } from '@angular/core';
import { ClockRegionsService } from './../../services/clocks-service/clock-regions.service';

@Component({
  selector: 'clock-manager',
  templateUrl: './clock-manager.component.html',
  styleUrls: ['./clock-manager.component.css']
})
export class ClockManagerComponent {
  
  constructor(public clockRegionsService : ClockRegionsService) {}

  deleteClock(clock) {
    let targetIndex = this.clockRegionsService.clocks.indexOf(clock);
    this.clockRegionsService.clocks.splice(targetIndex, 1);
  }

}
