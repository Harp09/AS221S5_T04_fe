import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ChatModel } from '../../../model/chatModel';
import { ApiService } from '../../../service/apiservice.service';
import { IconsComponent } from '../../../ui/icons/icons.component';

@Component({
  selector: 'app-inactive-chat',
  standalone: true,
  imports: [IconsComponent],
  templateUrl: './inactive-chat.component.html',
  styles: ``
})
export class InactiveChatComponent {

  @Input() inactiveChat: ChatModel[] = [];
  @Output() restoreItemEvent = new EventEmitter<void>();

  private apiService = inject(ApiService);

  restoreItem(item:ChatModel): void {
    this.apiService.changeStatus('Gemini/changeStatus/A', item.id).subscribe((res) => {
      this.restoreItemEvent.emit();
      console.log(res);
    });
  }
}
