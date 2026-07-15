import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogImage?: string;
  type?: string;
  alternates?: { lang: string; path: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Update page metadata including title, description, keywords, Open Graph, Twitter cards, and Canonical link.
   */
  updateMeta(config: SeoConfig): void {
    const siteUrl = 'https://xlgsol.com';
    const cleanPath = config.canonicalPath.startsWith('/') ? config.canonicalPath : `/${config.canonicalPath}`;
    const fullUrl = `${siteUrl}${cleanPath}`;

    // 1. Set document Title
    this.titleService.setTitle(config.title);

    // 2. Set basic Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // 3. Open Graph Metadata
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: fullUrl });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });

    const ogImage = config.ogImage || 'assets/logo.svg';
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}/${ogImage}`;
    this.metaService.updateTag({ property: 'og:image', content: fullOgImage });

    // 4. Twitter Cards
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: fullOgImage });

    // 5. Canonical Link
    this.updateCanonicalLink(fullUrl);

    // 6. Alternate link tags (hreflang)
    this.updateAlternateLinks(config.alternates || []);
  }

  /**
   * Dynamically update the 'lang' attribute on the <html> element.
   */
  updateHtmlLang(lang: string): void {
    const htmlElement = this.document.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('lang', lang);
    }
  }

  /**
   * Inject or update a JSON-LD structured data script in the <head>.
   */
  setJsonLd(schema: any): void {
    let scriptElement = this.document.getElementById('seo-json-ld') as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = this.document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.id = 'seo-json-ld';
      this.document.head.appendChild(scriptElement);
    }
    scriptElement.text = JSON.stringify(schema);
  }

  /**
   * Create or update the canonical link in <head>.
   */
  private updateCanonicalLink(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Dynamically manage alternate lang links in the document head.
   */
  private updateAlternateLinks(alternates: { lang: string; path: string }[]): void {
    // Remove existing alternates to prevent duplicates
    const existing = this.document.querySelectorAll("link[rel='alternate']");
    existing.forEach(el => el.remove());

    // Insert new alternates
    const siteUrl = 'https://xlgsol.com';
    alternates.forEach(alt => {
      const cleanPath = alt.path.startsWith('/') ? alt.path : `/${alt.path}`;
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.lang);
      link.setAttribute('href', `${siteUrl}${cleanPath}`);
      this.document.head.appendChild(link);
    });
  }
}
