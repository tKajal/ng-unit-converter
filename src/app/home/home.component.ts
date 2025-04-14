import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { ConverterComponent } from '../converter/converter.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, ContentComponent, ConverterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tools = [
    { name: 'PX to REM Converter', key: 'px-to-rem' },
    { name: 'REM to PX Converter', key: 'rem-to-px' },
    { name: 'PX to EM Converter', key: 'px-to-em' },
    { name: 'PX to % Converter', key: 'px-to-percent' },
    { name: 'EM to PX Converter', key: 'em-to-px' },
    { name: '% to PX Converter', key: 'percent-to-px' },
  ];
  constructor(private router: Router) { }

  // Navigate to the selected tool
  navigateToTool(toolKey: string): void {
    this.router.navigate(['/converter', toolKey]);
  }
}
