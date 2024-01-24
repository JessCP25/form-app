import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './switches.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SwitchesComponent { }
