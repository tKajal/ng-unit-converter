import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  constructor(private translationService: TranslationService) {}
}
