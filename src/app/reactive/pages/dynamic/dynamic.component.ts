import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class DynamicComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset();
  }

  isInvalidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  isInvalidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldErrors(field: string) {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }
}
