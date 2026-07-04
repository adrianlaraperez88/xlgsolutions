import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private serviceService = inject(ServiceService);
  public langService = inject(LanguageService);
  private elementRef = inject(ElementRef);
  
  menuOpen = signal(false);
  servicesMenuOpen = signal(false);
  services: Service[] = [];

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  toggleServicesMenu() {
    this.servicesMenuOpen.set(!this.servicesMenuOpen());
  }

  closeMenus() {
    this.menuOpen.set(false);
    this.servicesMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenus();
    }
  }
}
