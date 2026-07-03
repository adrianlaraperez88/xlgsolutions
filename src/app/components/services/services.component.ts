import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  private serviceService = inject(ServiceService);
  services: Service[] = [];

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }
}
