import { useState, useEffect, use } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/ImageWithFallback';
import {
  Filter,
  Calendar,
  MapPin,
  User,
  Award,
  ChevronRight,
  Star,
  Quote,
  Eye,
  CheckCircle,
  Clock,
  Target,
  Users,
  Building,
  ArrowRight,
  LayoutTemplate
} from 'lucide-react';




export function ProjectsPage({ onNavigate, user }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'construction', label: 'Ingeniería Civil' },
    { id: 'renovation', label: 'Rehabilitación' },
    { id: 'community', label: 'Instalaciones Colectivas' },
    { id: 'tech', label: 'Integración Técnica' }
  ];

  const [infoData, setInfoData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects/projects`
        )

        const data = await res.json();
        setProjectsData(data);
      } catch (error) {
        console.error('Error cargando ProjectsPage:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects/infoProjectsPage`
        );
        const data = await res.json();
        setInfoData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchInfo();
  }, []);

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData?.projects || []
      : projectsData?.projects?.filter(project =>
        project.category === selectedCategory
      ) || [];

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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Portfolio Técnico</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                Proyectos <br />
                <span className="text-[#70a2ad] font-medium">Realizados</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                Ingeniería aplicada al sector acuático. Una selección de nuestras intervenciones más destacadas en construcción, rehabilitación y equipamiento.
              </p>

              <div className="flex gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#141516] bg-[#2a2b2e] flex items-center justify-center text-xs text-white z-0">
                      <CheckCircle className="w-4 h-4 text-[#70a2ad]" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#141516] bg-[#70a2ad] flex items-center justify-center text-xs text-white z-10 font-bold">
                    +250
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-medium text-white">Obras Ejecutadas</span>
                  <span className="text-xs text-gray-500">Garantía de Excelencia</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative h-full min-h-[300px] border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <div className="absolute top-0 right-0 p-2">
                <LayoutTemplate className="h-6 w-6 text-[#70a2ad] opacity-50" />
              </div>
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <h3 className="text-white font-[Urbanist] mb-2">Métricas de Ejecución</h3>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-light text-white font-[Urbanist]">45</div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase">Días Promedio Obra</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-[#70a2ad] font-[Urbanist]">0%</div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase">Desviación Presupuesto</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-white font-[Urbanist]">15</div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase">Años Garantía Estruc.</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-[#70a2ad] font-[Urbanist]">100%</div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase">Cumplimiento Plazos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-[#141516]/5 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#141516]/10">
            {infoData?.stats?.map((stat, index) => (
              <div key={index} className="py-8 text-center px-4 group hover:bg-white transition-colors">
                <stat.icon className="h-6 w-6 text-[#141516] mx-auto mb-3 group-hover:text-[#70a2ad] transition-colors" />
                <div className="text-2xl font-light text-[#141516] mb-1 font-[Urbanist]">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-px bg-[#141516]/10 border border-[#141516]/10 w-fit mx-auto">
            {infoData?.categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-3 text-xs uppercase tracking-widest font-medium transition-all
                  ${selectedCategory === category.id
                    ? 'bg-[#141516] text-white'
                    : 'bg-white text-gray-500 hover:text-[#141516] hover:bg-gray-50'}
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#141516]/10 bg-white hover:border-[#70a2ad]/30 transition-colors">
                {/* Project Image */}
                <div className="lg:col-span-7 relative h-[400px] overflow-hidden">
                  <div className="absolute inset-0 bg-[#141516]/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-0 left-0 bg-[#141516] text-white text-[10px] uppercase font-bold px-4 py-2 tracking-widest z-20">
                    {categories.find(c => c.id === project.category)?.label}
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-5 p-10 flex flex-col justify-between h-full bg-white relative">
                  <div className="absolute top-0 right-0 w-px h-full bg-[#141516]/5 -left-px"></div>

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-xs font-mono text-gray-400">{project.location} — {project.year}</div>
                      <div className="text-xs font-mono text-[#70a2ad]">{project.id}</div>
                    </div>

                    <h3 className="text-2xl font-light text-[#141516] mb-4 font-[Urbanist] leading-tight group-hover:text-[#70a2ad] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 border-l border-[#141516]/10 pl-4">
                      {project.description}
                    </p>

                    {/* Technical Specs Grid */}
                    {project.specs && (
                      <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-[#141516]/5">
                        <div>
                          <div className="text-[10px] uppercase text-gray-400 font-mono mb-1">Superficie</div>
                          <div className="text-sm font-medium text-[#141516]">{project.specs.surface}</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase text-gray-400 font-mono mb-1">Volumen</div>
                          <div className="text-sm font-medium text-[#141516]">{project.specs.volume}</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase text-gray-400 font-mono mb-1">Tecnología</div>
                          <div className="text-sm font-medium text-[#141516] truncate" title={project.specs.tech}>{project.specs.tech}</div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 font-mono">
                          <div className="w-1 h-1 bg-[#141516] rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6">
                    <Button
                      variant="outline"
                      onClick={() => onNavigate('contact')}
                      className="w-full rounded-none border border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white uppercase text-xs tracking-widest h-12"
                    >
                      Consultar Proyecto Similar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 font-[Urbanist]">
              Metodología de <span className="text-[#70a2ad]">Ejecución</span>
            </h2>
            <div className="h-px w-24 bg-[#70a2ad] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {infoData?.workProcess?.map((step, i) => (
              <div key={i} className="group relative">
                <div className="absolute top-0 left-0 text-8xl font-light text-white/5 font-[Urbanist] -translate-y-8 select-none group-hover:text-[#70a2ad]/10 transition-colors">
                  {step.step}
                </div>
                <div className="relative pt-4 border-t border-white/10 group-hover:border-[#70a2ad] transition-colors">
                  <h3 className="text-lg font-medium text-white mb-3 font-[Urbanist]">{step.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-[#141516] overflow-hidden relative border-t border-[#141516]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-8 font-[Urbanist] tracking-tight">
            ¿Tiene un proyecto <span className="text-[#70a2ad] font-medium">técnico?</span>
          </h2>

          <p className="text-xl text-gray-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Nuestro departamento de ingeniería estudiará su caso para ofrecerle la solución más eficiente y duradera.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="min-w-[240px] bg-[#141516] text-white hover:bg-[#70a2ad] rounded-none h-14 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Solicitar Estudio
            </Button>
            <Button
              onClick={() => onNavigate('services-overview')}
              size="lg"
              variant="outline"
              className="min-w-[240px] border border-[#141516]/20 text-[#141516] hover:bg-gray-50 rounded-none bg-transparent h-14 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}