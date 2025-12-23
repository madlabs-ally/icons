import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-dot',
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
      <g clip-path="url(#clip0_16_2)">
<circle cx="12" cy="12" r="4" fill="black" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_16_2">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
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
export class Dot {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}