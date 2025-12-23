import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-triangle',
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
      <g clip-path="url(#clip0_16_7)">
<path d="M6.48153 16.6804C5.71173 16.6822 5.22853 15.8496 5.61192 15.1821L10.7876 6.17021C11.171 5.50285 12.1333 5.50082 12.5197 6.16645L17.7364 15.1549C18.1227 15.8206 17.6435 16.6551 16.8739 16.657L6.48153 16.6804Z" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_16_7">
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
export class Triangle {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}