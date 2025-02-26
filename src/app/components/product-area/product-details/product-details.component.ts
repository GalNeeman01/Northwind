import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  public product : ProductModel;

  public constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  public async ngOnInit() {
    try {
      const id = +this.activatedRoute.snapshot.params["id"];
      this.product = await this.productService.getProduct(id);
    }
    catch (error) {
      console.log(error);
    }
  }
}
