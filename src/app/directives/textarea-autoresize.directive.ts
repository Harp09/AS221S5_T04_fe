import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextareaAutoresize]',
  standalone: true
})
export class TextareaAutoresizeDirective {

  @HostListener(':input')
  onInput() {
    this.resize();
  }

  ngOnInit() {
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.resize());
    }
  }


  constructor(private elementRef: ElementRef) { }

  resize() {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }

}
