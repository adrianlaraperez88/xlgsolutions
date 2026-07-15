import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface FaqItem {
  qKey: string;
  aKey: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  public langService = inject(LanguageService);

  openItemIndex = signal<number | null>(null);

  faqItems: FaqItem[] = [
    { qKey: 'faqQ1', aKey: 'faqA1' },
    { qKey: 'faqQ2', aKey: 'faqA2' },
    { qKey: 'faqQ3', aKey: 'faqA3' },
    { qKey: 'faqQ4', aKey: 'faqA4' }
  ];

  toggleItem(index: number): void {
    if (this.openItemIndex() === index) {
      this.openItemIndex.set(null);
    } else {
      this.openItemIndex.set(index);
    }
  }
}
