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
      ],
      directAnswer: 'XLG Solutions provides certified tax preparation and strategic planning services for individuals and small businesses, including federal and state tax filings, deduction optimization, and IRS audit representation.',
      directAnswerEs: 'XLG Solutions brinda servicios certificados de preparación de impuestos y planificación estratégica para personas y pequeñas empresas, que incluyen declaraciones federales y estatales, optimización de deducciones y representación ante auditorías del IRS.',
      caseStudy: {
        title: 'Saving an Independent Freelancer $4,000 via Strategic Deductions',
        titleEs: 'Ahorro de $4,000 para un Freelancer Independiente mediante Deducciones Estratégicas',
        detail: 'An independent graphic designer was filing taxes as a sole proprietorship without optimizing home office, equipment, and vehicle deductions. We restructured their records and utilized Section 179 for equipment write-offs.',
        detailEs: 'Un diseñador gráfico independiente declaraba impuestos sin optimizar las deducciones por oficina en casa, equipos y vehículos. Reestructuramos sus registros y utilizamos la Sección 179 para la amortización de equipos.',
        impact: '$4,250 saved in federal income tax liability and established a quarterly estimated tax plan to avoid future underpayment penalties.',
        impactEs: '$4,250 ahorrados en la obligación del impuesto federal sobre la renta y establecimiento de un plan de impuestos estimados trimestrales para evitar penalizaciones.'
      },
      regulatoryUpdate: {
        title: '2026 Home Office & Freelancer Deductions Update',
        titleEs: 'Actualización de Deducciones de Oficina en Casa y Freelancers 2026',
        detail: 'The IRS has adjusted the simplified method rate for home office deductions. Standard mileage rates for business travel have also increased to reflect inflation, providing larger write-offs for mobile professionals.',
        detailEs: 'El IRS ha ajustado la tarifa del método simplificado para las deducciones de oficina en casa. Las tarifas estándar de millaje para viajes de negocios también aumentaron para reflejar la inflación, brindando mayores deducciones.',
        date: 'July 2026'
      },
      expertQuote: {
        quote: 'Strategic tax planning is not about avoiding taxes; it is about structuring your business to legally retain the capital necessary for growth.',
        quoteEs: 'La planeación fiscal estratégica no consiste en evadir impuestos; se trata de estructurar su negocio para retener legalmente el capital necesario para crecer.',
        author: 'Adrian Lara',
        role: 'Lead Consultant & Founder',
        roleEs: 'Consultor Principal y Fundador'
      },
      comparisonTable: {
        headers: ['Tax Filing Type', 'Process Focus', 'Ideal For'],
        headersEs: ['Tipo de Declaración', 'Enfoque del Proceso', 'Ideal Para'],
        rows: [
          ['Standard Tax Preparation', 'Retrospective filing of past year transactions', 'W-2 Employees & simple filings'],
          ['Strategic Tax Planning', 'Proactive year-round tax-saving strategy', 'Small Business Owners & Freelancers']
        ],
        rowsEs: [
          ['Preparación de Impuestos Estándar', 'Declaración retrospectiva de transacciones del año anterior', 'Empleados W-2 y declaraciones simples'],
          ['Planificación Fiscal Estratégica', 'Estrategia proactiva de ahorro de impuestos todo el año', 'Propietarios de Pequeñas Empresas y Freelancers']
        ]
      },
      stepByStepProcess: [
        {
          step: '1',
          stepEs: '1',
          title: 'Document Review',
          titleEs: 'Revisión de Documentos',
          desc: 'Gathering and auditing your receipts, financial records, and previous returns.',
          descEs: 'Recopilación y auditoría de sus recibos, registros financieros y declaraciones anteriores.'
        },
        {
          step: '2',
          stepEs: '2',
          title: 'Deduction Analysis',
          titleEs: 'Análisis de Deducciones',
          desc: 'Identifying all qualified business and personal deductions to lower taxable income.',
          descEs: 'Identificación de todas las deducciones comerciales y personales elegibles para reducir la renta imponible.'
        },
        {
          step: '3',
          stepEs: '3',
          title: 'Filing & Submission',
          titleEs: 'Declaración y Presentación',
          desc: 'Secure electronic filing with the IRS and state authorities to ensure fast processing.',
          descEs: 'Declaración electrónica segura ante el IRS y las autoridades estatales para un procesamiento rápido.'
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
      ],
      directAnswer: 'XLG Solutions provides professional small business bookkeeping services, including day-to-day transaction classification, monthly bank reconciliations, accounts payable and receivable management, and detailed P&L and Balance Sheet reporting.',
      directAnswerEs: 'XLG Solutions brinda servicios profesionales de contabilidad para pequeñas empresas, que incluyen la clasificación diaria de transacciones, conciliaciones bancarias mensuales, gestión de cuentas por cobrar y pagar, e informes detallados de pérdidas y ganancias y balance general.',
      caseStudy: {
        title: 'Identifying $8,500 in Lost Revenue for a Local Retailer',
        titleEs: 'Identificación de $8,500 en Ingresos Perdidos para un Minorista Local',
        detail: 'A local retail merchant had discrepancies between payment gateway reports and bank deposits. We audited three months of transaction data, resolved classification errors, and reconciled credit card processing fees.',
        detailEs: 'Un minorista local tenía discrepancias entre los informes de pasarela de pago y los depósitos bancarios. Auditamos tres meses de transacciones, resolvimos errores de clasificación y conciliamos las tarifas de procesamiento.',
        impact: 'Recovered $8,500 in un-deposited merchant transfers and established a daily reconciliation flow.',
        impactEs: 'Se recuperaron $8,500 en transferencias de comerciantes no depositadas y se estableció un flujo de conciliación diario.'
      },
      regulatoryUpdate: {
        title: 'Automated Bookkeeping Compliance Standards',
        titleEs: 'Normas de Cumplimiento de Contabilidad Automatizada',
        detail: 'Financial institutions are shifting toward secure API-based bank feeds (OAuth). Businesses must migrate their accounting software feeds to ensure continuous, secure transaction importing.',
        detailEs: 'Las instituciones financieras se están moviendo hacia flujos bancarios basados en API seguras (OAuth). Las empresas deben migrar sus conexiones de software para garantizar la importación segura.',
        date: 'June 2026'
      },
      expertQuote: {
        quote: 'Clear transaction classification is the foundation of strategic business decisions. If your books are messy, your decisions will be blurry.',
        quoteEs: 'La clasificación clara de transacciones es la base de las decisiones comerciales estratégicas. Si sus libros están desordenados, sus decisiones serán borrosas.',
        author: 'Adrian Lara',
        role: 'Lead Consultant & Founder',
        roleEs: 'Consultor Principal y Fundador'
      },
      comparisonTable: {
        headers: ['Service Level', 'Reconciliation Frequency', 'Reporting Package'],
        headersEs: ['Nivel de Servicio', 'Frecuencia de Conciliación', 'Paquete de Informes'],
        rows: [
          ['Basic Bookkeeping', 'Monthly bank and credit card reconciliations', 'Standard P&L & Balance Sheet'],
          ['Premium Bookkeeping', 'Weekly transaction classification and cash flow tracking', 'Custom Management Reports & KPI dashboards']
        ],
        rowsEs: [
          ['Contabilidad Básica', 'Conciliaciones mensuales de bancos y tarjetas', 'Pérdidas y Ganancias y Balance General estándar'],
          ['Contabilidad Premium', 'Clasificación semanal de transacciones y flujo de caja', 'Informes personalizados y paneles de KPI']
        ]
      },
      stepByStepProcess: [
        {
          step: '1',
          stepEs: '1',
          title: 'Software Integration',
          titleEs: 'Integración de Software',
          desc: 'Connecting your business bank accounts and credit cards to a secure accounting system.',
          descEs: 'Conexión de sus cuentas bancarias y tarjetas comerciales a un sistema de contabilidad seguro.'
        },
        {
          step: '2',
          stepEs: '2',
          title: 'Classification & Matching',
          titleEs: 'Clasificación y Conciliación',
          desc: 'Categorizing every expense and matching incoming revenue with invoices daily or weekly.',
          descEs: 'Categorización de cada gasto y coincidencia de ingresos con facturas de forma diaria o semanal.'
        },
        {
          step: '3',
          stepEs: '3',
          title: 'Financial Reporting',
          titleEs: 'Generación de Informes Financieros',
          desc: 'Generating and reviewing monthly Profit & Loss statements and balance sheets to audit performance.',
          descEs: 'Generación y revisión mensual de estados de pérdidas y ganancias y balances para auditar el rendimiento.'
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
      ],
      directAnswer: 'XLG Solutions offers individual, family, and group health insurance advisory, helping clients qualify for Affordable Care Act (ACA/Obamacare) subsidies and select comprehensive HMO, PPO, or EPO plans.',
      directAnswerEs: 'XLG Solutions ofrece asesoría en seguros de salud individuales, familiares y grupales, ayudando a los clientes a calificar para subsidios de la Ley de Cuidado de Salud Asequible (ACA/Obamacare) y seleccionar planes HMO, PPO o EPO.',
      caseStudy: {
        title: 'Securing $600/Month Premium Subsidies for a Family of Four',
        titleEs: 'Obtención de Subsidios de $600/Mes para una Familia de Cuatro',
        detail: 'A self-employed contractor and their family were paying full price for private insurance. We evaluated their annual income projection and enrolled them in an ACA Marketplace plan with premium tax credits.',
        detailEs: 'Un contratista independiente y su familia pagaban el precio completo de un seguro privado. Evaluamos su proyección de ingresos y los inscribimos en un plan del mercado de ACA con créditos fiscales.',
        impact: 'Reduced monthly health insurance premiums from $850 to $250 while keeping their family primary care doctor.',
        impactEs: 'Reducción de la prima mensual de seguro médico de $850 a $250 manteniendo al médico de atención primaria de la familia.'
      },
      regulatoryUpdate: {
        title: 'Expanded ACA Subsidy Extensions for 2026',
        titleEs: 'Ampliación de Extensiones de Subsidios ACA 2026',
        detail: 'Enhanced premium tax credits under federal law remain active for the 2026 enrollment period, lowering net premium costs for families earning up to 400% of the federal poverty level.',
        detailEs: 'Los créditos fiscales mejorados para primas según la ley federal siguen activos para el período de inscripción de 2026, lo que reduce los costos netos para las familias.',
        date: 'May 2026'
      },
      expertQuote: {
        quote: "Finding the right health insurance isn't just about the premium; it is about matching your medical needs, doctor networks, and pharmaceutical prescriptions.",
        quoteEs: 'Encontrar el seguro médico adecuado no se trata solo de la prima; se trata de coordinar sus necesidades médicas, redes de médicos y recetas farmacéuticas.',
        author: 'Adrian Lara',
        role: 'Lead Consultant & Founder',
        roleEs: 'Consultor Principal y Fundador'
      },
      comparisonTable: {
        headers: ['Plan Category', 'Network Design', 'Ideal Fit'],
        headersEs: ['Categoría de Plan', 'Diseño de Red', 'Ajuste Ideal'],
        rows: [
          ['HMO Plans', 'Requires primary care doctor referral to see specialists', 'Budget-conscious individuals preferring local care'],
          ['PPO Plans', 'Allows out-of-network doctors without referrals', 'Families seeking broad doctor choices and travel coverage']
        ],
        rowsEs: [
          ['Planes HMO', 'Requiere referencia de médico primario para ver especialistas', 'Personas que buscan economía y atención local'],
          ['Planes PPO', 'Permite médicos fuera de la red sin necesidad de referencias', 'Familias que buscan flexibilidad y cobertura nacional']
        ]
      },
      stepByStepProcess: [
        {
          step: '1',
          stepEs: '1',
          title: 'Income Verification',
          titleEs: 'Verificación de Ingresos',
          desc: 'Estimating your annual household income to calculate eligible ACA tax credits.',
          descEs: 'Estimación de los ingresos anuales de su hogar para calcular los créditos fiscales de ACA.'
        },
        {
          step: '2',
          stepEs: '2',
          title: 'Network Check',
          titleEs: 'Verificación de Red de Médicos',
          desc: 'Confirming your preferred doctors and prescriptions are covered under potential plans.',
          descEs: 'Confirmación de que sus médicos preferidos y recetas están cubiertos en los planes potenciales.'
        },
        {
          step: '3',
          stepEs: '3',
          title: 'Enrollment & Setup',
          titleEs: 'Inscripción y Configuración',
          desc: 'Submitting application and setting up auto-pay for seamless coverage initiation.',
          descEs: 'Presentación de la solicitud y configuración del pago automático para un inicio de cobertura sin problemas.'
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
      ],
      directAnswer: 'XLG Solutions structures supplemental benefit plans including accident insurance, hospital indemnity, and critical illness coverage to provide cash payouts directly to clients during medical emergencies, bridging gaps in primary health insurance.',
      directAnswerEs: 'XLG Solutions estructura planes de beneficios suplementarios que incluyen seguros de accidentes, indemnización por hospitalización y cobertura de enfermedades graves para proporcionar pagos en efectivo directos durante emergencias médicas.',
      caseStudy: {
        title: '$3,500 Cash Support During Unexpected Injury Recovery',
        titleEs: 'Apoyo en Efectivo de $3,500 Durante una Recuperación por Lesión Inesperada',
        detail: 'A self-employed delivery driver fractured their arm, leaving them unable to drive for six weeks. We had previously structured a supplemental accident plan for them alongside their primary health coverage.',
        detailEs: 'Un conductor de entregas independiente se fracturó el brazo, lo que le impidió conducir por seis semanas. Previamente habíamos estructurado un plan de accidentes suplementario junto con su seguro de salud primario.',
        impact: 'Received a direct cash payout of $3,500 within 5 days of filing, which covered rent and utilities during recovery.',
        impactEs: 'Recibió un pago directo en efectivo de $3,500 a los 5 días de la reclamación, lo que cubrió la renta y los servicios durante la recuperación.'
      },
      regulatoryUpdate: {
        title: 'Supplemental Health Integration and Tax Treatment',
        titleEs: 'Integración de Salud Suplementaria y Tratamiento Fiscal',
        detail: 'Payouts received from individual supplemental policies purchased with after-tax dollars are typically 100% tax-free, serving as an untaxed safety net for living expenses.',
        detailEs: 'Los pagos recibidos de pólizas suplementarias individuales adquiridas con fondos después de impuestos suelen estar 100% libres de impuestos, sirviendo como una red de seguridad.',
        date: 'April 2026'
      },
      expertQuote: {
        quote: "Primary health insurance pays the hospital and doctors; supplemental benefits pay you directly. It's the ultimate shield for your personal cash flow.",
        quoteEs: 'El seguro de salud primario le paga al hospital y a los médicos; los beneficios suplementarios le pagan a usted directamente. Es la máxima protección para sus finanzas personales.',
        author: 'Adrian Lara',
        role: 'Lead Consultant & Founder',
        roleEs: 'Consultor Principal y Fundador'
      },
      comparisonTable: {
        headers: ['Benefit Type', 'Payout Trigger', 'Usage Scope'],
        headersEs: ['Tipo de Beneficio', 'Disparador de Pago', 'Alcance de Uso'],
        rows: [
          ['Accident Insurance', 'Physical injuries resulting from accidental events', 'Use for medical deductibles, rent, groceries, or utilities'],
          ['Critical Illness', 'Diagnosis of major illness (e.g. stroke, heart attack)', 'Lump-sum payment for specialized treatments and bills']
        ],
        rowsEs: [
          ['Seguro de Accidentes', 'Lesiones físicas resultantes de eventos accidentales', 'Uso para deducibles médicos, alquiler, comestibles o servicios'],
          ['Enfermedades Graves', 'Diagnóstico de enfermedad mayor (ej. infarto, derrame)', 'Pago de suma global para tratamientos especializados y gastos']
        ]
      },
      stepByStepProcess: [
        {
          step: '1',
          stepEs: '1',
          title: 'Risk Assessment',
          titleEs: 'Evaluación de Riesgo',
          desc: 'Reviewing your occupational hazards and existing health insurance deductibles.',
          descEs: 'Revisión de sus riesgos ocupacionales y deducibles de seguro de salud existentes.'
        },
        {
          step: '2',
          stepEs: '2',
          title: 'Benefit Customization',
          titleEs: 'Personalización de Beneficios',
          desc: 'Selecting a mix of accident, hospital, and illness riders that match your budget.',
          descEs: 'Selección de una combinación de coberturas de accidentes, hospitalización y enfermedad que se ajusten a su presupuesto.'
        },
        {
          step: '3',
          stepEs: '3',
          title: 'Policy Execution',
          titleEs: 'Ejecución de Póliza',
          desc: 'Submitting application forms for quick underwriting and immediate policy binding.',
          descEs: 'Envío de formularios de solicitud para una suscripción rápida e inicio de vigencia inmediato de la póliza.'
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
      ],
      directAnswer: 'XLG Solutions delivers end-to-end business support services, including LLC and Corporation formation, corporate compliance filings, payroll integration, and strategic cash flow advisory for growing enterprises.',
      directAnswerEs: 'XLG Solutions ofrece servicios integrales de apoyo empresarial, que incluyen la constitución de empresas LLC y Corporaciones, declaraciones de cumplimiento corporativo, integración de nómina y asesoramiento estratégico de flujo de caja.',
      caseStudy: {
        title: 'Accelerated LLC Formation and Payroll Integration for Tech Startup',
        titleEs: 'Constitución Acelerada de LLC e Integración de Nómina para Startup Tecnológica',
        detail: 'A local software development agency needed to incorporate, hire their first employees, and set up tax withholding immediately. We managed their corporate filings, obtained their EIN, and integrated QuickBooks Payroll.',
        detailEs: 'Una agencia local de desarrollo de software necesitaba incorporarse, contratar a sus primeros empleados y configurar la retención de impuestos de inmediato. Gestionamos sus trámites corporativos, obtuvimos el EIN e integramos la nómina.',
        impact: 'Corporate structure established, bank account opened, and first payroll run completed in under 15 days.',
        impactEs: 'Estructura corporativa establecida, cuenta bancaria abierta y primera nómina ejecutada en menos de 15 días.'
      },
      regulatoryUpdate: {
        title: 'Corporate Transparency Act (CTA) Reporting Compliance',
        titleEs: 'Cumplimiento del Informe de la Ley de Transparencia Corporativa (CTA)',
        detail: 'All newly formed LLCs and Corporations must file a Beneficial Ownership Information (BOI) report with FinCEN within mandated deadlines. Failure to comply can result in severe daily penalties.',
        detailEs: 'Todas las LLC y Corporaciones recién formadas deben presentar un informe de Información de Beneficiarios Finales (BOI) ante FinCEN dentro de los plazos obligatorios para evitar multas.',
        date: 'July 2026'
      },
      expertQuote: {
        quote: 'Starting a business correctly prevents costly corporate restructure fees down the road. Build your legal house on rock, not sand.',
        quoteEs: 'Iniciar un negocio correctamente evita costosas tarifas de reestructuración corporativa en el futuro. Construya su casa legal sobre roca, no sobre arena.',
        author: 'Adrian Lara',
        role: 'Lead Consultant & Founder',
        roleEs: 'Consultor Principal y Fundador'
      },
      comparisonTable: {
        headers: ['Entity Type', 'Tax Treatment', 'Liability Shield'],
        headersEs: ['Tipo de Entidad', 'Tratamiento Fiscal', 'Escudo de Responsabilidad'],
        rows: [
          ['Limited Liability Company (LLC)', 'Pass-through tax structure (Schedule C or partnership)', 'Protects personal assets from business liabilities'],
          ['S-Corporation (S-Corp)', 'Pass-through taxation with potential self-employment tax savings', 'Protects personal assets with strict salary/distribution compliance']
        ],
        rowsEs: [
          ['Compañía de Responsabilidad Limitada (LLC)', 'Estructura fiscal de flujo directo (Anexo C o sociedad)', 'Protege los activos personales de las responsabilidades comerciales'],
          ['Corporación S (S-Corp)', 'Tributación de flujo directo con posibles ahorros en impuestos de trabajo autónomo', 'Protege activos personales con cumplimiento estricto de salario/distribución']
        ]
      },
      stepByStepProcess: [
        {
          step: '1',
          stepEs: '1',
          title: 'Structure Consultation',
          titleEs: 'Consulta de Estructura',
          desc: 'Choosing between LLC, S-Corp, or C-Corp based on your long-term growth and tax goals.',
          descEs: 'Elección entre LLC, S-Corp o C-Corp basada en sus objetivos fiscales y de crecimiento a largo plazo.'
        },
        {
          step: '2',
          stepEs: '2',
          title: 'State Filing & EIN',
          titleEs: 'Registro Estatal y Obtención de EIN',
          desc: 'Submitting Articles of Organization to Sunbiz and acquiring IRS Employer Identification Number.',
          descEs: 'Presentación de los Artículos de Organización en Sunbiz y adquisición del Número de Identificación de Empleador (EIN).'
        },
        {
          step: '3',
          stepEs: '3',
          title: 'System Setup',
          titleEs: 'Configuración de Sistemas',
          desc: 'Opening corporate bank accounts, establishing bylaws, and integrating cloud payroll tools.',
          descEs: 'Apertura de cuentas bancarias corporativas, establecimiento de estatutos e integración de herramientas de nómina en la nube.'
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
