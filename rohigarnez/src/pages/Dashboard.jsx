import { use, useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import piscina from '../assets/shared/icons/piscina.jpg';
import { Trash2, SquarePen } from 'lucide-react'

import { ModalProjects, ModalPackages } from '../components/Modals';
export default function Dashboard({ userType, editType }) {

    const [activeSection, setActiveSection] = useState('projects');
    const [isModalProjectsOpen, setIsModalProjectsOpen] = useState(false);
    const [isModalPackagesOpen, setIsModalPackagesOpen] = useState(false);

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loadingProjects, setLoadingProjects] = useState(true);

    //Cargar proyectos desde la BD
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('http://localhost:5000/rohigarnez/projects', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : ''}`
                    }
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'Error cargando proyectos');
                setProjects(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingProjects(false);
            }
        };
        fetchProjects();
    }, []);

    const handleEditProject = (project) => {
        setSelectedProject(project);
        setIsModalProjectsOpen(true);
    };

    const handleProjectUpdated = (updatedProject) => {
        setProjects(prev => 
            prev.map(p => p._id === updatedProject._id ? updatedProject : p)
        );
        setIsModalProjectsOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between pb-10'>
                <div>
                    <h1>Panel de Administración</h1>
                    <p>Gestiona el contenido de Rohigarnez S.L.</p>
                </div>
                <div>
                    <Button>Volver al sitio web</Button>
                </div>
            </div>
            <div className='w-full flex justify-between'>

                <Button variant={activeSection === 'projects' ? 'default' : 'ghost'}
                    onClick={() => setActiveSection('projects')}>Proyectos</Button>
                <Button variant={activeSection === 'packagesServices' ? 'default' : 'ghost'}
                    onClick={() => setActiveSection('packagesServices')}>Paquetes de Servicios</Button>
                <Button variant={activeSection === 'content' ? 'default' : 'ghost'}
                    onClick={() => setActiveSection('content')}>Contenido</Button>
            </div>
            <h2>Gestión de {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <div className='py-6'>
                {activeSection === 'projects' && (

                    <div className='grid grid-cols-3 '>

                        <Card className={'rounded-lg'}>
                            <CardHeader className={'overflow-hidden rounded-t-lg'}>
                                <img src={piscina} alt="piscinas" className='w-full h-auto rounded-t-lg hover:scale-105 transition-all duration-300' />
                            </CardHeader>
                            <CardContent className={'flex flex-col items-start space-y-4 p-3'}>
                                <CardTitle>Rehabilitación Completa en Pozuelo</CardTitle>
                                <CardDescription>Renovación integral de piscina residencial con nuevo sistema de filtración y revestimiento de gresite.</CardDescription>
                                <span>Pozuelo de Alarcón, Madrid</span>
                                <span>Octubre 2024</span>
                                <Badge variant={'ghost'}>Rehabilitación</Badge>
                            </CardContent>
                            <CardFooter className={'p-3 flex gap-3'}>
                                <Button onClick={() => setIsModalProjectsOpen(true)}> <SquarePen /> </Button>
                                <Button variant='outline'> <Trash2 /> </Button>
                            </CardFooter>
                        </Card>
                    </div>

                )}
                {isModalProjectsOpen && (
                    <ModalProjects onClose={() => setIsModalProjectsOpen(false)} />
                )}

                {activeSection === 'packagesServices' && (
                    <div className='grid grid-cols-2'>
                        <Card className={'p-6 rounded-lg'}>
                            <CardContent className={'space-y-4'}>

                                <CardTitle>Piscinas Con Socorrista</CardTitle>
                                <CardDescription>Servicio de alquiler de piscinas con socorrista para eventos y celebraciones.</CardDescription>

                                <div className='flex items-center justify-start gap-4'>
                                    <Button variant='outline' onClick={() => setIsModalPackagesOpen(true)}> <SquarePen /> </Button>
                                    <Button variant='destructive'><Trash2 /> Eliminar</Button>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                )}
                {isModalPackagesOpen && (
                    <ModalPackages onClose={() => setIsModalPackagesOpen(false)} />
                )}

                {activeSection === 'content' && (
                    <div>
                        <p>Contenido</p>
                    </div>

                )}
            </div>
        </div>
    )
}