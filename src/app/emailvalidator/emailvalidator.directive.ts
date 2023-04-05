import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hinvEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
       multi: true,
    },
  ],
})
export class EmailvalidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors|null {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const value = control.value;
      return emailPattern.test(value)?{validEmail: true} : {emailInvalid : true}   
 }
}
