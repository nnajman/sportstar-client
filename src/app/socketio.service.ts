import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: Socket | undefined;
  
  constructor() { }

  setupSocketConnection() {
    this.socket = io("http://localhost:8080");
  }
}
