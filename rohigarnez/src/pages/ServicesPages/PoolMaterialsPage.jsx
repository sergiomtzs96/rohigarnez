import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import { 
  Package, 
  TestTube,
  Brush,
  Settings,
  Lightbulb,
  Waves,
  PlayCircle,
  Award,
  TrendingUp,
  Shield,
  Truck,
  ShoppingCart,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
  Box,
  Zap
} from 'lucide-react';



export function PoolMaterialsPage({ onNavigate }) {
  const categories = [
    {
      title: 'Tratamiento Químico',
      description: 'Reactivos y compuestos de alta pureza.',
      icon: TestTube,
      code: 'CHM-01',
      items: [
         'Tricloro (90% concentración)',
         'Minorador pH (Ácido Sulfúrico 15%)',
         'Floculante Polimérico',
         'Algicida No Espumante'
      ]
    },
    {
      title: 'Equipamiento Limpieza',
      description: 'Instrumentación manual y automatizada.',
      icon: Brush,
      code: 'CLN-02',
      items: [
         'Robots de Ciclo Inteligente',
         'Aspiradores Hidráulicos',
         'Pértigas Telescópicas Aluminio',
         'Cepillos de Cerdas Acero/Nylon'
      ]
    },
    {
      title: 'Recambios Técnicos',
      description: 'Componentes originales certificados.',
      icon: Settings,
      code: 'SPR-03',
      items: [
         'Cestas Pre-Filtro (Bomba)',
         'Juntas Tóricas EPDM',
         'Células de Electrólisis',
         'Manómetros de Glicerina'
      ]
    },
    {
      title: 'Iluminación Técnica',
      description: 'Sistemas LED de alta eficiencia.',
      icon: Lightbulb,
      code: 'LED-04',
      items: [
         'Proyectores LED RGB+W',
         'Lámparas PAR56 Inox',
         'Controladores DMX/WiFi',
         'Pasamuros Estancos'
      ]
    },
    {
      title: 'Accesorios Inox',
      description: 'Acero marino AISI-316L.',
      icon: Waves,
      code: 'INX-05',
      items: [
         'Escaleras Standard/Muro',
         'Duchas Solares Colector',
         'Barandillas de Acceso',
         'Cascadas Laminares'
      ]
    },
    {
      title: 'Material Vaso',
      description: 'Revestimientos y acabados.',
      icon: Box,
      code: 'MAT-06',
      items: [
         'Gresite Vítreo Antideslizante',
         'Lámina Armada 1.5mm',
         'Lechada Epoxi',
         'Imprimaciones Adherencia'
      ]
    }
  ];

  const supplyChain = [
    {
       step: "01",
       title: "Selección",
       desc: "Catálogo filtrado por criterios de durabilidad y eficiencia técnica."
    },
    {
       step: "02",
       title: "Logística",
       desc: "Almacén automatizado con control de stock en tiempo real."
    },
    {
       step: "03",
       title: "Entrega",
       desc: "Distribución en 24h para referencias en stock permanente."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#70a2ad]/20">
      
      {/* Header Section */}
      <section className="bg-[#141516] text-white pt-32 pb-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
           <div className="absolute top-0 right-1/3 w-px h-full bg-white/5"></div>
           <div className="absolute bottom-0 left-1/4 w-px h-2/3 bg-white/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#70a2ad]"></div>
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Suministro Técnico</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                Materiales y <br/>
                <span className="text-[#70a2ad] font-medium">Componentes</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                 Abastecimiento profesional para instalaciones acuáticas. Calidad certificada, trazabilidad y stock permanente de referencias críticas.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium"
                >
                  Solicitar Catálogo
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-full min-h-[300px] border border-white/10 bg-white/5 backdrop-blur-sm p-8">
               <div className="absolute top-0 right-0 p-2">
                  <Package className="h-6 w-6 text-[#70a2ad] opacity-50" />
               </div>
               <div className="h-full flex flex-col justify-between">
                  <div className="space-y-6">
                     <h3 className="text-white font-[Urbanist] mb-2">Disponibilidad Inmediata</h3>
                     
                     <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                           <span className="text-xs font-mono text-gray-400">QUÍMICOS</span>
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                              <span className="text-xs font-mono text-white">STOCK ALTO</span>
                           </div>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                           <span className="text-xs font-mono text-gray-400">REPUESTOS</span>
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                              <span className="text-xs font-mono text-white">STOCK MEDIO</span>
                           </div>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                           <span className="text-xs font-mono text-gray-400">ROBOTS</span>
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                              <span className="text-xs font-mono text-white">BAJO PEDIDO</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-8">
                     <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                        <Database className="h-4 w-4" />
                        <span>SISTEMA DE GESTIÓN ERP V.4.2</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - Technical Layout */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                     Catálogo de <span className="font-medium text-[#70a2ad]">Referencias</span>
                  </h2>
               </div>
               <div className="mt-4 md:mt-0">
                  <span className="text-xs font-mono text-[#141516] uppercase tracking-widest">Clasificación Técnica</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141516]/10 border border-[#141516]/10">
               {categories.map((cat, i) => (
                  <div key={i} className="bg-white p-10 hover:bg-gray-50 transition-colors group">
                     <div className="flex justify-between items-start mb-6">
                        <cat.icon className="h-8 w-8 text-[#141516] stroke-[1] group-hover:text-[#70a2ad] transition-colors" />
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1">{cat.code}</span>
                     </div>
                     
                     <h3 className="text-xl font-medium text-[#141516] mb-2 font-[Urbanist]">{cat.title}</h3>
                     <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 h-10">
                        {cat.description}
                     </p>
                     
                     <ul className="space-y-2 border-t border-[#141516]/5 pt-6">
                        {cat.items.map((item, j) => (
                           <li key={j} className="flex items-center gap-2 text-xs text-gray-600 font-mono">
                              <div className="w-1 h-1 bg-[#70a2ad] rounded-full"></div>
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Logistics Process - Dark */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
               <div className="max-w-2xl">
                  <h2 className="text-3xl font-light mb-6 font-[Urbanist]">
                     Logística y <span className="text-[#70a2ad]">Distribución</span>
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed">
                     Optimizamos la cadena de suministro para garantizar que su instalación nunca se detenga por falta de material.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
               {supplyChain.map((item, i) => (
                  <div key={i} className="group">
                     <div className="text-5xl font-light text-white/10 font-[Urbanist] mb-4 group-hover:text-[#70a2ad] transition-colors duration-500">
                        {item.step}
                     </div>
                     <h3 className="text-lg font-medium text-white mb-3 font-[Urbanist] uppercase tracking-wide">{item.title}</h3>
                     <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Service Promise Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="p-6 border border-[#141516]/10 text-center">
                 <Truck className="h-8 w-8 text-[#141516] mx-auto mb-4" />
                 <h4 className="font-medium text-sm text-[#141516] uppercase tracking-wide mb-2">Envío 24/48h</h4>
                 <p className="text-xs text-gray-500">Para referencias en stock</p>
              </div>
              <div className="p-6 border border-[#141516]/10 text-center">
                 <Shield className="h-8 w-8 text-[#141516] mx-auto mb-4" />
                 <h4 className="font-medium text-sm text-[#141516] uppercase tracking-wide mb-2">Garantía Oficial</h4>
                 <p className="text-xs text-gray-500">Distribuidores autorizados</p>
              </div>
              <div className="p-6 border border-[#141516]/10 text-center">
                 <TrendingUp className="h-8 w-8 text-[#141516] mx-auto mb-4" />
                 <h4 className="font-medium text-sm text-[#141516] uppercase tracking-wide mb-2">Precios Mayorista</h4>
                 <p className="text-xs text-gray-500">Descuentos por volumen</p>
              </div>
              <div className="p-6 border border-[#141516]/10 text-center">
                 <Award className="h-8 w-8 text-[#141516] mx-auto mb-4" />
                 <h4 className="font-medium text-sm text-[#141516] uppercase tracking-wide mb-2">Calidad ISO</h4>
                 <p className="text-xs text-gray-500">Productos certificados</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#141516] text-white overflow-hidden relative border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
           <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
           <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-10">
             <div className="h-px w-24 bg-[#70a2ad]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-8 font-[Urbanist] tracking-tight">
            Suministro <span className="text-[#70a2ad]">Profesional</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
             Acceda a nuestro catálogo técnico completo y tarifas para profesionales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => onNavigate('contact')}
              size="lg"
              className="min-w-[240px] bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none h-14 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Contactar Ahora
            </Button>
            <Button 
              onClick={() => onNavigate('services-overview')}
              size="lg"
              variant="outline"
              className="min-w-[240px] border border-white/20 text-white hover:bg-white/5 hover:text-white hover:border-white rounded-none bg-transparent h-14 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}