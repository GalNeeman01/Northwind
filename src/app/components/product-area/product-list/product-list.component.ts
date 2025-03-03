import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[] = [];

  constructor(private productService: ProductService, 
            private router : Router,
            private notifyService: NotifyService) { }

  public async ngOnInit() {
    try {
      this.products = await this.productService.getAllProducts();
    }
    catch (error) {
        this.notifyService.error(error);
    }
  }

  public displayDetails(id: number) : void {
    this.router.navigateByUrl("/product-details/" + id);
  }

  public async deleteProduct(id: number) {
    try {
        const sure = confirm("are you sure?");

        if (sure)
        {
            await this.productService.deleteProduct(id);
            this.products = this.products.filter(p => p.id != id);
        }
    }
    catch (error: any)
    {
        this.notifyService.error(error);
    }
  }
}
