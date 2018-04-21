import { Injectable } from '@angular/core';

@Injectable()
export class ClockRegionsService {

  public clocks = [];

  addClock(region : string, hours : number, minutes : number) {
    this.clocks.push({
      region: region,
      hours: hours,
      minutes: minutes
    });
  }

}
