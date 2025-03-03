import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { NotifyService } from '../../../services/notify.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-top-three',
  imports: [CurrencyPipe],
  templateUrl: './top-three.component.html',
  styleUrl: './top-three.component.css'
})
export class TopThreeComponent {
    public products: ProductModel[] = [];

    private productService = inject(ProductService);
    private router = inject(Router);
    private notifyService = inject(NotifyService);

    public async ngOnInit() {
        try {
          this.products = await this.productService.getThreeProducts();
        }
        catch (error) {
            this.notifyService.error(error);
        }
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

    public displayDetails(id: number) : void {
        this.router.navigateByUrl("/product-details/" + id);
      }
}
