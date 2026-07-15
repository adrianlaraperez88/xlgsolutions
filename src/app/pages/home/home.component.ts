import { Component, inject, effect } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { SeoService } from '../../services/seo.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    FaqComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private seoService = inject(SeoService);
  private langService = inject(LanguageService);

  constructor() {
    effect(() => {
      const activeLang = this.langService.activeLang();
      
      // Update HTML lang tag
      this.seoService.updateHtmlLang(activeLang);

      // Determine SEO texts based on language
      let title = 'XLG Solutions | Expert Business & Financial Solutions';
      let description = 'Empower your business growth with expert financial solutions from XLG Solutions. We offer bookkeeping, tax preparation, health insurance, and small business support.';
      let keywords = 'bookkeeping, tax preparation, tax planning, health insurance, small business support, LLC formation, supplemental benefits, financial advisory, XLG Solutions';

      if (activeLang === 'es') {
        title = 'XLG Solutions | Soluciones Financieras y Empresariales Expertas';
        description = 'Impulse el crecimiento de su empresa con las soluciones financieras expertas de XLG Solutions. Ofrecemos contabilidad, preparación de impuestos, seguros de salud y más.';
        keywords = 'contabilidad, preparación de impuestos, seguros de salud, apoyo a pequeñas empresas, formación de LLC, asesoría financiera, XLG Solutions';
      }

      this.seoService.updateMeta({
        title,
        description,
        keywords,
        canonicalPath: '/',
        alternates: [
          { lang: 'en', path: '/' },
          { lang: 'es', path: '/' }
        ]
      });

      // Get translated FAQ contents for structured data
      const q1 = this.langService.translate('faqQ1');
      const a1 = this.langService.translate('faqA1');
      const q2 = this.langService.translate('faqQ2');
      const a2 = this.langService.translate('faqA2');
      const q3 = this.langService.translate('faqQ3');
      const a3 = this.langService.translate('faqA3');
      const q4 = this.langService.translate('faqQ4');
      const a4 = this.langService.translate('faqA4');

      // Inject structured JSON-LD data (both FinancialService and FAQPage)
      this.seoService.setJsonLd([
        {
          '@context': 'https://schema.org',
          '@type': 'FinancialService',
          'name': 'XLG Solutions',
          'image': 'https://xlgsolutions.com/assets/logo.svg',
          '@id': 'https://xlgsolutions.com/#organization',
          'url': 'https://xlgsolutions.com/',
          'telephone': '+1-305-555-0199',
          'email': 'info@xlgsolutions.com',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Miami',
            'addressRegion': 'FL',
            'addressCountry': 'US'
          },
          'description': description,
          'potentialAction': {
            '@type': 'ContactAction',
            'target': 'https://xlgsolutions.com/#contact'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': q1,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': a1
              }
            },
            {
              '@type': 'Question',
              'name': q2,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': a2
              }
            },
            {
              '@type': 'Question',
              'name': q3,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': a3
              }
            },
            {
              '@type': 'Question',
              'name': q4,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': a4
              }
            }
          ]
        }
      ]);
    });
  }
}

