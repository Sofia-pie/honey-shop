import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Product[];
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  getItems() {
    this.items = this.cartService.getCart();
  }
}
