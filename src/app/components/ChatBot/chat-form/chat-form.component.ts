import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../service/apiservice.service';
import { IconsComponent } from '../../../ui/icons/icons.component';
import { TextareaAutoresizeDirective } from '../../../directives/textarea-autoresize.directive';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [ReactiveFormsModule, IconsComponent, TextareaAutoresizeDirective],
  templateUrl: './chat-form.component.html',
  styles: ``
})
export class ChatFormComponent {
  @Output() dataSavedEvent = new EventEmitter<void>();

  chatForm: FormGroup;
  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);

  loading: boolean = false;


  constructor() {
    this.chatForm = this.fb.group({
      message: ['']
    });
  }

  onSubmit() {
    this.loading = true;
    const formData = this.chatForm.get('message')?.value;
    this.apiService.sendMessage(`Gemini/sendMessage/1`, formData).subscribe({
      next: (res) => {
        this.chatForm.reset();
        this.dataSavedEvent.emit();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

}
