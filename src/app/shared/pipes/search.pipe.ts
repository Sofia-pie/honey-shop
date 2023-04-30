import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/models/product';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (!search || search.length === 0) return products;

    return products.filter((pr) =>
      pr.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
