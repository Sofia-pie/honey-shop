import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  userId: number | string;
  private apiUrl = ' http://localhost:8080/api/cart';
  constructor(private http: HttpClient) {}

  addItem(cartItem: CartItem) {
    let found: boolean = false;
    this.cartItems = this.cartItems.map((ci) => {
      if (ci.product?._id == cartItem.product?._id) {
        console.log(ci.product?._id);
        ci.quantity++;
        found = true;
      }
      this.saveCart();
      return ci;
    });

    if (!found) {
      this.cartItems.push(cartItem);
      this.saveCart();
    }
  }

  saveCart() {
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }
  removeItem(item: CartItem) {
    const index = this.cartItems.indexOf(item, 0);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCart();
    }
  }
  removeOne(item: CartItem) {
    const index = this.cartItems.indexOf(item, 0);
    if (index > -1) {
      this.cartItems[index].quantity--;
      this.saveCart();
    }
  }

  emptyCart() {
    this.cartItems = [];
  }

  getTotalValue(): number {
    let sum = this.cartItems.reduce((a, b) => {
      a = a + b.product?.price * b.quantity;
      return a;
    }, 0);
    return sum;
  }

  loadCart(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cart-items')!) ?? [];
  }

  isCartValid(): boolean {
    if (
      this.cartItems.find(
        (cartitem) => cartitem.quantity == null || cartitem.quantity <= 0
      ) === undefined
    )
      return true;
    return false;
  }
}
