import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../messaging.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {

  message:string = "";
  constructor(public messagingService:MessagingService) { }

  ngOnInit() {
    this.message = this.messagingService.messages[0];
  }

}
