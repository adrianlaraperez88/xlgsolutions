import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resource-detail.component.html'
})
export class ResourceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private resourceService = inject(ResourceService);
  public langService = inject(LanguageService);
  private seoService = inject(SeoService);

  resource: Resource | undefined;
  private resourceIdSignal = signal<string | null>(null);

  constructor() {
    effect(() => {
      const activeLang = this.langService.activeLang();
      const resourceId = this.resourceIdSignal();

      // Update HTML lang tag
      this.seoService.updateHtmlLang(activeLang);

      if (resourceId) {
        this.resource = this.resourceService.getResourceById(resourceId);

        if (this.resource) {
          const articleTitle = activeLang === 'es' ? this.resource.titleEs : this.resource.title;
          const articleDesc = activeLang === 'es' ? this.resource.summaryEs : this.resource.summary;

          const title = `${articleTitle} | XLG Solutions`;
          const description = `${articleDesc} ${
            activeLang === 'es' 
              ? 'Lea nuestra guía experta.' 
              : 'Read our expert educational resource.'
          }`;
          const keywords = `${articleTitle.replace(/ /g, ', ')}, XLG Solutions, resource, guide`;

          this.seoService.updateMeta({
            title,
            description,
            keywords,
            canonicalPath: `/resources/${resourceId}`
          });

          // Inject structured JSON-LD for the specific article posting
          this.seoService.setJsonLd({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': articleTitle,
            'description': articleDesc,
            'author': {
              '@type': 'Person',
              'name': this.resource.author
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'XLG Solutions',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://xlgsol.com/assets/logo.svg'
              }
            },
            'datePublished': '2026-07-15',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': `https://xlgsol.com/resources/${resourceId}`
            }
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const resourceId = params.get('id');
      this.resourceIdSignal.set(resourceId);
    });
  }
}
