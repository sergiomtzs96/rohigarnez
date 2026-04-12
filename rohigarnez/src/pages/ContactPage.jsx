import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building2, Radio } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useContactForm } from '../hooks/useContactForm';


export function ContactPage({ onNavigate }) {
   
   const {
      formData,
      isSubmitted,
      handleInputChange,
      handleSubmit
   } = useContactForm();

   const iconMap = {
      Phone,
      Mail,
      MessageSquare
   }

   const [contactData, setContactData] = useState(null);

   useEffect(() => {
      const fetchContactData = async () => {
         try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/info/contactpage`);
            const data = await res.json();
            setContactData(data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchContactData();
   }, []);

   return (
      <div className="min-h-screen bg-white font-sans selection:bg-[#70a2ad]/20">

         {/* Header Section */}
         <section className="bg-[#141516] text-white pt-32 pb-20 relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
               <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                  <div>
                     <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-[#70a2ad]"></div>
                        <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Contacto Directo</span>
                     </div>
                     <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                        Oficina <br />
                        <span className="text-[#70a2ad] font-medium">Técnica</span>
                     </h1>
                     <p className="text-xl text-gray-400 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                        Canal directo con nuestro departamento de ingeniería y soporte. Resolvemos consultas técnicas y administrativas.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#141516]/10 bg-white shadow-2xl shadow-[#141516]/5">

               {/* Contact Info Sidebar */}
               <div className="bg-[#141516] text-white p-12 lg:col-span-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Building2 className="w-24 h-24" />
                  </div>

                  <div className="space-y-12 relative z-10">
                     <div>
                        <h3 className="text-lg font-medium font-[Urbanist] mb-6 border-b border-white/10 pb-4">Canales de Comunicación</h3>
                        <div className="space-y-8">
                           {contactData?.contactInfo?.map((info, idx) => {
                              const Icon = iconMap[info.icon];
                              return (
                                 <div key={idx} className="group">
                                    <div className="flex items-center gap-3 text-[#70a2ad] mb-1">
                                       {Icon && <Icon className="w-4 h-4" />}
                                       <span className="text-[10px] uppercase tracking-widest font-mono">{info.label}</span>
                                    </div>
                                    <div className="text-lg font-light">{info.value}</div>
                                    <div className="text-xs text-gray-500 font-mono mt-1">{info.sub}</div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     <div>
                        <h3 className="text-lg font-medium font-[Urbanist] mb-6 border-b border-white/10 pb-4">Sede Central</h3>
                        <div className="space-y-1 text-gray-400 font-light">
                           {contactData?.headquarters?.address?.map((line, i) => {
                              <p key={line}>{line}</p>
                           })}
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[#70a2ad] text-xs font-mono">
                           <Radio className="w-3 h-3 animate-pulse" />
                           {contactData?.headquarters?.coords}
                        </div>
                     </div>
                     
                  </div>
               </div>

               {/* Contact Form */}
               <div className="lg:col-span-2 p-12 bg-white">
                  {isSubmitted ? (
                     <div className="h-full flex flex-col items-center justify-center text-center py-12">
                        <div className="w-20 h-20 bg-[#70a2ad]/10 flex items-center justify-center mb-6">
                           <Send className="w-8 h-8 text-[#70a2ad]" />
                        </div>
                        <h3 className="text-2xl font-light text-[#141516] mb-2 font-[Urbanist]">
                           Solicitud Registrada
                        </h3>
                        <p className="text-gray-500 font-light max-w-md mx-auto">
                           Su consulta ha sido asignada a un técnico especializado. Recibirá respuesta en la dirección de correo proporcionada.
                        </p>
                        <div className="mt-8 text-xs font-mono text-gray-400 border border-gray-200 px-3 py-1">
                           TICKET #{Math.floor(Math.random() * 100000)}
                        </div>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex items-center justify-between mb-8">
                           <h2 className="text-2xl font-light text-[#141516] font-[Urbanist]">Formulario de Consulta</h2>
                           <span className="text-xs text-red-500 font-mono">* CAMPOS REQUERIDOS</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <Label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 font-mono">Nombre Completo *</Label>
                              <Input
                                 id="name"
                                 name="name"
                                 required
                                 value={formData.name}
                                 onChange={handleInputChange}
                                 className="rounded-none border-t-0 border-x-0 border-b border-gray-300 focus:border-[#70a2ad] focus:ring-0 px-0 shadow-none bg-transparent h-10"
                                 placeholder="Ej. Juan Pérez"
                              />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-mono">Correo Corporativo *</Label>
                              <Input
                                 id="email"
                                 name="email"
                                 type="email"
                                 required
                                 value={formData.email}
                                 onChange={handleInputChange}
                                 className="rounded-none border-t-0 border-x-0 border-b border-gray-300 focus:border-[#70a2ad] focus:ring-0 px-0 shadow-none bg-transparent h-10"
                                 placeholder="nombre@empresa.com"
                              />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="company" className="text-xs uppercase tracking-widest text-gray-500 font-mono">Empresa / Entidad</Label>
                              <Input
                                 id="company"
                                 name="company"
                                 value={formData.company}
                                 onChange={handleInputChange}
                                 className="rounded-none border-t-0 border-x-0 border-b border-gray-300 focus:border-[#70a2ad] focus:ring-0 px-0 shadow-none bg-transparent h-10"
                                 placeholder="Opcional"
                              />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-500 font-mono">Teléfono Contacto</Label>
                              <Input
                                 id="phone"
                                 name="phone"
                                 value={formData.phone}
                                 onChange={handleInputChange}
                                 className="rounded-none border-t-0 border-x-0 border-b border-gray-300 focus:border-[#70a2ad] focus:ring-0 px-0 shadow-none bg-transparent h-10"
                                 placeholder="+34"
                              />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="service" className="text-xs uppercase tracking-widest text-gray-500 font-mono">Departamento Destino</Label>
                           <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              className="w-full px-0 py-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-[#70a2ad] bg-transparent text-sm"
                           >
                              <option value="">Seleccione Departamento...</option>
                              <option value="ingenieria">Ingeniería y Proyectos</option>
                              <option value="mantenimiento">Mantenimiento y SAT</option>
                              <option value="comercial">Comercial y Presupuestos</option>
                              <option value="administracion">Administración</option>
                           </select>
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 font-mono">Detalles Técnicos *</Label>
                           <Textarea
                              id="message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleInputChange}
                              className="rounded-none border border-gray-300 focus:border-[#70a2ad] focus:ring-0 shadow-none bg-gray-50/50 min-h-[150px] p-4 text-sm"
                              placeholder="Describa su requerimiento..."
                           />
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                           <div className="text-[10px] text-gray-400 max-w-[200px] leading-tight">
                              Al enviar este formulario acepta nuestra política de privacidad y tratamiento de datos técnicos.
                           </div>
                           <Button
                              type="submit"
                              size="lg"
                              className="bg-[#141516] text-white hover:bg-[#70a2ad] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium transition-colors"
                           >
                              Enviar Solicitud
                              <Send className="w-4 h-4 ml-2" />
                           </Button>
                        </div>
                     </form>
                  )}
               </div>
            </div>
         </div>

         {/* Map Placeholder / Service Areas */}
         <section className="pb-24 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                     <h2 className="text-3xl font-light text-[#141516] font-[Urbanist] mb-6">Cobertura <span className="text-[#70a2ad]">Técnica</span></h2>
                     <p className="text-gray-500 font-light mb-8 leading-relaxed">
                        Nuestros equipos de intervención rápida operan en las principales áreas metropolitanas, garantizando tiempos de respuesta mínimos para instalaciones críticas.
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                        {["Andalucía Occidental", "Madrid Centro", "Levante Sur", "Costa del Sol"].map((area, i) => (
                           <div key={i} className="flex items-center gap-3 p-4 border border-[#141516]/10 hover:border-[#70a2ad] transition-colors bg-white">
                              <MapPin className="w-5 h-5 text-[#70a2ad]" />
                              <span className="text-sm font-medium text-[#141516]">{area}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="h-full min-h-[300px] bg-[#141516] p-8 flex flex-col justify-between relative overflow-hidden group">
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#70a2ad_1px,transparent_1px)] [background-size:16px_16px]"></div>

                     <div className="relative z-10">
                        <Clock className="w-8 h-8 text-[#70a2ad] mb-4" />
                        <h3 className="text-xl text-white font-[Urbanist] mb-2">Servicio 24/7</h3>
                        <p className="text-gray-400 font-light text-sm max-w-xs">
                           Línea exclusiva para emergencias hidráulicas y químicas con riesgo estructural o sanitario.
                        </p>
                     </div>

                     <div className="relative z-10 mt-8">
                        <div className="text-xs font-mono text-[#70a2ad] uppercase mb-2">Número de Urgencias</div>
                        <div className="text-3xl font-light text-white tracking-wider font-mono">+34 900 999 000</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}