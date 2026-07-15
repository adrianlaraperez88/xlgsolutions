import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private serviceService = inject(ServiceService);
  public langService = inject(LanguageService);
  private seoService = inject(SeoService);
  public clipboardService = inject(ClipboardService);

  service: Service | undefined;
  private serviceIdSignal = signal<string | null>(null);

  constructor() {
    effect(() => {
      const activeLang = this.langService.activeLang();
      const serviceId = this.serviceIdSignal();
      
      // Update HTML lang tag
      this.seoService.updateHtmlLang(activeLang);

      if (serviceId) {
        this.service = this.serviceService.getServiceById(serviceId);
        
        if (this.service) {
          const serviceName = activeLang === 'es' ? this.service.nameEs : this.service.name;
          const serviceDesc = activeLang === 'es' ? this.service.shortDescriptionEs : this.service.shortDescription;
          
          const title = `${serviceName} | XLG Solutions`;
          const description = `${serviceDesc} ${
            activeLang === 'es' 
              ? 'Obtenga una consulta gratuita con nuestros asesores en Miami.' 
              : 'Get a free session with our specialist advisors in Miami.'
          }`;
          const keywords = `${serviceName}, ${this.service.id.replace(/-/g, ', ')}, XLG Solutions, services`;

          this.seoService.updateMeta({
            title,
            description,
            keywords,
            canonicalPath: `/service/${serviceId}`
          });

          // Inject structured JSON-LD data for the specific service
          this.seoService.setJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': serviceName,
            'description': serviceDesc,
            'provider': {
              '@type': 'FinancialService',
              'name': 'XLG Solutions',
              'url': 'https://xlgsol.com/',
              'telephone': '+1-305-555-0199',
              'email': 'info@xlgsol.com'
            },
            'areaServed': {
              '@type': 'AdministrativeArea',
              'name': 'Florida'
            },
            'serviceType': serviceName,
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'USD',
              'description': 'Free initial consultation'
            }
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('id');
      this.serviceIdSignal.set(serviceId);
    });
  }
}

