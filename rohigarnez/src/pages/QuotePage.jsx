import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Droplets, 
  Home, 
  Building2, 
  Calendar, 
  MapPin,
  Ruler,
  Settings,
  FileText,
  Mail,
  Phone,
  User,
  CheckCircle2,
  Printer,
  Calculator,
  ScanLine,
  ChevronRight,
  Terminal,
  Grid
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';





export function QuotePage({ onNavigate }) {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  // Form data
  const [serviceType, setServiceType] = useState('');
  const [poolType, setPoolType] = useState('');
  const [poolSize, setPoolSize] = useState('');
  const [frequency, setFrequency] = useState('');
  const [location, setLocation] = useState('');
  const [hasHeating, setHasHeating] = useState(false);
  const [hasSaltSystem, setHasSaltSystem] = useState(false);
  const [needsChemicals, setNeedsChemicals] = useState(false);
  
  // Contact info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [showResult, setShowResult] = useState(false);

  const calculateEstimate = () => {
    let basePrice = 0;

    // Base price by service type
    switch (serviceType) {
      case 'mantenimiento': basePrice = 80; break;
      case 'reparacion': basePrice = 150; break;
      case 'construccion': basePrice = 15000; break;
      case 'rehabilitacion': basePrice = 5000; break;
    }

    if (poolType === 'comunitaria') basePrice *= 1.5;

    switch (poolSize) {
      case 'mediana': basePrice *= 1.3; break;
      case 'grande': basePrice *= 1.6; break;
      case 'olimpica': basePrice *= 2.2; break;
    }

    if (serviceType === 'mantenimiento') {
      switch (frequency) {
        case 'semanal': basePrice *= 4; break;
        case 'quincenal': basePrice *= 2; break;
      }
    }

    if (hasHeating) basePrice += (serviceType === 'construccion' ? 3000 : 50);
    if (hasSaltSystem) basePrice += (serviceType === 'construccion' ? 2000 : 30);
    if (needsChemicals) basePrice += 40;

    return Math.round(basePrice);
  };

  const getServiceName = () => {
    const services = {
      mantenimiento: 'Mantenimiento Regular',
      reparacion: 'Reparación Técnica',
      construccion: 'Ingeniería y Construcción',
      rehabilitacion: 'Rehabilitación Integral'
    };
    return services[serviceType] || '';
  };

  const getPoolTypeName = () => poolType === 'residencial' ? 'Residencial' : 'Comunitaria';
  
  const getPoolSizeName = () => {
    const sizes = {
      pequena: '< 30m²',
      mediana: '30-60m²',
      grande: '60-100m²',
      olimpica: '> 100m²'
    };
    return sizes[poolSize] || '';
  };

  const getFrequencyName = () => {
    const frequencies = {
      semanal: 'Semanal',
      quincenal: 'Quincenal',
      mensual: 'Mensual',
      unica: 'Intervención Única'
    };
    return frequencies[frequency] || '';
  };

  const canProceed = () => {
    switch (step) {
      case 1: return serviceType !== '';
      case 2: return poolType !== '' && poolSize !== '';
      case 3: return serviceType === 'mantenimiento' ? frequency !== '' : true;
      case 4: return location !== '';
      case 5: return name !== '' && email !== '';
      default: return true;
    }
  };

  const handleNext = () => {
    if (step === totalSteps) setShowResult(true);
    else setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onNavigate('home');
  };

  if (showResult) {
    const total = calculateEstimate();
    const iva = Math.round(total * 0.21);
    const totalWithIva = total + iva;
    const quoteNumber = `AQP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
    const today = new Date().toLocaleDateString('es-ES');

    return (
      <div className="min-h-screen bg-white font-sans selection:bg-[#70a2ad]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex justify-between items-center mb-12 print:hidden">
             <Button
                variant="outline"
                onClick={() => setShowResult(false)}
                className="rounded-none border-gray-300 text-gray-600 hover:bg-gray-50 h-10 px-6 uppercase text-xs tracking-widest"
             >
               <ArrowLeft className="w-4 h-4 mr-2" />
               Modificar Datos
             </Button>
             <Button
                variant="outline"
                onClick={() => window.print()}
                className="rounded-none border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white h-10 px-6 uppercase text-xs tracking-widest"
             >
               <Printer className="w-4 h-4 mr-2" />
               Imprimir Ficha
             </Button>
          </div>

          <div className="print-area border border-[#141516]/10 p-12 bg-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#141516]/5 -skew-x-12 translate-x-16 -translate-y-16"></div>
             
             {/* Header Documento */}
             <div className="flex justify-between items-end border-b-2 border-[#141516] pb-8 mb-12">
                <div>
                   <h1 className="text-3xl font-[Urbanist] font-light text-[#141516] mb-2">Presupuesto Estimado</h1>
                   <div className="flex gap-4 text-xs font-mono text-gray-500">
                      <span>REF: {quoteNumber}</span>
                      <span>FECHA: {today}</span>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Total Estimado</div>
                   <div className="text-4xl font-light text-[#70a2ad] font-[Urbanist]">{totalWithIva.toLocaleString('es-ES')}€</div>
                   <div className="text-xs text-gray-400 font-mono">(IVA Incluido)</div>
                </div>
             </div>

             {/* Datos Cliente */}
             <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                   <h3 className="text-xs uppercase tracking-widest font-mono text-gray-400 mb-4 border-b border-gray-100 pb-2">Cliente</h3>
                   <div className="space-y-1 text-sm text-[#141516]">
                      <p className="font-medium">{name}</p>
                      <p>{email}</p>
                      <p>{phone}</p>
                      <p className="text-gray-500">{location}</p>
                   </div>
                </div>
                <div>
                   <h3 className="text-xs uppercase tracking-widest font-mono text-gray-400 mb-4 border-b border-gray-100 pb-2">Especificaciones</h3>
                   <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                         <span className="text-gray-400 block text-xs">Servicio</span>
                         <span className="font-medium">{getServiceName()}</span>
                      </div>
                      <div>
                         <span className="text-gray-400 block text-xs">Tipología</span>
                         <span className="font-medium">{getPoolTypeName()}</span>
                      </div>
                      <div>
                         <span className="text-gray-400 block text-xs">Dimensiones</span>
                         <span className="font-medium">{getPoolSizeName()}</span>
                      </div>
                      {frequency && (
                        <div>
                           <span className="text-gray-400 block text-xs">Frecuencia</span>
                           <span className="font-medium">{getFrequencyName()}</span>
                        </div>
                      )}
                   </div>
                </div>
             </div>

             {/* Desglose */}
             <div className="mb-12">
                <table className="w-full text-sm">
                   <thead>
                      <tr className="border-b border-[#141516]/10">
                         <th className="text-left py-3 font-mono text-xs text-gray-500 font-normal uppercase">Concepto</th>
                         <th className="text-right py-3 font-mono text-xs text-gray-500 font-normal uppercase">Importe</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50 text-[#141516]">
                      <tr>
                         <td className="py-4">Servicio Base: {getServiceName()}</td>
                         <td className="py-4 text-right font-medium">{calculateEstimate().toLocaleString('es-ES')}€</td>
                      </tr>
                      {hasHeating && (
                         <tr>
                            <td className="py-4">Climatización</td>
                            <td className="py-4 text-right text-gray-500">Incluido</td>
                         </tr>
                      )}
                      {hasSaltSystem && (
                         <tr>
                            <td className="py-4">Sist. Cloración Salina</td>
                            <td className="py-4 text-right text-gray-500">Incluido</td>
                         </tr>
                      )}
                   </tbody>
                </table>
             </div>

             {/* Footer Legal */}
             <div className="bg-gray-50 p-6 text-xs text-gray-500 font-mono leading-relaxed">
                Este documento es una estimación preliminar basada en los datos proporcionados y no constituye una oferta contractual vinculante. 
                Los precios finales están sujetos a inspección técnica in situ por parte de nuestros ingenieros.
                Validez de la oferta: 30 días.
             </div>
          </div>

          <div className="mt-12 text-center print:hidden">
             <Button
                onClick={() => onNavigate('contact')}
                className="bg-[#141516] text-white hover:bg-[#70a2ad] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium"
             >
                Solicitar Visita Técnica
             </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="print:hidden min-h-screen bg-white font-sans selection:bg-[#70a2ad]/20">
      
      {/* Header */}
      <section className="bg-[#141516] text-white pt-24 pb-12 relative overflow-hidden border-b border-white/10">
         <div className="absolute inset-0 pointer-events-none">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <div className="inline-flex items-center gap-2 mb-4 text-[#70a2ad]">
              <Calculator className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Sistema de Cotización</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-light mb-4 font-[Urbanist]">
              Configurador de <span className="text-[#70a2ad]">Presupuesto</span>
           </h1>
           <p className="text-gray-400 font-light max-w-xl mx-auto">
              Herramienta de estimación de costes para proyectos de ingeniería y mantenimiento acuático.
           </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Progress Bar - Technical Style */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
             <div className="flex items-center gap-3">
                <span className="text-4xl font-light text-[#141516] font-[Urbanist]">0{step}</span>
                <div className="h-8 w-px bg-gray-200 rotate-12"></div>
                <span className="text-sm text-gray-400 uppercase tracking-widest font-mono">Fase 0{totalSteps}</span>
             </div>
             <div className="text-xs font-mono text-[#70a2ad]">{Math.round((step / totalSteps) * 100)}% COMPLETADO</div>
          </div>
          <div className="h-px bg-gray-200 w-full relative">
             <div 
                className="absolute top-0 left-0 h-full bg-[#141516] transition-all duration-500 ease-out"
                style={{ width: `${(step / totalSteps) * 100}%` }}
             >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#141516] rotate-45"></div>
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="min-h-[400px]">
          
          {/* Step 1: Service Type */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h2 className="text-xl font-light text-[#141516] mb-8 font-[Urbanist]">Seleccione Tipo de Intervención</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                  {[
                     { id: 'mantenimiento', icon: Droplets, label: 'Mantenimiento Regular', desc: 'Preventivo y Correctivo' },
                     { id: 'reparacion', icon: Settings, label: 'Reparación Técnica', desc: 'Averías y Fugas' },
                     { id: 'construccion', icon: Building2, label: 'Obra Nueva', desc: 'Proyecto Integral' },
                     { id: 'rehabilitacion', icon: FileText, label: 'Rehabilitación', desc: 'Modernización' }
                  ].map((item) => (
                     <button
                        key={item.id}
                        onClick={() => setServiceType(item.id)}
                        className={`
                           group p-8 text-left transition-all relative bg-white
                           hover:bg-gray-50
                           ${serviceType === item.id ? 'bg-[#141516] text-white hover:bg-[#141516]' : 'text-[#141516]'}
                        `}
                     >
                        <div className="flex justify-between items-start mb-4">
                           <item.icon className={`w-6 h-6 stroke-[1.5] ${serviceType === item.id ? 'text-[#70a2ad]' : 'text-gray-400 group-hover:text-[#141516]'}`} />
                           {serviceType === item.id && <div className="w-2 h-2 bg-[#70a2ad]"></div>}
                        </div>
                        <h3 className="font-medium text-lg mb-1 font-[Urbanist]">{item.label}</h3>
                        <p className={`text-xs font-mono ${serviceType === item.id ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
                     </button>
                  ))}
               </div>
            </div>
          )}

          {/* Step 2: Pool Details */}
          {step === 2 && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div>
                  <h2 className="text-xl font-light text-[#141516] mb-6 font-[Urbanist]">Tipología de Instalación</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                        { id: 'residencial', icon: Home, label: 'Residencial Privada' },
                        { id: 'comunitaria', icon: Building2, label: 'Colectiva / Pública' }
                     ].map((item) => (
                        <button
                           key={item.id}
                           onClick={() => setPoolType(item.id)}
                           className={`
                              flex items-center gap-4 p-6 border transition-all text-left
                              ${poolType === item.id 
                                 ? 'border-[#141516] bg-[#141516] text-white' 
                                 : 'border-gray-200 bg-white hover:border-[#141516]'}
                           `}
                        >
                           <item.icon className={`w-5 h-5 ${poolType === item.id ? 'text-[#70a2ad]' : 'text-gray-400'}`} />
                           <span className="font-medium font-[Urbanist]">{item.label}</span>
                        </button>
                     ))}
                  </div>
               </div>

               <div>
                  <h2 className="text-xl font-light text-[#141516] mb-6 font-[Urbanist]">Dimensiones de Vaso</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {[
                        { id: 'pequena', label: 'Pequeña', sub: '< 30m²' },
                        { id: 'mediana', label: 'Mediana', sub: '30-60m²' },
                        { id: 'grande', label: 'Grande', sub: '60-100m²' },
                        { id: 'olimpica', label: 'Olímpica', sub: '> 100m²' }
                     ].map((item) => (
                        <button
                           key={item.id}
                           onClick={() => setPoolSize(item.id)}
                           className={`
                              p-4 border text-center transition-all
                              ${poolSize === item.id 
                                 ? 'border-[#70a2ad] bg-[#70a2ad]/5' 
                                 : 'border-gray-200 hover:border-gray-300'}
                           `}
                        >
                           <Grid className={`w-6 h-6 mx-auto mb-3 stroke-[1] ${poolSize === item.id ? 'text-[#70a2ad]' : 'text-gray-300'}`} />
                           <div className="font-medium text-sm text-[#141516] mb-1">{item.label}</div>
                           <div className="text-xs font-mono text-gray-500">{item.sub}</div>
                        </button>
                     ))}
                  </div>
               </div>
            </div>
          )}

          {/* Step 3: Specs */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h2 className="text-xl font-light text-[#141516] mb-8 font-[Urbanist]">Especificaciones Técnicas</h2>
               
               {serviceType === 'mantenimiento' && (
                  <div className="mb-8 pb-8 border-b border-gray-100">
                     <label className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-4 block">Frecuencia de Visita</label>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['semanal', 'quincenal', 'mensual', 'unica'].map((f) => (
                           <button
                              key={f}
                              onClick={() => setFrequency(f)}
                              className={`
                                 py-3 px-4 text-sm border font-mono uppercase transition-all
                                 ${frequency === f ? 'border-[#141516] bg-[#141516] text-white' : 'border-gray-200 text-gray-600 hover:border-gray-300'}
                              `}
                           >
                              {f}
                           </button>
                        ))}
                     </div>
                  </div>
               )}

               <div className="space-y-4">
                  {[
                     { label: 'Sistema de Climatización', state: hasHeating, setter: setHasHeating },
                     { label: 'Cloración Salina', state: hasSaltSystem, setter: setHasSaltSystem },
                     { label: 'Suministro de Químicos', state: needsChemicals, setter: setNeedsChemicals, show: serviceType === 'mantenimiento' }
                  ].map((item, idx) => (
                     (!('show' in item) || item.show) && (
                        <div 
                           key={idx}
                           onClick={() => item.setter(!item.state)}
                           className={`
                              flex items-center justify-between p-5 border cursor-pointer transition-all
                              ${item.state ? 'border-[#70a2ad] bg-[#70a2ad]/5' : 'border-gray-200 hover:bg-gray-50'}
                           `}
                        >
                           <span className="font-medium text-[#141516]">{item.label}</span>
                           <div className={`w-5 h-5 border flex items-center justify-center ${item.state ? 'border-[#70a2ad] bg-[#70a2ad] text-white' : 'border-gray-300'}`}>
                              {item.state && <Check className="w-3 h-3" />}
                           </div>
                        </div>
                     )
                  ))}
               </div>
            </div>
          )}

          {/* Step 4: Location */}
          {step === 4 && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-lg">
               <h2 className="text-xl font-light text-[#141516] mb-8 font-[Urbanist]">Ubicación del Proyecto</h2>
               
               <div className="space-y-6">
                  <div>
                     <Label className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2 block">Ciudad / Municipio</Label>
                     <div className="relative">
                        <MapPin className="absolute left-0 top-3 w-5 h-5 text-gray-400" />
                        <Input
                           value={location}
                           onChange={(e) => setLocation(e.target.value)}
                           className="pl-8 border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:border-[#70a2ad] focus:ring-0 shadow-none h-12 text-lg"
                           placeholder="Ej. Madrid"
                        />
                     </div>
                  </div>

                  <div className="p-6 bg-gray-50 border border-gray-100">
                     <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Cobertura Principal</div>
                     <div className="flex flex-wrap gap-2">
                        {['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Málaga'].map((city) => (
                           <span key={city} className="bg-white border border-gray-200 px-3 py-1 text-xs text-gray-600">
                              {city}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
             </div>
          )}

          {/* Step 5: Contact */}
          {step === 5 && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
               <h2 className="text-xl font-light text-[#141516] mb-8 font-[Urbanist]">Datos de Contacto</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                     <div>
                        <Label className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2 block">Nombre Completo</Label>
                        <Input
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           className="border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:border-[#70a2ad] focus:ring-0 shadow-none h-10"
                        />
                     </div>
                     <div>
                        <Label className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2 block">Email</Label>
                        <Input
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:border-[#70a2ad] focus:ring-0 shadow-none h-10"
                        />
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div>
                        <Label className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2 block">Teléfono</Label>
                        <Input
                           type="tel"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           className="border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:border-[#70a2ad] focus:ring-0 shadow-none h-10"
                        />
                     </div>
                     <div>
                        <Label className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2 block">Notas Adicionales</Label>
                        <Input
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                           className="border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:border-[#70a2ad] focus:ring-0 shadow-none h-10"
                           placeholder="Opcional"
                        />
                     </div>
                  </div>
               </div>

               <div className="flex items-start gap-3 p-4 bg-[#141516]/5 text-xs text-gray-600">
                  <Terminal className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>Al procesar esta solicitud, sus datos serán tratados por nuestro sistema de gestión técnica para la elaboración del presupuesto formal.</p>
               </div>
             </div>
          )}

        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
           <Button
              variant="ghost"
              onClick={handleBack}
              className="text-gray-500 hover:text-[#141516] rounded-none px-0 hover:bg-transparent"
           >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {step === 1 ? 'CANCELAR' : 'ANTERIOR'}
           </Button>

           <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-[#141516] text-white hover:bg-[#70a2ad] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed"
           >
              {step === totalSteps ? 'GENERAR PRESUPUESTO' : 'SIGUIENTE PASO'}
              {step !== totalSteps && <ChevronRight className="w-4 h-4 ml-2" />}
           </Button>
        </div>

      </div>
    </div>
  );
}