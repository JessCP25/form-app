import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './basic.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class BasicComponent { }
