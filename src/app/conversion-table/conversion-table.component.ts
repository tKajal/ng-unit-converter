import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversion-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversion-table.component.html',
  styleUrls: ['./conversion-table.component.scss']
})
export class ConversionTableComponent {
  @Input() maxPx: number = 100; // default from 1 to 100
  pxValues = [4, 8, 10, 12, 14, 16, 18, 20, 24, 32, 36, 48, 64];
  get rows() {
    const arr = [];
    for (let px = 1; px <= this.maxPx; px++) {
      arr.push({
        px,
        rem: px / 16,
        em: px / 16,
        percent: (px / 16) * 100,
        pt: px * 0.75,
        cm: px / 37.8,
        mm: px / 3.78,
        inch: px / 96
      });
    }
    return arr;
  }
}
