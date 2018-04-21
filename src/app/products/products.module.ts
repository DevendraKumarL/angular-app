import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductComponent } from './product/product.component';
import { ProductsManagerComponent } from './products-manager/products-manager.component';
import { ProductEditingComponent } from './product-editing/product-editing.component';
import { ProductsService } from './products.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService
  ],
  declarations: [ProductComponent, ProductsManagerComponent, ProductEditingComponent]
})
export class ProductsModule { }
