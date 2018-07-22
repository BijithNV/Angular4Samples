import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';
import { ProductsComponent } from '../products.component';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MessagingService } from '../../messaging.service';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  product = new Product();
  displaySuccessMessage = false;
  displayErrorMessage = false;

  constructor(private messageService:MessagingService) { 
  }

  ngOnInit() {    
  }

  saveProduct(form:NgForm){
   this.messageService.add("Product saved successfuly!!!");
  }

}
