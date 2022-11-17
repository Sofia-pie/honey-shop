import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  stream$: Observable<any>;
  ngOnInit(): void {
    this.stream$ = this.route.paramMap;
  }
}
