import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  standalone:true,
  imports:[CommonModule, FormsModule, TranslatePipe]
})
export class ConverterComponent {
  pxValue: number = 0;
  baseFontSize: number = 16;
  remValue: string = '';
  emValue: string = '';
  percentageValue: string = '';
  converted: boolean = false;

  convert() {
    const px = this.pxValue || 0;
    const base = this.baseFontSize || 16;

    const rem = (px / base).toFixed(4);
    const em = rem;
    const percent = ((px / base) * 100).toFixed(2);

    this.remValue = rem;
    this.emValue = em;
    this.percentageValue = percent;
    this.converted = true;
  }
}
