import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  public product : any ;

  @Input()
  public productQty : number ;

  @Output()
  public productQtyChange = new EventEmitter<number>();

  ngOnInit() {
    if (this.productQty === undefined || this.productQty === NaN) {
      this.productQty = 0;
    }
  }

  decrementProductQty() {
    if (this.productQty > 0) {
      this.productQty--;
      this.productQtyChange.emit(this.productQty);
    }
  }

  incrementProductQty() {
    this.productQty++;
    this.productQtyChange.emit(this.productQty);    
  }

}
