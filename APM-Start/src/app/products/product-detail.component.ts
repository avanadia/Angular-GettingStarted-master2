import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private _route: ActivatedRoute, 
              private _router: Router) { }           
              
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    /*
    * The above '+' converts a string to a number (javascript shortcut)
    * it also stores the id as a variable
    * */
    this.pageTitle += ` :${id}`;
    this.product = {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    };
  }

  onBack(): void {
    // want to navigate back to productList component
    this._router.navigate(['/products']);
  }

}
