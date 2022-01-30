import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  categories: Category[] = [
    new Category(1, 'Electronic'),
    new Category(2, 'Textile'),
    new Category(3, 'Cosmetic')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
