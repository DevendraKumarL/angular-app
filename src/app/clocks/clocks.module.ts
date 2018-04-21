import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClockManagerComponent } from './clock-manager/clock-manager.component';
import { ClockComponent } from './clock/clock.component';
import { ClockFormComponent } from './clock-form/clock-form.component';
import { ClockRegionsService } from '../services/clocks-service/clock-regions.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ClockRegionsService
  ],
  declarations: [ClockManagerComponent, ClockComponent, ClockFormComponent]
})
export class ClocksModule { }
