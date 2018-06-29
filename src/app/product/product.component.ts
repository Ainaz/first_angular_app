import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NightModeService } from '../night-mode.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  nightModeSwitch: boolean;

  searchStr = '';

  constructor(
    private productService: ProductService,
    private nightModeService: NightModeService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  productNameReturn(str) {
    this.searchStr = str;
  }

  getNightMode(): void {
    this.nightModeService.toggleNightMode();
  }
}
