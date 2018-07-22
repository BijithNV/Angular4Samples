import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';
import { ProductsComponent } from '../products.component';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MessagingService } from '../../messaging.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  product = new Product();
  displaySuccessMessage = false;
  displayErrorMessage = false;

  constructor(private messageService:MessagingService,
  private route:ActivatedRoute,
  private router:Router
  ) { 
  }

  ngOnInit() {    
  }

  saveProduct(form:NgForm){
   this.messageService.add("Product saved successfuly!!!");
   this.router.navigate(['/heroes']);
  }

}
