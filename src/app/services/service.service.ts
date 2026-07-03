import { Injectable } from '@angular/core';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = [
    {
      id: 'tax-preparation-planning',
      name: 'Tax Preparation & Planning',
      nameEs: 'Preparación y Planeación de Impuestos',
      shortDescription: 'Personal and business tax preparation and strategic tax planning.',
      longDescription: 'Our expert team provides comprehensive tax preparation services for both individuals and businesses. We go beyond just filing returns, offering strategic tax planning to minimize your liabilities and maximize your savings throughout the year.'
    },
    {
      id: 'bookkeeping',
      name: 'Bookkeeping',
      nameEs: 'Bookkeeping para Pequeñas Empresas',
      shortDescription: 'Reliable bookkeeping services for small businesses.',
      longDescription: 'Keep your financials in perfect order with our meticulous bookkeeping services. We handle your day-to-day transactions, financial statements, and reporting, giving you a clear picture of your business’s financial health.'
    },
    {
      id: 'health-insurance',
      name: 'Health Insurance',
      nameEs: 'Seguros Médicos',
      shortDescription: 'Individual and family health insurance plans.',
      longDescription: 'Navigating the world of health insurance can be complex. We simplify the process, helping you find the perfect individual or family health insurance plan that fits your needs and budget, ensuring you and your loved ones are covered.'
    },
    {
      id: 'supplemental-benefits',
      name: 'Supplemental Benefits',
      nameEs: 'Beneficios Suplementarios',
      shortDescription: 'Accident, hospital, critical illness, and more.',
      longDescription: 'Enhance your primary health coverage with supplemental insurance. We offer a range of plans including accident, hospital, critical illness, and hospital indemnity to provide an extra layer of financial protection when you need it most.'
    },
    {
      id: 'business-support',
      name: 'Business Support Services',
      nameEs: 'Asesoría para Pequeñas Empresas',
      shortDescription: 'Expert advisory for your small business needs.',
      longDescription: 'From entity formation to strategic planning, our business support services are designed to help your small business thrive. We provide the expert guidance and advisory you need to navigate challenges and seize opportunities.'
    }
  ];

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }
}
