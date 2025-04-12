import { Injectable } from '@angular/core';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  isBrowser = typeof window !== 'undefined';
  constructor() {
    if (typeof window !== 'undefined') {
    i18next
      .use(HttpBackend)
      .use(LanguageDetector)
      .init({
        fallbackLng: 'en',
        lng: 'en', // Force default language
        debug: true,
        backend: {
            loadPath: this.isBrowser
              ? `${window.location.origin}/assets/locales/{{lng}}/translation.json`
              : `http://localhost:4200/assets/locales/{{lng}}/translation.json`
              // or use your dev server port
          },
          interpolation: {
            escapeValue: false
          }
      });
    }
  }

  t(key: string, options?: any): string {
    return i18next.t(key, options) as string;
  }

  changeLanguage(lang: string= 'en') {
    i18next.changeLanguage(lang);
  }

  currentLanguage(): string {
    return i18next.language;
  }
}
