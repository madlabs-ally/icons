import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-square-fill',
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
      <mask id="path-1-inside-1_18_34" fill="white">
<rect x="2" y="2" width="20" height="20" rx="1"/>
</mask>
<rect x="2" y="2" width="20" height="20" rx="1" fill="black" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_18_34)"/>
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
export class SquareFill {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}