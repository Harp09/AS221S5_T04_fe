import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';;
import { ChatModel } from '../../../model/chatModel';
import { ApiService } from '../../../service/apiservice.service';
import { IconsComponent } from '../../../ui/icons/icons.component';
import { TextareaAutoresizeDirective } from '../../../directives/textarea-autoresize.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-chat',
  standalone: true,
  imports: [IconsComponent, TextareaAutoresizeDirective, FormsModule],
  templateUrl: './show-chat.component.html',
  styles: ``
})
export class ShowChatComponent {
  @Input() chat: ChatModel[] = [];
  @Output() deleteItemEvent = new EventEmitter<void>();

  private apiService = inject(ApiService);

  deleteItem(id: number): void {
    this.apiService.changeStatus('Gemini/changeStatus/I', id).subscribe((res) => {
      this.deleteItemEvent.emit();
      console.log(res);
    });
  }

  updateItem(item: ChatModel): void {
    const id = item.id;
    const newMessage = item.message;
    console.log(newMessage);

    this.apiService.updateMessage(`Gemini/update/1/${id}`, newMessage).subscribe({
      next: (res) => {
        console.log(res);
        this.deleteItemEvent.emit();
      },
    });
  }

  formatResponse(response: string): string {
    return response.replace(/(?:\r\n|\r|\n)/g, '<br>');
  };

}
