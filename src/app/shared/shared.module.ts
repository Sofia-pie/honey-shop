import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ProductCardComponent,
    BlogCardComponent,
    FilterPipe,
    SearchPipe,
  ],
  imports: [CommonModule, RouterLink],
  exports: [ProductCardComponent, BlogCardComponent, FilterPipe, SearchPipe],
})
export class SharedModule {}
