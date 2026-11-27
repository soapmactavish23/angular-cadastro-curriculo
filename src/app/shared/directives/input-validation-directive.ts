import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputValidation]',
})
export class InputValidationDirective {
  @Input() errorMessage = 'Campo inválido';

  ngOnInit() {
    console.log('OnInit');
  }

  @HostListener('blur')
  onBlur() {
    console.log('onBlur');
  }
}
