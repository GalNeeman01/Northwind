import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
    public product : ProductModel;

    @ViewChild("productImage")
    public productImageRef: ElementRef<HTMLInputElement>;

    private productService = inject(ProductService);
    private activatedRoute = inject(ActivatedRoute);
    private notifyService = inject(NotifyService);
    private router = inject(Router);

    public async ngOnInit() {
        try
        {
            const id = this.activatedRoute.snapshot.params["id"];
            this.product = await this.productService.getProduct(id);
        }
        catch (error: any)
        {
            this.notifyService.error(error);
        }
    }

    public async send() {
        try {
            console.log("test");
            this.product.image = this.productImageRef.nativeElement.files[0];
            await this.productService.updateProduct(this.product);
            console.log("updated product");
            this.router.navigateByUrl("/products");
        }
        catch (error: any)
        {
            this.notifyService.error(error);
        }
    }
}
