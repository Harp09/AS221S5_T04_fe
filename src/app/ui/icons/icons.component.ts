import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styles: ``
})
export class IconsComponent {

  @Input() name!: string;

  icons: { [key: string]: string } = {
    loadingSpinner: `
      <svg class="w-6 h-6 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path class="stroke-blue-500" d="M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path class="stroke-sky-300" d="M16 8.00025L18.3642 5.63611M5.63629 18.364L8.00025 16M8.00022 8.00025L5.63608 5.63611M18.364 18.364L16 16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
    `,

    send: `
      <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path class="fill-cyan-500 opacity-20" d="M9.50929 4.22989L18.0693 8.50989C21.9093 10.4299 21.9093 13.5699 18.0693 15.4899L9.50929 19.7699C3.74929 22.6499 1.39929 20.2899 4.27929 14.5399L5.14929 12.8099C5.39929 12.2999 5.39929 11.7099 5.14929 11.1999L4.27929 9.45989C1.39929 3.70989 3.75929 1.34989 9.50929 4.22989Z"></path>
          <path class="fill-cyan-500" d="M14.8395 12.75H9.43945C9.02945 12.75 8.68945 12.41 8.68945 12C8.68945 11.59 9.02945 11.25 9.43945 11.25H14.8395C15.2495 11.25 15.5895 11.59 15.5895 12C15.5895 12.41 15.2495 12.75 14.8395 12.75Z"></path>
        </g>
      </svg>
    `,
    dotsVertical: `
      <svg class="w-3 h-3 fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 4 15">
        <path
          d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    `,

    dotsHorizontal: `
      <svg class="w-3 h-3 fill-white rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 4 15">
        <path
          d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    `,

    delete:`
      <svg class="w-5 h-5 fill-neutral-700 group-hover:fill-neutral-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z"></path>
          <path opacity="0.5" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z"></path>
        </g>
      /svg>
    `,

    restore: `
      <svg class="w-4 h-4 fill-neutral-700 group-hover:fill-neutral-900" viewBox="0 0 24 24" id="meteor-icon-kit__solid-undo" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62132 7L7.06066 8.43934C7.64645 9.02513 7.64645 9.97487 7.06066 10.5607C6.47487 11.1464 5.52513 11.1464 4.93934 10.5607L0.93934 6.56066C0.35355 5.97487 0.35355 5.02513 0.93934 4.43934L4.93934 0.43934C5.52513 -0.146447 6.47487 -0.146447 7.06066 0.43934C7.64645 1.02513 7.64645 1.97487 7.06066 2.56066L5.62132 4H10C15.5228 4 20 8.47715 20 14C20 19.5228 15.5228 24 10 24C4.47715 24 0 19.5228 0 14C0 13.1716 0.67157 12.5 1.5 12.5C2.32843 12.5 3 13.1716 3 14C3 17.866 6.13401 21 10 21C13.866 21 17 17.866 17 14C17 10.134 13.866 7 10 7H5.62132z"></path>
        </g>
      </svg>
    `
  }

  sanitizer = inject(DomSanitizer);

  getIcon(name: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icons[name] || '');
  }
}
