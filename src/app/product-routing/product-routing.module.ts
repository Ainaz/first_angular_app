import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

const routes: Routes = [
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ProductRoutingModule { }
