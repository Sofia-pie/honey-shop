import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteFromCart: EventEmitter<Product> = new EventEmitter();
  quantity: number;
  constructor() {}

  ngOnInit(): void {}

  delete(product: Product) {
    this.deleteFromCart.emit(product);
  }
}
