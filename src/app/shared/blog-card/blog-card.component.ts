import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent implements OnInit {
  @Input() blog: any;
  constructor() {}

  ngOnInit(): void {}
}
