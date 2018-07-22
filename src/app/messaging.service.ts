import { Injectable } from '@angular/core';

@Injectable()


export class MessagingService {

  public messages:string[] = [];
  constructor() { }

  add(message:string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
