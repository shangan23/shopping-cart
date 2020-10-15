import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productItems: Product[];
  loading:boolean;
  constructor(private products: ProductService) { 
    this.loading = true;
  }

  ngOnInit(): void {
    //this.productItems = 
    this.products.getProducts()
    .subscribe(data => {
      this.loading = false;
      this.productItems = data;
    })
  }
}
