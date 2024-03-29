import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogComponent, BlogItemComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
