import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/models/product';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], search: string): void {}
}
