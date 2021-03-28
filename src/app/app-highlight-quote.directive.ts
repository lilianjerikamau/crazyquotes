import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appAppHighlightQuote]'
})
export class AppHighlightQuoteDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.color.textDecoration = 'red';

  }
}