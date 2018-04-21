import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { ClocksModule } from './clocks/clocks.module';
import { QuestionsModule } from './questions/questions.module';
import { ProductsModule } from './products/products.module';
import { FlightsModule } from './flights/flights.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClocksModule,
    QuestionsModule,
    ProductsModule,
    FlightsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
