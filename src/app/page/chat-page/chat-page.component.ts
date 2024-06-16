import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/apiservice.service';
import { ShowChatComponent } from '../../components/ChatBot/show-chat/show-chat.component';
import { ChatModel } from '../../model/chatModel';
import { ChatFormComponent } from '../../components/ChatBot/chat-form/chat-form.component';
import { InactiveChatComponent } from '../../components/ChatBot/inactive-chat/inactive-chat.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [ShowChatComponent, ChatFormComponent, InactiveChatComponent],
  templateUrl: './chat-page.component.html',
  styles: ``
})
export class ChatPageComponent {
  private apiService = inject(ApiService);

  chat: ChatModel[] = [];
  inactiveChat: ChatModel[] = [];

  ngOnInit() {
    this.fetchData();
    this.fetchDataInactive();
  }

  fetchData() {
    this.apiService.getData('Gemini/A/1').subscribe((res) => {
      this.chat = res;
    });
  }

  fetchDataInactive() {
    this.apiService.getData('Gemini/I/1').subscribe((res) => {
      this.inactiveChat = res;
    });
  }

  onDataRefresh() {
    this.fetchData();
    this.fetchDataInactive();
  }

}
