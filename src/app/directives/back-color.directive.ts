import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackColor]'
})
export class BackColorDirective {

  constructor(
    private eleRef: ElementRef
  ) {
    this.eleRef.nativeElement.style.color = 'green';
  }

}
