import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private jsonLdScriptId = 'json-ld-script';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  update(title: string, description: string, canonicalUrl?: string) {
    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });

    if (canonicalUrl) {
      this.setCanonical(canonicalUrl);
    }
  }

  setCanonical(url: string) {
    let link = this.document.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  addJsonLd(schema: object) {
    // remove existing schema
    const oldScript = this.document.getElementById(this.jsonLdScriptId);
    if (oldScript) {
      oldScript.remove();
    }

    const script = this.document.createElement('script');
    script.id = this.jsonLdScriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);

    this.document.head.appendChild(script);
  }
}
