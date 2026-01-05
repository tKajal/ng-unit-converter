import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
 
constructor(
  private meta: Meta,
  private title: Title,
  @Inject(DOCUMENT) private document: Document
) {}

update(titleText: string, description: string, canonical?: string) {
  this.title.setTitle(titleText);

  this.meta.updateTag({
    name: 'description',
    content: description
  });

  if (canonical) {
    let link: HTMLLinkElement =
      this.document.querySelector("link[rel='canonical']") ||
      this.document.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonical);

    this.document.head.appendChild(link);
  }
}
}
