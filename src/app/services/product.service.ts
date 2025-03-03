import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { ProductStore } from '../storage/product-store';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private http = inject(HttpClient);
  private productStore = inject(ProductStore);

    public async getThreeProducts()
    {
        const products$ = this.http.get<ProductModel[]>(environment.topThreeUrl);
        const products = await firstValueFrom(products$);

        return products;
    }

    public async getAllProducts() : Promise<ProductModel[]> {
    // If we have products in the global state, return them
        if (this.productStore.products().length > 0) return this.productStore.products();

        const products$ = this.http.get<ProductModel[]>(environment.productsUrl);
        const products = await firstValueFrom(products$);

        // Init products in global store
        this.productStore.initProducts(products);

        return products;
    }

  public async getProduct(id: number) : Promise<ProductModel> {
    let product = this.productStore.products().find(p => p.id === id);

    if (product)
        return product;

    const product$ = this.http.get<ProductModel>(environment.productsUrl + id);
    product = await firstValueFrom(product$);

    return product;
  }

  public async addProduct(product: ProductModel) : Promise<void> {
    const dbProduct$ = this.http.post<ProductModel>(environment.productsUrl, ProductModel.toFormData(product));
    const dbProduct = await firstValueFrom(dbProduct$);
    this.productStore.addProduct(dbProduct);
  }

  public async deleteProduct(id: number) {
    const deletedProduct$ = this.http.delete<ProductModel>(environment.productsUrl + id);
    await firstValueFrom(deletedProduct$);
    this.productStore.deleteProduct(id);
  }

  public async updateProduct (product: ProductModel) {
    const dbProduct$ = this.http.put<ProductModel>(environment.productsUrl + product.id, ProductModel.toFormData(product));

    const dbProduct = await firstValueFrom(dbProduct$);

    this.productStore.updateProduct(dbProduct);

  }
}
