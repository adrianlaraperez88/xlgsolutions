import { Injectable } from '@angular/core';
import { Resource } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = [
    {
      id: 'corporate-transparency-act-boi',
      title: 'Understanding the Corporate Transparency Act (BOI Filings)',
      titleEs: 'Entendiendo la Ley de Transparencia Corporativa (Reportes BOI)',
      category: 'Business Compliance',
      categoryEs: 'Cumplimiento Empresarial',
      date: 'July 12, 2026',
      readTime: '5 min read',
      readTimeEs: '5 min de lectura',
      author: 'Adrian Lara',
      summary: 'LLCs and Corporations registered in the US must file a Beneficial Ownership Information report with FinCEN. Learn about deadlines, requirements, and severe non-compliance penalties.',
      summaryEs: 'Las LLC y Corporaciones registradas en EE. UU. deben presentar un informe de Información de Beneficiarios Finales ante FinCEN. Conozca plazos, requisitos y multas por incumplimiento.',
      contentMarkup: `
        <p class="lead text-lg font-medium text-slate-600 mb-6">
          The Corporate Transparency Act (CTA), which came into effect to combat illicit financial activities, introduces new federal reporting requirements for the majority of small businesses operating in the United States. If you own an LLC or Corporation, you likely need to file a Beneficial Ownership Information (BOI) report with the Financial Crimes Enforcement Network (FinCEN).
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">What is a BOI Report?</h2>
        <p class="mb-4">
          A Beneficial Ownership Information (BOI) report identifies the individuals who ultimately own or control a company. By reporting this information to FinCEN, a bureau of the U.S. Department of the Treasury, the government aims to prevent bad actors from using shell companies to hide money laundering, tax fraud, or other illegal activities.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Who is Required to File?</h2>
        <p class="mb-4">
          Any domestic company (LLC, Corporation, or other entity created by filing a document with a secretary of state) or foreign company registered to do business in the U.S. is considered a <strong>Reporting Company</strong> unless it qualifies for one of the 23 exemptions. 
        </p>
        <p class="mb-4">
          Exemptions generally cover large operating companies (with over 20 full-time employees and $5 million in gross receipts), banks, credit unions, and entities already highly regulated by federal agencies.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Filing Deadlines for Small Businesses</h2>
        <p class="mb-4">
          Filing timelines depend strictly on when your entity was officially formed:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Entities formed before January 1, 2024:</strong> Must have filed by January 1, 2025.</li>
          <li><strong>Entities formed during 2024:</strong> Must file within 90 calendar days of receiving actual or public notice of registration/formation.</li>
          <li><strong>Entities formed on or after January 1, 2025:</strong> Must file within 30 calendar days of receiving actual or public notice of formation.</li>
          <li><strong>Updates or Corrections:</strong> If there is any change to reported information (such as a change in address or owner's ID document), you must file an updated report within 30 calendar days.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Penalties for Non-Compliance</h2>
        <p class="mb-6">
          Neglecting this requirement carries severe civil and criminal consequences. Failing to file complete or updated BOI reports willfully can result in <strong>civil penalties of up to $500 for each day</strong> the violation continues, and criminal penalties including fines up to $10,000 and <strong>imprisonment for up to two years</strong>.
        </p>

        <div class="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-6">
          <h4 class="font-bold text-blue-900 mb-2">Need Expert Help with Sunbiz and FinCEN?</h4>
          <p class="text-sm text-blue-800 leading-relaxed">
            Don't navigate federal compliance blindly. At XLG Solutions, we help Florida business owners register their entities correctly and file their Beneficial Ownership Information securely. Reach out to us today to secure your corporate compliance status.
          </p>
        </div>
      `,
      contentMarkupEs: `
        <p class="lead text-lg font-medium text-slate-600 mb-6">
          La Ley de Transparencia Corporativa (CTA), que entró en vigor para combatir actividades financieras ilícitas, introduce nuevos requisitos de informes federales para la mayoría de las pequeñas empresas en los EE. UU. Si posee una LLC o Corporación, es muy probable que deba presentar un informe de Información de Beneficiarios Finales (BOI) ante la Red de Control de Delitos Financieros (FinCEN).
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">¿Qué es un Reporte BOI?</h2>
        <p class="mb-4">
          Un informe de Información de Beneficiarios Finales (BOI) identifica a las personas que finalmente poseen o controlan una empresa. Al reportar esta información a FinCEN, una oficina del Departamento del Tesoro de los EE. UU., el gobierno busca evitar que actores ilícitos utilicen empresas fantasma para ocultar el lavado de dinero, fraude fiscal u otras actividades ilegales.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">¿Quiénes están Obligados a Declarar?</h2>
        <p class="mb-4">
          Cualquier empresa nacional (LLC, Corporación u otra entidad creada mediante la presentación de un documento ante una secretaría de estado) o empresa extranjera registrada para hacer negocios en los EE. UU. se considera una <strong>Compañía Reportante</strong> a menos que califique para una de las 23 exenciones.
        </p>
        <p class="mb-4">
          Las exenciones generalmente cubren a grandes empresas operativas (con más de 20 empleados a tiempo completo y $5 millones en ingresos brutos), bancos, cooperativas de crédito y entidades ya altamente reguladas por agencias federales.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Plazos de Presentación para Pequeñas Empresas</h2>
        <p class="mb-4">
          Los plazos de presentación dependen estrictamente de cuándo se formó oficialmente su entidad:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Entidades formadas antes del 1 de enero de 2024:</strong> Debieron declarar antes del 1 de enero de 2025.</li>
          <li><strong>Entidades formadas durante 2024:</strong> Deben declarar dentro de los 90 días calendario posteriores a la notificación oficial de formación.</li>
          <li><strong>Entidades formadas a partir del 1 de enero de 2025:</strong> Deben declarar dentro de los 30 días calendario posteriores a la formación oficial.</li>
          <li><strong>Actualizaciones o Correcciones:</strong> Si hay algún cambio en la información reportada (como cambio de dirección o renovación de documento de identidad del propietario), debe presentar un informe actualizado dentro de los 30 días calendario.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Multas por Incumplimiento</h2>
        <p class="mb-6">
          Omitir esta obligación conlleva graves consecuencias civiles y penales. No presentar informes BOI completos o no actualizarlos deliberadamente puede resultar en <strong>multas civiles de hasta $500 por cada día</strong> que continúe la infracción, y sanciones penales que incluyen multas de hasta $10,000 y <strong>prisión de hasta dos años</strong>.
        </p>

        <div class="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-6">
          <h4 class="font-bold text-blue-900 mb-2">¿Necesita Ayuda con Sunbiz y FinCEN?</h4>
          <p class="text-sm text-blue-800 leading-relaxed">
            No ponga en riesgo su empresa. En XLG Solutions, ayudamos a los propietarios de negocios en Florida a registrar sus entidades correctamente y a presentar su Información de Beneficiarios Finales de manera segura. Contáctenos hoy para regularizar su estatus corporativo.
          </p>
        </div>
      `
    },
    {
      id: 'llc-vs-scorp-tax-savings',
      title: 'LLC vs. S-Corporation: Tax Savings Demystified',
      titleEs: 'LLC vs. S-Corporation: Ahorros Fiscales Desmitificados',
      category: 'Tax Planning',
      categoryEs: 'Planificación Fiscal',
      date: 'June 28, 2026',
      readTime: '6 min read',
      readTimeEs: '6 min de lectura',
      author: 'Adrian Lara',
      summary: 'Choosing the correct tax classification can save thousands in self-employment tax. Discover how S-Corp salary-and-distribution rules optimize your tax burden.',
      summaryEs: 'Elegir la clasificación fiscal correcta puede ahorrar miles en impuestos de trabajo autónomo. Descubra cómo las reglas de salario y distribución de la S-Corp optimizan su carga tributaria.',
      contentMarkup: `
        <p class="lead text-lg font-medium text-slate-600 mb-6">
          Many small business owners start as a single-member Limited Liability Company (LLC). While this provides excellent asset protection, it also exposes you to a heavy self-employment tax burden. Restructuring your tax status as an S-Corporation can help optimize your annual tax liability.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">How an LLC is Taxed</h2>
        <p class="mb-4">
          By default, the IRS taxes a single-member LLC as a sole proprietorship. This is known as pass-through taxation. All net profits flow directly to your personal tax return (Schedule C).
        </p>
        <p class="mb-4">
          The critical drawback here is <strong>Self-Employment Tax</strong>. You must pay 15.3% (consisting of 12.4% for Social Security and 2.9% for Medicare) on the entire net earnings of your business.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">The S-Corporation Advantage</h2>
        <p class="mb-4">
          An S-Corporation is not a legal entity type; it is a tax classification. A regular LLC can request to be taxed as an S-Corp by filing Form 2553 with the IRS.
        </p>
        <p class="mb-4">
          Under an S-Corp tax structure, the business owner becomes an employee of the company. Your earnings are split into two categories:
        </p>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>W-2 Salary:</strong> You must pay yourself a "reasonable salary" for the services you perform. This salary is subject to payroll taxes (FICA/self-employment taxes).</li>
          <li><strong>Shareholder Distributions:</strong> Any remaining net profits can be paid out as distributions. Distributions are <strong>not</strong> subject to self-employment taxes. They are only subject to standard federal and state income tax.</li>
        </ol>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">A Quick Math Comparison</h2>
        <p class="mb-4">
          Let's assume your business makes <strong>$100,000 in net profit</strong>:
        </p>
        <div class="overflow-x-auto rounded-xl border border-slate-100 mb-6">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-100">
                <th class="py-3 px-4 font-bold text-slate-800">Tax Detail</th>
                <th class="py-3 px-4 font-bold text-slate-800">Standard LLC</th>
                <th class="py-3 px-4 font-bold text-slate-800">S-Corp Tax Option</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4">W-2 Reasonable Salary</td>
                <td class="py-3 px-4">$0</td>
                <td class="py-3 px-4">$60,000</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4">Shareholder Distribution</td>
                <td class="py-3 px-4">$100,000</td>
                <td class="py-3 px-4">$40,000</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4">Subject to 15.3% Self-Employment Tax</td>
                <td class="py-3 px-4">$100,000</td>
                <td class="py-3 px-4">$60,000 (Salary only)</td>
              </tr>
              <tr class="font-bold bg-blue-50/50">
                <td class="py-3 px-4 text-blue-900">Total Self-Employment Tax</td>
                <td class="py-3 px-4 text-red-600">$15,300</td>
                <td class="py-3 px-4 text-emerald-600">$9,180 (Saves $6,120!)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">When is an S-Corp Worth It?</h2>
        <p class="mb-6">
          Setting up and maintaining an S-Corp introduces administrative costs (such as running payroll, filing a corporate tax return Form 1120-S, and bookkeeping compliance). Typically, the tax savings outweigh these costs once your business's net profit consistently exceeds <strong>$50,000 to $60,000 per year</strong>.
        </p>

        <div class="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-6">
          <h4 class="font-bold text-blue-900 mb-2">Evaluate Your S-Corp Eligibility with XLG Solutions</h4>
          <p class="text-sm text-blue-800 leading-relaxed">
            Interested in optimizing your small business tax structures? We evaluate your business financials, guide you through S-Corp setup, and set up your payroll integrations seamlessly. Schedule a free advisory review with us today.
          </p>
        </div>
      `,
      contentMarkupEs: `
        <p class="lead text-lg font-medium text-slate-600 mb-6">
          Muchos propietarios de pequeñas empresas comienzan como una Compañía de Responsabilidad Limitada (LLC) de un solo miembro. Si bien esto proporciona una excelente protección de activos personales, también lo expone a una pesada carga de impuestos de trabajo autónomo. Restructurar su estatus fiscal como una Corporación S (S-Corp) puede ayudar a optimizar sus impuestos.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Cómo tributa una LLC</h2>
        <p class="mb-4">
          Por defecto, el IRS grava a una LLC de un solo miembro como una empresa unipersonal. Esto se conoce como tributación de flujo directo. Todas las ganancias netas pasan directamente a su declaración de impuestos personales (Anexo C).
        </p>
        <p class="mb-4">
          El inconveniente crítico aquí es el <strong>Impuesto al Trabajo Autónomo (Self-Employment Tax)</strong>. Debe pagar el 15.3% (compuesto por 12.4% de Seguro Social y 2.9% de Medicare) sobre la totalidad de las ganancias netas de su negocio.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">La Ventaja de la S-Corporation</h2>
        <p class="mb-4">
          Una Corporación S no es un tipo de entidad legal; es una clasificación fiscal. Una LLC regular puede solicitar ser gravada como S-Corp presentando el Formulario 2553 ante el IRS.
        </p>
        <p class="mb-4">
          Bajo una estructura fiscal S-Corp, el dueño del negocio se convierte en empleado de la empresa. Sus ganancias se dividen en dos categorías:
        </p>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>Salario W-2:</strong> Debe pagarse a sí mismo un "salario razonable" por los servicios prestados. Este salario está sujeto a impuestos de nómina (impuestos de trabajo autónomo/FICA).</li>
          <li><strong>Distribuciones de Accionistas:</strong> Las ganancias netas restantes se pagan como distribuciones. Las distribuciones <strong>no</strong> están sujetas a impuestos de trabajo autónomo; solo se someten al impuesto regular sobre la renta.</li>
        </ol>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Una Comparación Matemática Rápida</h2>
        <p class="mb-4">
          Supongamos que su negocio genera <strong>$100,000 en ganancias netas</strong>:
        </p>
        <div class="overflow-x-auto rounded-xl border border-slate-100 mb-6">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-100">
                <th class="py-3 px-4 font-bold text-slate-800">Concepto Fiscal</th>
                <th class="py-3 px-4 font-bold text-slate-800">LLC Estándar</th>
                <th class="py-3 px-4 font-bold text-slate-800">Clasificación S-Corp</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4">Salario Razonable W-2</td>
                <td class="py-3 px-4">$0</td>
                <td class="py-3 px-4">$60,000</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4">Distribución de Accionista</td>
                <td class="py-3 px-4">$100,000</td>
                <td class="py-3 px-4">$40,000</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4">Sujeto a 15.3% de Impuesto Autónomo</td>
                <td class="py-3 px-4">$100,000</td>
                <td class="py-3 px-4">$60,000 (Solo salario)</td>
              </tr>
              <tr class="font-bold bg-blue-50/50">
                <td class="py-3 px-4 text-blue-900">Impuesto Autónomo Total</td>
                <td class="py-3 px-4 text-red-600">$15,300</td>
                <td class="py-3 px-4 text-emerald-600">$9,180 (¡Ahorra $6,120!)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">¿Cuándo Vale la Pena la S-Corp?</h2>
        <p class="mb-6">
          Establecer una S-Corp introduce costos administrativos (salario de nómina, presentación corporativa Formulario 1120-S y contabilidad más rigurosa). Normalmente, los ahorros fiscales superan estos costos una vez que la ganancia neta supera constantemente los <strong>$50,000 a $60,000 por año</strong>.
        </p>

        <div class="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-6">
          <h4 class="font-bold text-blue-900 mb-2">Evalúe su Elegibilidad para S-Corp con XLG Solutions</h4>
          <p class="text-sm text-blue-800 leading-relaxed">
            ¿Interesado en optimizar los impuestos de su negocio? Evaluamos sus finanzas comerciales, le guiamos en el registro de S-Corp e integramos su nómina. Agende una consulta gratuita hoy mismo.
          </p>
        </div>
      `
    },
    {
      id: 'selecting-health-insurance-network',
      title: 'HMO, PPO & EPO: Selecting the Right Health Insurance Network',
      titleEs: 'HMO, PPO y EPO: Eligiendo la Red de Seguro Médico Correcta',
      category: 'Health Insurance',
      categoryEs: 'Seguro de Salud',
      date: 'June 15, 2026',
      readTime: '4 min read',
      readTimeEs: '4 min de lectura',
      author: 'Adrian Lara',
      summary: "Don't get caught with out-of-network bills. We compare HMO, PPO, and EPO doctor networks, specialist referral requirements, and cost differences.",
      summaryEs: 'No se quede con facturas fuera de la red. Comparamos las redes de médicos HMO, PPO y EPO, los requisitos de referencia de especialistas y las diferencias de costos.',
      contentMarkup: `
        <p class="lead text-lg font-medium text-slate-600 mb-6">
          When choosing an ACA Marketplace or private health insurance plan, you will encounter network abbreviations like HMO, PPO, and EPO. Understanding these network rules is crucial to ensure your favorite doctors are covered and to prevent unexpected out-of-pocket medical bills.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">1. HMO (Health Maintenance Organization)</h2>
        <p class="mb-4">
          HMO plans focus on a local network of participating doctors and hospitals. They generally require you to choose a Primary Care Physician (PCP) who coordinates all your care.
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Out-of-Network:</strong> Not covered (except for emergencies). You pay 100% out of pocket.</li>
          <li><strong>Specialist Referrals:</strong> Required. You must see your PCP first to get a referral to see a specialist.</li>
          <li><strong>Costs:</strong> Typically have the lowest monthly premiums and lower deductibles.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">2. PPO (Preferred Provider Organization)</h2>
        <p class="mb-4">
          PPO plans provide maximum flexibility, allowing you to see any medical doctor or specialist without a referral from a primary doctor, both inside and outside the plan network.
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Out-of-Network:</strong> Covered. However, the plan pays a lower percentage for out-of-network care than in-network.</li>
          <li><strong>Specialist Referrals:</strong> Not required. You can book appointments directly with specialists.</li>
          <li><strong>Costs:</strong> Highest monthly premiums and higher out-of-pocket costs.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">3. EPO (Exclusive Provider Organization)</h2>
        <p class="mb-4">
          EPO plans represent a hybrid model between HMOs and PPOs. They give you the freedom to see specialists without referrals, but restrict you strictly to in-network providers.
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Out-of-Network:</strong> Not covered (except for emergencies).</li>
          <li><strong>Specialist Referrals:</strong> Not required. You can see in-network specialists directly.</li>
          <li><strong>Costs:</strong> Premiums are usually lower than a PPO, but slightly higher than an HMO.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Quick Network Summary Table</h2>
        <div class="overflow-x-auto rounded-xl border border-slate-100 mb-6">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-100">
                <th class="py-3 px-4 font-bold text-slate-800">Network Type</th>
                <th class="py-3 px-4 font-bold text-slate-800">Referrals Required?</th>
                <th class="py-3 px-4 font-bold text-slate-800">Out-of-Network Covered?</th>
                <th class="py-3 px-4 font-bold text-slate-800">Relative Premium Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4 font-semibold text-slate-900">HMO</td>
                <td class="py-3 px-4 text-slate-600">Yes</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-emerald-600">Lowest</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4 font-semibold text-slate-900">PPO</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-slate-600">Yes</td>
                <td class="py-3 px-4 text-red-600">Highest</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4 font-semibold text-slate-900">EPO</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-amber-600">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-6">
          <h4 class="font-bold text-blue-900 mb-2">Find the Perfect Health Plan with XLG Solutions</h4>
          <p class="text-sm text-blue-800 leading-relaxed">
            Need help selecting an Obamacare or private health insurance plan that includes your primary doctors and medications? We audit plans, verify networks, and help you enroll in under 20 minutes. Contact our licensed Florida advisors today.
          </p>
        </div>
      `,
      contentMarkupEs: `
        <p class="lead text-lg font-medium text-slate-600 mb-6">
          Al elegir un plan del mercado de ACA (Obamacare) o un seguro médico privado, se encontrará con siglas de redes de proveedores como HMO, PPO y EPO. Comprender estas reglas de red es crucial para asegurarse de que sus médicos favoritos estén incluidos.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">1. HMO (Organización de Mantenimiento de la Salud)</h2>
        <p class="mb-4">
          Los planes HMO se centran en una red local de médicos y hospitales asociados. Por lo general, requieren que elija un Médico de Atención Primaria (PCP) que coordine toda su atención.
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Fuera de la Red:</strong> No cubierto (excepto emergencias). Usted paga el 100% de su bolsillo.</li>
          <li><strong>Referencias a Especialistas:</strong> Requerido. Debe ver a su PCP primero para que le dé una referencia.</li>
          <li><strong>Costos:</strong> Suelen tener las primas mensuales y deducibles más bajos.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">2. PPO (Organización de Proveedores Preferidos)</h2>
        <p class="mb-4">
          Los planes PPO brindan la máxima flexibilidad, lo que le permite ver a cualquier médico o especialista sin necesidad de referencias, tanto dentro como fuera de la red del plan.
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Fuera de la Red:</strong> Cubierto. Sin embargo, el plan paga un porcentaje menor que en la red.</li>
          <li><strong>Referencias a Especialistas:</strong> No requerido. Puede concertar citas directamente.</li>
          <li><strong>Costos:</strong> Primas mensuales más altas y mayores gastos de su bolsillo.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">3. EPO (Organización de Proveedores Exclusivos)</h2>
        <p class="mb-4">
          Los planes EPO representan un modelo híbrido entre HMO y PPO. Le dan la libertad de ver especialistas sin referencias, pero le limitan estrictamente a la red del plan.
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Fuera de la Red:</strong> No cubierto (excepto emergencias).</li>
          <li><strong>Referencias a Especialistas:</strong> No requerido. Puede consultar directamente a especialistas dentro de la red.</li>
          <li><strong>Costos:</strong> Las primas suelen ser más bajas que un PPO, pero ligeramente superiores a un HMO.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 font-display mt-8 mb-4">Tabla de Resumen de Redes</h2>
        <div class="overflow-x-auto rounded-xl border border-slate-100 mb-6">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-100">
                <th class="py-3 px-4 font-bold text-slate-800">Tipo de Red</th>
                <th class="py-3 px-4 font-bold text-slate-800">¿Requiere Referencias?</th>
                <th class="py-3 px-4 font-bold text-slate-800">¿Cubre Fuera de Red?</th>
                <th class="py-3 px-4 font-bold text-slate-800">Costo de Prima</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4 font-semibold text-slate-900">HMO</td>
                <td class="py-3 px-4 text-slate-600">Sí</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-emerald-600">El más bajo</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4 font-semibold text-slate-900">PPO</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-slate-600">Sí</td>
                <td class="py-3 px-4 text-red-600">El más alto</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-4 font-semibold text-slate-900">EPO</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-slate-600">No</td>
                <td class="py-3 px-4 text-amber-600">Moderado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-6">
          <h4 class="font-bold text-blue-900 mb-2">Encuentre el Plan Perfecto con XLG Solutions</h4>
          <p class="text-sm text-blue-800 leading-relaxed">
            ¿Necesita ayuda para elegir un plan de Obamacare o seguro privado que incluya a sus doctores y medicamentos? Evaluamos planes y le inscribimos en minutos. Contacte a nuestros asesores licenciados en Florida hoy mismo.
          </p>
        </div>
      `
    }
  ];

  getResources(): Resource[] {
    return this.resources;
  }

  getResourceById(id: string): Resource | undefined {
    return this.resources.find(res => res.id === id);
  }
}
