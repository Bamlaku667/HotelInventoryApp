import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective {

  constructor(private el : ElementRef) { }
   @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
