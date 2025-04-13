import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../pipes/translate.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, TranslatePipe]
})
export class ConverterComponent {

  baseFontSize = 16;
  isRemToPx = true;

  fromValue: string = '';
  toValue: string = '';

  get converterTitle(): string {
    return this.isRemToPx ? 'REM to PX converter' : 'PX to REM converter';
  }

  get fromLabel(): string {
    return this.isRemToPx ? 'REM' : 'PX';
  }

  get toLabel(): string {
    return this.isRemToPx ? 'PX' : 'REM';
  }

  onFromInput(): void {
    const value = parseFloat(this.fromValue);
    if (!isNaN(value)) {
      this.toValue = this.isRemToPx
        ? (value * this.baseFontSize).toFixed(2)
        : (value / this.baseFontSize).toFixed(2);
    } else {
      this.toValue = '';
    }
  }

  onToInput(): void {
    const value = parseFloat(this.toValue);
    if (!isNaN(value)) {
      this.fromValue = this.isRemToPx
        ? (value / this.baseFontSize).toFixed(2)
        : (value * this.baseFontSize).toFixed(2);
    } else {
      this.fromValue = '';
    }
  }

  swapValues(): void {
    [this.fromValue, this.toValue] = [this.toValue, this.fromValue];
    this.isRemToPx = !this.isRemToPx;
  }

}
