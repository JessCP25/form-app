import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './auth.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AuthComponent { }
