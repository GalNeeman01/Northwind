import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  public product = new ProductModel();

  @ViewChild("productImage")
  public productImageRef : ElementRef<HTMLInputElement>;

  private productService = inject(ProductService);
  private router = inject(Router);

  send() : void {
    try {
      this.product.image = this.productImageRef.nativeElement.files[0];
      this.productService.addProduct(this.product);
      this.router.navigateByUrl('/products');
    } 
    catch (error)
    {
      console.log(error);
    }
  }
}
