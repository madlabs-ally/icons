import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-equals',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      [attr.stroke]="color"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="melospot-icon"
    >
      <path d="M3 11C2.44772 11 2 10.5523 2 10V10C2 9.44772 2.44772 9 3 9L21 9C21.5523 9 22 9.44772 22 10V10C22 10.5523 21.5523 11 21 11L3 11Z" fill="#141313"/>
<path d="M3 15C2.44772 15 2 14.5523 2 14V14C2 13.4477 2.44772 13 3 13L21 13C21.5523 13 22 13.4477 22 14V14C22 14.5523 21.5523 15 21 15L3 15Z" fill="#141313"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class Equals {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}