import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../pipes/translate.pipe';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { Router } from '@angular/router';
import { ConversionTableComponent } from '../conversion-table/conversion-table.component';
import { FaqComponent } from '../faq/faq.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, TranslatePipe, ContentComponent,
    ConversionTableComponent, ReactiveFormsModule, FaqComponent, MatIconModule
  ]
})

export class ConverterComponent implements OnInit {
  fromValue = '';
  toValue = '';
  baseFontSize = 16;

  toolType: string = '';
  fromLabel = '';
  toLabel = '';
  converterTitle = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  feedbackText: string = '';
  pxValues = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 100];

  onSubmitFeedback() {
    if (this.feedbackText.trim()) {
      console.log('User Feedback:', this.feedbackText);
      // Add logic to send it to a backend or show a thank you message
      this.feedbackText = '';
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.toolType = params.get('type') ?? '';
      this.setToolConfig(true); // Reset values on navigation
    });
  }

  setToolConfig(shouldReset: boolean = true): void {
    if (shouldReset) {
      this.fromValue = '';
      this.toValue = '';
    }

    switch (this.toolType) {
      case 'px-to-rem':
        this.converterTitle = 'PX to REM Converter';
        this.fromLabel = 'PX';
        this.toLabel = 'REM';
        break;
      case 'rem-to-px':
        this.converterTitle = 'REM to PX Converter';
        this.fromLabel = 'REM';
        this.toLabel = 'PX';
        break;
      case 'px-to-em':
        this.converterTitle = 'PX to EM Converter';
        this.fromLabel = 'PX';
        this.toLabel = 'EM';
        break;
      case 'em-to-px':
        this.converterTitle = 'EM to PX Converter';
        this.fromLabel = 'EM';
        this.toLabel = 'PX';
        break;
      case 'px-to-percent':
        this.converterTitle = 'PX to % Converter';
        this.fromLabel = 'PX';
        this.toLabel = '%';
        break;
      case 'percent-to-px':
        this.converterTitle = '% to PX Converter';
        this.fromLabel = '%';
        this.toLabel = 'PX';
        break;
      default:
        this.converterTitle = 'Converter';
        this.fromLabel = 'From';
        this.toLabel = 'To';
    }
  }

  onBaseFontSizeChange() {
    this.onFromInput();
  }

  onFromInput(): void {
    const value = parseFloat(this.fromValue);
    if (isNaN(value)) {
      this.toValue = '';
      return;
    }

    switch (this.toolType) {
      case 'px-to-rem':
        this.toValue = (value / this.baseFontSize).toFixed(2);
        break;
      case 'rem-to-px':
        this.toValue = (value * this.baseFontSize).toFixed(2);
        break;
      case 'px-to-em':
        this.toValue = (value / this.baseFontSize).toFixed(2);
        break;
      case 'px-to-percent':
        this.toValue = ((value / this.baseFontSize) * 100).toFixed(2);
        break;
      case 'em-to-px':
        this.toValue = (value * this.baseFontSize).toFixed(2);
        break;
      case 'percent-to-px':
        this.toValue = ((value / 100) * this.baseFontSize).toFixed(2);
        break;
      default:
        this.toValue = '';
    }
  }

  onToInput(): void {
    const value = parseFloat(this.toValue);
    if (isNaN(value)) {
      this.fromValue = '';
      return;
    }

    switch (this.toolType) {
      case 'px-to-rem':
        this.fromValue = (value * this.baseFontSize).toFixed(2);
        break;
      case 'rem-to-px':
        this.fromValue = (value / this.baseFontSize).toFixed(1);
        break;
      case 'px-to-em':
        this.fromValue = (value * this.baseFontSize).toFixed(2);
        break;
      case 'px-to-percent':
        this.fromValue = ((value / 100) * this.baseFontSize).toFixed(2);
        break;
      case 'em-to-px':
        this.fromValue = (value / this.baseFontSize).toFixed(2);
        break;
      case 'percent-to-px':
        this.fromValue = ((value / this.baseFontSize) * 100).toFixed(2);
        break;
      default:
        this.fromValue = '';
    }
  }

  swapValues(): void {
    [this.fromValue, this.toValue] = [this.toValue, this.fromValue];

    const swapMap: { [key: string]: string } = {
      'px-to-rem': 'rem-to-px',
      'rem-to-px': 'px-to-rem',
      'px-to-em': 'em-to-px',
      'em-to-px': 'px-to-em',
      'px-to-percent': 'percent-to-px',
      'percent-to-px': 'px-to-percent',
    };

    const newType = swapMap[this.toolType];
    if (newType) {
      this.router.navigate(['/converter', newType], { replaceUrl: true });
    }
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.toValue)
      .then(() => {
        console.log('Copied to clipboard:', this.toValue);
        // optional: show user feedback
      })
      .catch(err => {
        console.error('Copy failed:', err);
      });
  }

}
