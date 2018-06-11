import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ProductserviceService {
selectedProduct:Product;
productList:Product[];


  constructor() { }

  getProductList(){}

}
