import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000/chat';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  constructor() { }

  initSocket(): void{
    this.socket = io(SERVER_URL);
  }

  joinroom(selroom):void{
    this.socket.emit("joinRoom",selroom);
  }

  leaveroom(selroom):void{
    this.socket.emit("leaveRoom",selroom);
  }

  joined(next){
    this.socket.on('joined', res=>next(res));
  }
  createroom(newroom){
    this.socket.emit('newroom',newroom);
  }
  sendMessage(message: string): void{
    this.socket.emit('message', message);
  }
  getMessage(next){
    this.socket.on('message', (message)=>next(message));
  }
}
