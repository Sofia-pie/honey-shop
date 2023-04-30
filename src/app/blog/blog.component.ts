import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../core/models/blog';
import { BlogService } from '../core/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs$: Observable<Blog[]>;
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogService.getBlogs();
  }
}
