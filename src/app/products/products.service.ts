import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  public products : any = [] ;

  public offset : number = 0 ;
  public noOfProducts : number = 6 ;

  public isLoading : boolean ;

  constructor(public client : HttpClient) {
    this.fetchProducts() ;
  }

  fetchProducts() {
    let observableObject = this.client.get(
      `http://localhost:5000/api/products/${this.offset}/${this.noOfProducts}`) ;
    this.isLoading = true;

    observableObject.subscribe( (productsResponse : any) => {
      productsResponse.forEach(product => {
        this.products.push(product);
        this.isLoading = false;
      });
    });
  }

  fetchMoreProducts() {
    this.offset += this.noOfProducts;
    this.fetchProducts();
  }

}
