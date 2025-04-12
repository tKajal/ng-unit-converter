import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isOpen = false;

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

  changeUnit(unit: string) {
    // You can emit this event to parent or use a service
    console.log('Change to:', unit);
  }

  constructor(private translationService: TranslationService) {
    // Get default lang from URL
   // const path = this.location.pathname
   // const match = path.match(/^\/(en|hi|fr)/);
   this.currentLang = this.translationService.currentLanguage() || 'en';
   console.log(this.currentLang)
  }

  get currentLangLabel(): string {
    const lang = this.languages.find(l => l.code === this.currentLang);
    return `${lang?.flag || '🌐'} ${lang?.label || 'Language'}`;
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  switchLang(langCode: string): void {
    this.translationService.changeLanguage(langCode);
    this.currentLang = langCode;
    this.isOpen = false;
  }
  // changeLanguage(lang: string): void {
  //   this.translationService.changeLanguage(lang);
  //   this.currentLang = lang;
  // }
  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.lang-wrapper');
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
