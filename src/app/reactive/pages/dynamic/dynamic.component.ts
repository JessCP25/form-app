import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dynamic.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class DynamicComponent { }
