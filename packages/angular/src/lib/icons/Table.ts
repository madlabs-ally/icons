import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-table',
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
      <rect x="3" y="3" width="18" height="18" rx="1" stroke="black" stroke-width="2"/>
<path d="M7 3C7 2.44772 7.44772 2 8 2V2C8.55228 2 9 2.44772 9 3V21C9 21.5523 8.55228 22 8 22V22C7.44772 22 7 21.5523 7 21V3Z" fill="black"/>
<path d="M3 9C2.44772 9 2 8.55228 2 8V8C2 7.44772 2.44772 7 3 7L21 7C21.5523 7 22 7.44772 22 8V8C22 8.55228 21.5523 9 21 9L3 9Z" fill="black"/>
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
export class Table {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}