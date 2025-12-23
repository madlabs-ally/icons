import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-circle-pause',
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
      <circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
<path d="M9 9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V9Z" fill="black"/>
<path d="M13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V9Z" fill="black"/>
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
export class CirclePause {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}