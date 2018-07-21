import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductListComponent } from '../product-list/product-list.component';
@Injectable()
export class ProductserviceService {
selectedProduct:Product;
productList:Product[];

  constructor() { }

  getProductList(){

    this.productList = [
      {name:"Mango pickle",code:"mgp001", description:"", category:"Pickle", purchaseRate:100, salesRate:150},
      {name:"Lemon pickle",code:"mgp002", description:"", category:"Pickle", purchaseRate:95, salesRate:110},
      {name:"Fish pickle",code:"mgp003", description:"", category:"Pickle", purchaseRate:115, salesRate:130},
      {name:"Garlic pickle",code:"mgp004", description:"", category:"Pickle", purchaseRate:85, salesRate:100},
    ];
    
    return this.productList;
  }
  
  

  
}
