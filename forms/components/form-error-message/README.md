Form Error Message
=============================

Component provide how to show error (messages) formControl cause by validators.


## Control

__control__: This attribute lets you specify formControl you want to show error messages.


## Display Only First
__displayOnlyFirst__: This attribute used as indicator how you show the messages. default is `false`

| Value          | Details                                                                      |
|----------------|-------------------------------------------------|
| true           | all invalid error message will showed           |
| false          | only first invalid error message will showed    |


## Usage:

```typescript
@Component({
    selector: 'app-root',
    template: `
    <div>
      <form [formGroup]="form" (submit)="onSubmit()">
        <div>
          <input type="text" [formControl]="email">
          <app-form-field-errors 
            [control]="email" 
            [displayOnlyFirst]="true"
          >
          </app-form-field-errors>
        </div>

        <div>
          <input type="password" [formControl]="password">
          <app-form-field-errors [control]="password">
          </app-form-field-errors>
        </div>

        <div>
          <button type="submit" [disabled]="!form.valid">Submit</button>
        </div>
      </form>
    </div>
  `,
    styles: [``],
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.min(5)]],
        });
    }

    get email(): FormControl {
        return this.form.get('email') as FormControl;
    }
    get password(): FormControl {
        return this.form.get('password') as FormControl;
    }

    onSubmit(): void {
        if (this.form.valid) {
            console.log('success login', this.form.value);
        }
    }
}
```
