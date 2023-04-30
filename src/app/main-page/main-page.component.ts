import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Blog } from '../core/models/blog';
import { Product } from '../core/models/product';
import { BlogService } from '../core/services/blog.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  products: Product[];
  blogs: Blog[];
  constructor(
    private productService: ProductService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((p) => (this.products = p.slice(0, 4)));

    this.blogService.getBlogs().subscribe((b) => (this.blogs = b.slice(0, 3)));
  }

  buy(pr: any) {
    console.log('Buy :' + pr.name);
  }
}
