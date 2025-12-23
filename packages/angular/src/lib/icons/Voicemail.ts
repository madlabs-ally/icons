import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-voicemail',
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
      <rect x="3" y="9" width="6" height="6" rx="3" stroke="black" stroke-width="2"/>
<rect x="15" y="9" width="6" height="6" rx="3" stroke="black" stroke-width="2"/>
<rect x="19" y="14" width="2" height="14" rx="1" transform="rotate(90 19 14)" fill="black"/>
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
export class Voicemail {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}