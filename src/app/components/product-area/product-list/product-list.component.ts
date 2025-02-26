import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[] = [];

  constructor(private productService: ProductService, private router : Router) { }

  public async ngOnInit() {
    try {
      this.products = await this.productService.getAllProducts();
    }
    catch (error) {
      console.log(error);
    }
  }

  public displayDetails(id: number) : void {
    this.router.navigateByUrl("/product-details/" + id);
  }
}
