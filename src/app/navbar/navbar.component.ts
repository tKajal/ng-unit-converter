import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Router, RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, RouterModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isOpen = false;
  menuOpen = false;

  tools = [
    { name: 'PX to REM Converter', key: 'px-to-rem' },
    { name: 'REM to PX Converter', key: 'rem-to-px' },
    { name: 'PX to EM Converter', key: 'px-to-em' },
    { name: 'PX to % Converter', key: 'px-to-percent' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  currentLang = 'en';

  toggleNavbar() {
    const nav = document.getElementById('myLinks');
    if (nav) {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    }
  }

  constructor(private translationService: TranslationService, public router: Router) {
    this.currentLang = this.translationService.currentLanguage() || 'en';
    console.log(this.currentLang)
  }

  get currentLangLabel(): string {
    const lang = this.languages.find(l => l.code === this.currentLang);
    return `${lang?.flag || '🌐'} ${lang?.label || 'Language'}`;
  }

  switchLang(langCode: string): void {
    this.translationService.changeLanguage(langCode);
    this.currentLang = langCode;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.lang-wrapper');
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
