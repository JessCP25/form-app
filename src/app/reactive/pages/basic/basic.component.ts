import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class BasicComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required , Validators.min(0)]],
  })

  constructor( private fb: FormBuilder){}

  onSave() {
    console.log(this.myForm.value);
  }
}
