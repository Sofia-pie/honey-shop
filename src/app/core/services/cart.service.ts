import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  items: Array<any> = [];

  addToCart(addedItem: Product) {
    this.items.push(addedItem);

    this.saveCart();
  }

  getCart() {
    return (this.items =
      JSON.parse(localStorage.getItem('cart_items') as any) ?? []);
  }

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem('cart_items') as any) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  clearCart(items: any) {
    this.items = [];
    localStorage.removeItem('cart_items');
  }

  removeItem(item: any) {
    const index = this.items.findIndex((o) => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(item: Product): boolean {
    return this.items.findIndex((o) => o.id === item.id) > -1;
  }
}
