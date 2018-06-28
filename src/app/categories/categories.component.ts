import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  searchStr = '';

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

  categoryNameReturn(str) {
    this.searchStr = str;
  }

}
