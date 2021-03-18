import {AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';

const EMAIL_REGEX = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;

/**
 * Email Validator
 * Validator for email
 * message: email must contains letters (a-z), numbers (0-9), dot (.), and underline (_)
 */
export const emailValidator = (): ValidatorFn => {
    return ({ value }: AbstractControl): ValidationErrors | null => {
        return EMAIL_REGEX.test(value) ? null : { email: true };
    };
};
