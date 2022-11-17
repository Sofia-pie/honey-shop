import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../core/models/product';
import { CartService } from '../core/services/cart.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  searchValue: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  buy(event: any) {
    console.log('Buy ' + event);
  }

  filter(event: any) {
    this.searchValue = event.target.value;
  }

  addItemToCart(pr: Product) {
    console.log(pr);
    this.cartService.addToCart(pr);
  }
}
