import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-image',
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
      <g clip-path="url(#clip0_3387_139)">
<path d="M5.50001 21L17.4808 8.68007C17.8516 8.29882 18.4559 8.27444 18.8561 8.62458L21 10.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
<circle cx="8.5" cy="8.5" r="1.75" stroke="black" stroke-width="1.5"/>
<rect x="3" y="3" width="18" height="18" rx="3" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_3387_139">
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
export class Image {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}