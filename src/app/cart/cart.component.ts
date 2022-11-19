import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../core/models/cart';
import { Product } from '../core/models/product';
import { AuthService } from '../core/services/auth.service';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: CartItem[];
  currentUserId: string;
  constructor(
    public cartService: CartService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.cartItems;
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeItem(item);
  }

  decrease(item: CartItem) {
    item.quantity--;
  }

  add(item: CartItem) {
    item.quantity++;
  }
}
