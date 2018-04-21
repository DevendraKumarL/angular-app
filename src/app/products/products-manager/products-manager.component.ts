import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from '../products.service';

@Component({
  selector: 'products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.css']
})
export class ProductsManagerComponent {
  
  constructor(public productsService : ProductsService) {}

}
