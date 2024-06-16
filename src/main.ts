import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ChatPageComponent } from './app/page/chat-page/chat-page.component';

bootstrapApplication(ChatPageComponent, appConfig)
  .catch((err) => console.error(err));
