import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-switches',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switches.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SwitchesComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    console.log(this.myForm.value);
    console.log(newPerson);
  }

  isInvalidField(field: string) {
    return this.validatorsService.isInvalidField(this.myForm, field);
  }
}
