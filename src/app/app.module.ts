import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HoverDirective } from './hover.directive';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'catalog', component: ProductComponent},
  {path: 'product/:id', loadChildren: './product-routing#ProductRoutingModule'},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    ContactsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
