import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-focus',
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
      <path d="M2 7V5C2 3.34315 3.34315 2 5 2H7M2 17V19C2 20.6569 3.34315 22 5 22H7M17 22H19C20.6569 22 22 20.6569 22 19V17M22 7V5C22 3.34315 20.6569 2 19 2H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
<circle cx="12" cy="12" r="3" stroke="black" stroke-width="2"/>
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
export class Focus {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}