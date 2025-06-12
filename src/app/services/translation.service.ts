import { Injectable } from '@angular/core';
import i18next from 'i18next';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  isBrowser = typeof window !== 'undefined';

  constructor() {
    if (this.isBrowser) {
      Promise.all([
        import('i18next-http-backend'),
        import('i18next-browser-languagedetector')
      ]).then(([HttpBackendModule, LanguageDetectorModule]) => {
        // Explicitly use `.default` and cast to any to fix type errors
        const HttpBackend = (HttpBackendModule.default as any);
        const LanguageDetector = (LanguageDetectorModule.default as any);

        i18next
          .use(HttpBackend)
          .use(LanguageDetector)
          .init({
            fallbackLng: 'en',
            lng: 'en',
            debug: true,
            backend: {
              loadPath: `${window.location.origin}/assets/locales/{{lng}}/translation.json`
            },
            interpolation: {
              escapeValue: false
            }
          });
      });
    }
  }

  t(key: string, options?: any): string {
    return i18next.t(key, options) as string;
  }

  changeLanguage(lang: string = 'en') {
    i18next.changeLanguage(lang);
  }

  currentLanguage(): string {
    return (i18next as any).language || 'en';
  }
}
