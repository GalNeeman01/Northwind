import { Component } from '@angular/core';
import { ProductListComponent } from "../../product-area/product-list/product-list.component";

@Component({
  selector: 'app-products',
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
}
