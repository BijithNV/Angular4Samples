import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../messaging.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  messages:string[]=[];

  constructor(public messagingService:MessagingService) { debugger }

  ngOnInit() {
    debugger
    this.messages = this.messagingService.messages;
  }

}
