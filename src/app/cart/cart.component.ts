import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/models/product';
import { AuthService } from '../core/services/auth.service';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Product[];
  currentUser: Object = {};
  constructor(
    private cartService: CartService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.user;
    });
  }
  ngOnInit(): void {}

  getItems() {
    this.items = this.cartService.getCart();
  }
}
