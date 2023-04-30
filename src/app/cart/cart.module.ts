import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, CartProductComponent],
  imports: [CommonModule, RouterLink, FormsModule],
  exports: [CartComponent],
})
export class CartModule {}
