import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';
import { ProductsComponent } from '../products.component';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  
  product = new Product();
  displaySuccessMessage = false;
  displayErrorMessage = false;

  constructor() { 
  }

  ngOnInit() {    
  }

  saveProduct(form:NgForm){
  }

}
