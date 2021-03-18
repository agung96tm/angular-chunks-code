Email Validator
========================
Function used to validate an email is correct or not.


## Usage:

```typescript
import { emailValidator } from '@forms/validators'

@Component({
    selector: 'app-root',
    template: `
    <div>
      <form [formGroup]="form" (submit)="onSubmit()">
        <div>
          <input type="text" [formControl]="email">
        </div>

        <div>
          <input type="password" [formControl]="password">
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
            email: ['', [Validators.required, emailValidator()]],
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
