import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private http = inject(HttpClient);

  public async getAllProducts() : Promise<ProductModel[]> {
      const products$ = this.http.get<ProductModel[]>(environment.productsUrl);
      const products = firstValueFrom(products$);

      return products;
  }

  public async getProduct(id: number) : Promise<ProductModel> {
    const product$ = this.http.get<ProductModel>(environment.productsUrl + id);
    const product = await firstValueFrom(product$);

    return product;
  }

  public async addProduct(product: ProductModel) : Promise<void> {
    const dbProduct$ = this.http.post(environment.productsUrl, ProductModel.toFormData(product));
    await firstValueFrom(dbProduct$);
  }
}
