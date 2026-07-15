import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tools.component.html'
})
export class ToolsComponent {
  public langService = inject(LanguageService);

  // Self-Employment Tax Estimator Signals
  seIncome = signal<number>(50000);
  
  seEarnings = computed(() => this.seIncome() * 0.9235);
  socialSecurityTax = computed(() => this.seEarnings() * 0.124);
  medicareTax = computed(() => this.seEarnings() * 0.029);
  totalSeTax = computed(() => this.socialSecurityTax() + this.medicareTax());
  
  // S-Corp Comparison
  sCorpSalary = computed(() => this.seIncome() * 0.60); // 60% salary
  sCorpDistribution = computed(() => this.seIncome() * 0.40); // 40% distribution
  sCorpSeTax = computed(() => (this.sCorpSalary() * 0.9235) * 0.153);
  sCorpSavings = computed(() => {
    const savings = this.totalSeTax() - this.sCorpSeTax();
    return savings > 0 ? savings : 0;
  });

  // ACA Subsidy Estimator Signals
  householdSize = signal<number>(1);
  annualIncome = signal<number>(30000);

  // Poverty Guidelines 2026 (Approximations)
  fplGuidelines = [0, 15060, 20440, 25820, 31200, 36580]; // size 0-5
  
  fplForSize = computed(() => {
    const size = this.householdSize();
    if (size >= 5) {
      return this.fplGuidelines[5] + (size - 5) * 5380;
    }
    return this.fplGuidelines[size];
  });

  incomeFplRatio = computed(() => {
    return (this.annualIncome() / this.fplForSize()) * 100;
  });

  estimatedSubsidy = computed(() => {
    const ratio = this.incomeFplRatio();
    if (ratio < 100) {
      return 650; // max subsidy / medicaid potential
    } else if (ratio <= 200) {
      return 500;
    } else if (ratio <= 300) {
      return 350;
    } else if (ratio <= 400) {
      return 200;
    } else {
      return 100; // extended subsidy rules
    }
  });

  updateSeIncome(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.seIncome.set(Number(val) || 0);
  }

  updateIncome(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.annualIncome.set(Number(val) || 0);
  }

  updateHouseholdSize(size: number) {
    this.householdSize.set(size);
  }
}
