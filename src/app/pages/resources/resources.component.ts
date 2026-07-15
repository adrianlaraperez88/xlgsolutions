import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { LanguageService } from '../../services/language.service';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resources.component.html'
})
export class ResourcesComponent {
  private resourceService = inject(ResourceService);
  public langService = inject(LanguageService);

  resources: Resource[] = this.resourceService.getResources();
}
