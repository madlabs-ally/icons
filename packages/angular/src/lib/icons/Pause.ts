import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-pause',
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
      <path d="M9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V8Z" fill="black"/>
<path d="M13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V8Z" fill="black"/>
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
export class Pause {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}