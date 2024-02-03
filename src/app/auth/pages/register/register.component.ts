import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class RegisterComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.firstNameAndLastnamePattern),
      ],
    ],
    // email: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.pattern(this.validatorsService.emailPattern),
    //   ],
    //   [this.emailValidator],
    // ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern),
      ],
      [ new EmailValidator()],
    ],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValdField(field: string) {
    return this.validatorsService.isInvalidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
