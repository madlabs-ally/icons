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
      <path d="M3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2L21 2C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4L3 4Z" fill="black"/>
<path d="M3 22C2.44772 22 2 21.5523 2 21V21C2 20.4477 2.44772 20 3 20L21 20C21.5523 20 22 20.4477 22 21V21C22 21.5523 21.5523 22 21 22L3 22Z" fill="black"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2V2C3.55228 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22V22C2.44772 22 2 21.5523 2 21L2 3Z" fill="#141313"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2V2C3.55228 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22V22C2.44772 22 2 21.5523 2 21L2 3Z" fill="black"/>
<path d="M20 3C20 2.44772 20.4477 2 21 2V2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22V22C20.4477 22 20 21.5523 20 21V3Z" fill="black"/>
<path d="M5.50001 21L17.4808 8.68007C17.8516 8.29882 18.4559 8.27444 18.8561 8.62458L21 10.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
<circle cx="8.5" cy="8.5" r="1.75" stroke="black" stroke-width="1.5"/>
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