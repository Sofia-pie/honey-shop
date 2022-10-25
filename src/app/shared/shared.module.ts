import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

@NgModule({
  declarations: [ProductCardComponent, BlogCardComponent],
  imports: [CommonModule],
  exports: [ProductCardComponent, BlogCardComponent],
})
export class SharedModule {}
