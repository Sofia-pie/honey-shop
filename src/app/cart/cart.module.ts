import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';

@NgModule({
  declarations: [CartComponent, CartProductComponent],
  imports: [CommonModule],
  exports: [CartComponent],
})
export class CartModule {}
