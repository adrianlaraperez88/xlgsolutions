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
      let description = 'XLG Solutions provides small business bookkeeping, strategic tax planning, and expert health insurance advisory to support your business growth.';
      let keywords = 'bookkeeping, tax preparation, tax planning, health insurance, small business support, LLC formation, supplemental benefits, financial advisory, XLG Solutions';

      if (activeLang === 'es') {
        title = 'XLG Solutions | Soluciones Financieras y Empresariales Expertas';
        description = 'XLG Solutions ofrece contabilidad, planeación fiscal estratégica y asesoría en seguros de salud para impulsar el crecimiento de su empresa.';
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

      // Inject structured JSON-LD data (Organization, LocalBusiness, and FAQPage)
      this.seoService.setJsonLd([
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://xlgsol.com/#organization',
          'name': 'XLG Solutions',
          'url': 'https://xlgsol.com/',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://xlgsol.com/assets/logo.svg'
          },
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+1-305-555-0199',
            'contactType': 'customer service',
            'email': 'info@xlgsol.com'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://xlgsol.com/#localbusiness',
          'parentOrganization': {
            '@id': 'https://xlgsol.com/#organization'
          },
          'name': 'XLG Solutions',
          'image': 'https://xlgsol.com/assets/logo.svg',
          'url': 'https://xlgsol.com/',
          'telephone': '+1-305-555-0199',
          'email': 'info@xlgsol.com',
          'priceRange': '$$',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '801 Brickell Ave',
            'addressLocality': 'Miami',
            'addressRegion': 'FL',
            'postalCode': '33131',
            'addressCountry': 'US'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 25.7656,
            'longitude': -80.1908
          },
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            'opens': '09:00',
            'closes': '18:00'
          },
          'description': description,
          'potentialAction': {
            '@type': 'ContactAction',
            'target': 'https://xlgsol.com/#contact'
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

