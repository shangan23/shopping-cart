import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SignalingService } from 'src/app/services/signaling.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: []
})
export class ProductDetailsComponent implements OnInit {
  id;
  product: Product;
  loading: boolean;
  constructor(
    private route: ActivatedRoute, 
    private product_: ProductService, 
    private signal: SignalingService){
    this.loading = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = +param.get('id')
      this.product_.getProductById(this.id)
        .subscribe(data => {
          this.loading = false;
          this.product = data;
          this.signal.sendProductTitle(data.title)
        })
    })
  }

  addToCart(){
    console.log(this.product)
    this.signal.sendCartItem(this.product)
  }

}
