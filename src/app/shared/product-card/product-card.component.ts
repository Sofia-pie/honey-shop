import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() buyProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}
  onBuy(event: any, product: Product) {
    event.stopPropagation();
    this.buyProduct.emit(product);
  }
}
