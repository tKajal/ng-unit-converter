import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is REM in CSS?',
      answer: 'REM stands for "Root EM" and is a relative unit that scales based on the root element\'s font size.'
    },
    {
      question: 'How is REM different from PX?',
      answer: 'PX is an absolute unit. REM is relative and more flexible for responsive designs.'
    },
    {
      question: 'What is the default REM size in browsers?',
      answer: 'Most browsers set the default root font size to 16px, so 1rem = 16px by default.'
    },
    {
      question: 'How do I convert PX to REM?',
      answer: 'Divide the pixel value by the root font size. For example, 32px / 16 = 2rem.'
    }
  ];

  openIndex: number | null = null;

  toggleFAQ(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
