import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { storeAPIEndpoint } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${storeAPIEndpoint}/products`);
  }

  getProductById(id): Observable<Product> {
    return this.http.get<Product>(`${storeAPIEndpoint}/products/${id}`);
  }
}
