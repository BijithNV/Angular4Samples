import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Product} from '../shared/product';
import { ProductsComponent } from '../products.component';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MessagingService } from '../../messaging.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  product = new Product();
  displaySuccessMessage = false;
  displayErrorMessage = false;
   @Output() message = new EventEmitter<string>();

  constructor(private messageService:MessagingService) {}
  
  ngOnInit() {}

  saveProduct(form:NgForm){
   this.message.emit("Product saved successfuly!!!");
  }

}
