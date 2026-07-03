import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private serviceService = inject(ServiceService);

  service: Service | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('id');
      if (serviceId) {
        this.service = this.serviceService.getServiceById(serviceId);
      }
    });
  }
}
