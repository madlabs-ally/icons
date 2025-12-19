import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-skip-forward',
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
      <g clip-path="url(#clip0_14_89)">
<path d="M18 5C18 4.44772 18.4477 4 19 4V4C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20V20C18.4477 20 18 19.5523 18 19V5Z" fill="#141313"/>
<path d="M4.65659 6.48153C4.65485 5.71173 5.48741 5.22853 6.15494 5.61192L15.1668 10.7876C15.8342 11.171 15.8362 12.1333 15.1706 12.5197L6.18213 17.7364C5.5164 18.1227 4.68187 17.6435 4.68001 16.8739L4.65659 6.48153Z" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_14_89">
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
export class SkipForward {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}