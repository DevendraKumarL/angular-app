import { ClockManagerComponent } from "./clocks/clock-manager/clock-manager.component";
import { Questions1Component } from "./questions/questions1/questions1.component";
import { Questions2Component } from "./questions/questions2/questions2.component";
import { ProductsManagerComponent } from "./products/products-manager/products-manager.component";
import { FlightsBookingComponent } from "./flights/flights-booking/flights-booking.component";

export let routes = [
    {
        path: "clock",
        component: ClockManagerComponent
    },
    {
        path: "questions1",
        component: Questions1Component
    },
    {
        path: "questions2",
        component: Questions2Component
    },
    {
        path: "products",
        component: ProductsManagerComponent
    },
    {
        path: "flights",
        component: FlightsBookingComponent
    }
];