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
      shortDescriptionEs: 'Preparación de impuestos personales y comerciales y planificación tributaria estratégica.',
      longDescription: 'Our expert team provides comprehensive tax preparation services for both individuals and businesses. We go beyond just filing returns, offering strategic tax planning to minimize your liabilities and maximize your savings throughout the year.',
      longDescriptionEs: 'Nuestro equipo de expertos brinda servicios integrales de preparación de impuestos tanto para personas como para empresas. Vamos más allá de la simple presentación de declaraciones, ofreciendo planificación tributaria estratégica para minimizar sus obligaciones y maximizar sus ahorros durante todo el año.',
      keyFocusAreas: [
        {
          title: 'Personal & Business Tax Filing',
          titleEs: 'Preparación de Impuestos Personales y Comerciales',
          desc: 'Accurate compliance for all entities.',
          descEs: 'Cumplimiento preciso para todas las entidades.'
        },
        {
          title: 'Strategic Year-Round Planning',
          titleEs: 'Planificación Estratégica Anual',
          desc: 'Minimize liabilities, maximize deductions.',
          descEs: 'Minimizar obligaciones, maximizar deducciones.'
        },
        {
          title: 'IRS Audit Support & Consulting',
          titleEs: 'Soporte y Consultoría de Auditoría del IRS',
          desc: 'Professional guidance during disputes.',
          descEs: 'Orientación profesional durante disputas.'
        },
        {
          title: 'State & Federal Compliance',
          titleEs: 'Cumplimiento Estatal y Federal',
          desc: 'Always updated on latest regulations.',
          descEs: 'Siempre actualizados sobre las últimas regulaciones.'
        }
      ]
    },
    {
      id: 'bookkeeping',
      name: 'Bookkeeping',
      nameEs: 'Contabilidad (Bookkeeping)',
      shortDescription: 'Reliable bookkeeping services for small businesses.',
      shortDescriptionEs: 'Servicios contables confiables para pequeñas empresas.',
      longDescription: 'Keep your financials in perfect order with our meticulous bookkeeping services. We handle your day-to-day transactions, financial statements, and reporting, giving you a clear picture of your business’s financial health.',
      longDescriptionEs: 'Mantenga sus finanzas en perfecto orden con nuestros servicios de contabilidad meticulosos. Nos encargamos de sus transacciones diarias, estados financieros e informes, brindándole una imagen clara de la salud financiera de su empresa.',
      keyFocusAreas: [
        {
          title: 'Transaction Classification',
          titleEs: 'Clasificación de Transacciones',
          desc: 'Clean tracking of expenses & revenue.',
          descEs: 'Seguimiento limpio de gastos e ingresos.'
        },
        {
          title: 'Accounts Payable/Receivable',
          titleEs: 'Cuentas por Pagar/Cobrar',
          desc: 'Optimize cash flows and invoicing.',
          descEs: 'Optimizar flujos de caja y facturación.'
        },
        {
          title: 'Monthly Financial Reports',
          titleEs: 'Informes Financieros Mensuales',
          desc: 'Clear Balance Sheets & P&L statements.',
          descEs: 'Balances generales y estados de pérdidas y ganancias claros.'
        },
        {
          title: 'Bank Reconciliation',
          titleEs: 'Reconciliación Bancaria',
          desc: 'No discrepancies between bank & books.',
          descEs: 'Sin discrepancias entre el banco y los libros.'
        }
      ]
    },
    {
      id: 'health-insurance',
      name: 'Health Insurance',
      nameEs: 'Seguros de Salud',
      shortDescription: 'Individual and family health insurance plans.',
      shortDescriptionEs: 'Planes de seguro médico individuales y familiares.',
      longDescription: 'Navigating the world of health insurance can be complex. We simplify the process, helping you find the perfect individual or family health insurance plan that fits your needs and budget, ensuring you and your loved ones are covered.',
      longDescriptionEs: 'Navegar por el mundo de los seguros médicos puede ser complejo. Simplificamos el proceso, ayudándolo a encontrar el plan de seguro de salud individual o familiar perfecto que se adapte a sus necesidades y presupuesto, asegurando que usted y sus seres queridos estén cubiertos.',
      keyFocusAreas: [
        {
          title: 'ACA Marketplace (Obamacare)',
          titleEs: 'Mercado de ACA (Obamacare)',
          desc: 'Calculate premium tax credits & apply.',
          descEs: 'Calcular créditos fiscales de primas y aplicar.'
        },
        {
          title: 'Family & Individual Plans',
          titleEs: 'Planes Familiares e Individuales',
          desc: 'Comprehensive custom-fit health models.',
          descEs: 'Modelos de salud integrales hechos a la medida.'
        },
        {
          title: 'Prescription Savings Plans',
          titleEs: 'Planes de Ahorro en Recetas',
          desc: 'Lower out-of-pocket pharmaceutical costs.',
          descEs: 'Menores costos farmacéuticos de su propio bolsillo.'
        },
        {
          title: 'Provider Network Match',
          titleEs: 'Coincidencia de Red de Proveedores',
          desc: 'Keep your trusted doctor on plan.',
          descEs: 'Mantenga a su médico de confianza en el plan.'
        }
      ]
    },
    {
      id: 'supplemental-benefits',
      name: 'Supplemental Benefits',
      nameEs: 'Beneficios Suplementarios',
      shortDescription: 'Accident, hospital, critical illness, and more.',
      shortDescriptionEs: 'Accidente, hospitalización, enfermedades graves y más.',
      longDescription: 'Enhance your primary health coverage with supplemental insurance. We offer a range of plans including accident, hospital, critical illness, and hospital indemnity to provide an extra layer of financial protection when you need it most.',
      longDescriptionEs: 'Mejore su cobertura de salud primaria con un seguro suplementario. Ofrecemos una gama de planes que incluyen accidentes, hospitalización, enfermedades graves e indemnización hospitalaria para proporcionar una capa adicional de protección financiera cuando más lo necesite.',
      keyFocusAreas: [
        {
          title: 'Accident Insurance',
          titleEs: 'Seguro de Accidentes',
          desc: 'Cash pay-outs to cover unexpected injuries.',
          descEs: 'Pagos en efectivo para cubrir lesiones inesperadas.'
        },
        {
          title: 'Hospital Indemnity',
          titleEs: 'Indemnización Hospitalaria',
          desc: 'Direct monetary support during hospital stays.',
          descEs: 'Apoyo monetario directo durante estadías hospitalarias.'
        },
        {
          title: 'Critical Illness Protection',
          titleEs: 'Protección para Enfermedades Graves',
          desc: 'Financial safety net for life-altering diagnoses.',
          descEs: 'Red de seguridad financiera para diagnósticos que cambian la vida.'
        },
        {
          title: 'Income Protection Shield',
          titleEs: 'Escudo de Protección de Ingresos',
          desc: 'Supplement gaps left by primary plans.',
          descEs: 'Suplementar las brechas dejadas por los planes primarios.'
        }
      ]
    },
    {
      id: 'business-support',
      name: 'Business Support Services',
      nameEs: 'Servicios de Apoyo Empresarial',
      shortDescription: 'Expert advisory for your small business needs.',
      shortDescriptionEs: 'Asesoramiento experto para las necesidades de su pequeña empresa.',
      longDescription: 'From entity formation to strategic planning, our business support services are designed to help your small business thrive. We provide the expert guidance and advisory you need to navigate challenges and seize opportunities.',
      longDescriptionEs: 'Desde la formación de la entidad hasta la planificación estratégica, nuestros servicios de apoyo empresarial están diseñados para ayudar a que su pequeña empresa prospere. Brindamos la orientación y el asesoramiento de expertos que necesita para superar los desafíos y aprovechar las oportunidades.',
      keyFocusAreas: [
        {
          title: 'LLC & Corp Entity Formation',
          titleEs: 'Constitución de Entidades LLC y Corp',
          desc: 'Set up corporate structure correctly.',
          descEs: 'Configurar la estructura corporativa correctamente.'
        },
        {
          title: 'Payroll Integration',
          titleEs: 'Integración de Nómina',
          desc: 'Automate payroll runs and tax filings.',
          descEs: 'Automatizar ejecuciones de nómina y declaraciones de impuestos.'
        },
        {
          title: 'Licensing & Regulatory Filings',
          titleEs: 'Licencias y Presentaciones Regulatorias',
          desc: 'Keep operating permits fully compliant.',
          descEs: 'Mantener los permisos de operación en total cumplimiento.'
        },
        {
          title: 'Strategic Cash Flow Advisory',
          titleEs: 'Asesoría Estratégica de Flujo de Caja',
          desc: 'Forecasting for growth decisions.',
          descEs: 'Previsiones para decisiones de crecimiento.'
        }
      ]
    }
  ];

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }
}
