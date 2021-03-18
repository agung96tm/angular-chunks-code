/**
 * This component used to handle error messages for input field (formControl)
 * https://stackoverflow.com/questions/52771445/best-way-to-show-error-messages-for-angular-reactive-forms-one-formcontrol-mult
 */

import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-errors',
  template: `
    <div *ngIf="errors?.length > 0">
      <div *ngIf="displayOnlyFirst; else showAll">{{ errors[0] }}</div>

      <ng-template #showAll>
        <div *ngFor="let error of errors">
          {{ error }}
        </div>
      </ng-template>
    </div>
  `,
  styles: [``],
})
export class FormFieldErrorsComponent {
  /**
   * The form control you want to check have errors on it.
   */
  @Input() control: FormControl;

  /**
   * If `true`, only first error message will display.
   */
  @Input() displayOnlyFirst = false;


  errorMessages: any[] = [];

  /**
   * errors with specific validator need to be defined how to display.
   */
  messages = {
    required: (params) => `This field is required`,
    email: (params) => `This email must be a valid email address`,
  };

  get errors(): any {
    if (!this.control) { return []; }

    if (this.control.errors) {
      this.errorMessages = [];
      Object.keys(this.control.errors).map(error => {
        if (this.control.touched || this.control.dirty) {
          this.errorMessages.push(
              this.messages[error](this.control.errors[error])
          );
        }
      });
      return this.errorMessages;
    } else {
      return [];
    }
  }
}
