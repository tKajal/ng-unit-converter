import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /** ✅ Standard meta update */
  update(title: string, description: string, url?: string) {
    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });

    if (url) {
      this.setCanonical(url);
    }
  }

  /** ✅ Canonical URL */
  setCanonical(url: string) {
    let link = this.document.querySelector("link[rel='canonical']") as HTMLLinkElement;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  /** ✅ JSON-LD (Schema.org) */
  addJsonLd(schema: object) {
    // Avoid duplicate schema
    const existing = this.document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);

    // SSR-safe
    this.document.head.appendChild(script);
  }
}
