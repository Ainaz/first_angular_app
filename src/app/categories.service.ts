import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-categories';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Observable <Category[]> {
    return of(CATEGORIES);
  }
}
