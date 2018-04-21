import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'product-editing',
  templateUrl: './product-editing.component.html',
  styleUrls: ['./product-editing.component.css']
})
export class ProductEditingComponent {
  
  public productFormGroup : FormGroup ;

  constructor(public productsService : ProductsService, public formBuilder : FormBuilder) {
    this.productFormGroup = this.formBuilder.group({
      productName: ["", Validators.compose([
        Validators.required, Validators.minLength(3)
      ])],

      productPrice: [1, Validators.compose([
        Validators.required, Validators.min(1)
      ])],

      productQty: [1, Validators.compose([
        Validators.required, Validators.min(1), Validators.max(1000)
      ])]
    });
  }

  submitProductData() {
    this.productsService.products.push({
      name: this.productFormGroup.controls.productName.value,
      price: Number(this.productFormGroup.controls.productPrice.value),
      productQty: Number(this.productFormGroup.controls.productQty.value)
    });

    this.productFormGroup.setValue({
      productName: "",
      productPrice: 1,
      productQty: 1
    });
  }

}
