import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socket;
  messagecontent:string="";
  messages:string[]=[];
  constructor(private socketservice:SocketService) { }

  ngOnInit(): void {
    this.socketservice.initSocket();
    this.socketservice.getMessage((m)=>{this.messages.push(m)});
  }

  chat(){
    if(this.messagecontent){
      this.socketservice.sendMessage(this.messagecontent);
      this.messagecontent = "";
    } else {
      console.log('no message');
    }
  }
}
