import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  products = [
    { id: 1, name: 'Мед Липовий', price: 234 },
    { id: 2, name: 'Мед', price: 234 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
