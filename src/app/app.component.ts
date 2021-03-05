import { Component, OnInit } from '@angular/core';

import { SocketioService } from './services/socketio.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sportstar-client-user';

  constructor(public shoppingCartService: ShoppingCartService, private socketService: SocketioService) { }
  
  ngOnInit() {
    this.socketService.setupSocketConnection();
  }
}
