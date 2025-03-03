import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

    public product : ProductModel;

    public constructor(private activatedRoute: ActivatedRoute, 
        private productService: ProductService, 
        private router: Router,
        private notifyService: NotifyService) { }

    public async deleteProduct() {
        try
        {
            const sure = confirm("are you sure?");

            if (sure) {
                await this.productService.deleteProduct(this.product.id);
                this.router.navigateByUrl("/products");
            }
        }
        catch (error: any)
        {
            this.notifyService.error(error);
        }
    }

    public async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productService.getProduct(id);
        }
        catch (error) {
            this.notifyService.error(error);
        }
    }
}
