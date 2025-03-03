import { Component } from '@angular/core';
import { ProductListComponent } from "../../product-area/product-list/product-list.component";
import { TotalProductsComponent } from "../../product-area/total-products/total-products.component";

@Component({
  selector: 'app-products',
  imports: [ProductListComponent, TotalProductsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
}
