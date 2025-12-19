import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-minimize',
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
      <path d="M2 9H5C6.65685 9 8 7.65685 8 6V3M2 15H5C6.65685 15 8 16.3431 8 18V21M16 21V18C16 16.3431 17.3431 15 19 15H22M22 9H19C17.3431 9 16 7.65685 16 6V3" stroke="black" stroke-width="2" stroke-linecap="round"/>
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
export class Minimize {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}