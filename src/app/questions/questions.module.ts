import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Questions2Service } from './../services/questions-service/questions2.service';

import { Questions1Component } from './questions1/questions1.component';
import { Option1Component } from './option1/option1.component';
import { Questions2Component } from './questions2/questions2.component';
import { Option2Component } from './option2/option2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    Questions2Service
  ],
  declarations: [Questions1Component, Option1Component, Questions2Component, Option2Component]
})
export class QuestionsModule { }
