import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private serviceService = inject(ServiceService);
  
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
}
