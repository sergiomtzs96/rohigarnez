import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

import { useState } from 'react';

export default function Contact() {

    const [formData, setFormatData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormatData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormatData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Teléfono",
            details: ["+34 123 456 789", "+34 987 654 321"],
            subtitle: "Llamadas y WhatsApp"
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@aquacleanpro.es", "urgencias@aquacleanpro.es"],
            subtitle: "Respuesta en 24h"
        },
        {
            icon: MapPin,
            title: "Dirección",
            details: ["Calle Ejemplo 123", "28001 Madrid, España"],
            subtitle: "Oficina principal"
        },
        {
            icon: Clock,
            title: "Horario",
            details: ["Lun-Vie: 8:00 - 18:00", "Sáb: 9:00 - 14:00"],
            subtitle: "Emergencias 24/7"
        }
    ];

    const serviceAreas = [
        "Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza",
        "Málaga", "Murcia", "Las Palmas", "Bilbao", "Alicante"
    ];

    const services = [
        "Mantenimiento Regular",
        "Piscinas Comunitarias",
        "Reparación de Averías",
        "Construcción Nueva",
        "Rehabilitación Completa",
        "Cloradores Salinos",
        "Pruebas de Presión",
        "Otro (especificar en mensaje)"
    ];

    return (
        <div className='max-w-7xl mx-auto p-10 space-y-4'>
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Contacta con Nosotros
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    ¿Necesitas ayuda con tu piscina? Estamos aquí para ayudarte.
                    Contacta con nuestro equipo de expertos y recibe un presupuesto gratuito sin compromiso.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card className="shadow-lg rounded-lg p-6">
                        <CardHeader>
                            <CardTitle className="text-2xl">Solicitar Presupuesto</CardTitle>
                            <p className="text-gray-600">
                                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                            </p>
                        </CardHeader>
                        <CardContent>
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                                        ¡Mensaje Enviado!
                                    </h3>
                                    <p className="text-gray-600">
                                        Gracias por contactarnos. Te responderemos pronto.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nombre completo *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Tu nombre completo"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Teléfono</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+34 123 456 789"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="service">Servicio de interés</Label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Selecciona un servicio</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Mensaje *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Cuéntanos sobre tu piscina y qué necesitas..."
                                            rows={6}
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full bg-[var(--color-navbar)] hover:bg-blue-700">
                                        <Send className="w-4 h-4 mr-2" />
                                        Enviar Solicitud
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                        <Card key={index} className="p-6 rounded-lg">
                            <CardContent className="p-0">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[var(--color-navbar)] rounded-full flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{info.subtitle}</p>
                                        {info.details.map((detail, detailIndex) => (
                                            <p key={detailIndex} className="text-gray-700">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Service Areas */}
            <div className="mt-16">
                <Card className="p-8 rounded-lg">
                    <CardContent className="p-0">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Áreas de Servicio
                        </h2>
                        <p className="text-gray-600 text-center mb-8">
                            Prestamos servicios en las principales ciudades de España y áreas metropolitanas
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {serviceAreas.map((area, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-lg">
                                    <MapPin className="w-6 h-6 text-[var(--color-navbar)] mx-auto mb-2" />
                                    <span className="text-gray-700 font-medium">{area}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 mt-6">
                            ¿No ves tu ciudad? Contáctanos, es posible que podamos ayudarte.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Newsletter Section */}
            <div className="mt-16">
                <Card className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                    <CardContent className="p-0 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Mantente Informado
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Suscríbete a nuestro boletín para recibir consejos de mantenimiento,
                            ofertas especiales y novedades del sector.
                        </p>
                        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                            <Input
                                type="email"
                                placeholder="Tu email para el boletín"
                                className="flex-1"
                            />
                            <Button className="bg-[var(--color-navbar)] hover:bg-blue-700">
                                Suscribirse
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-4">
                        ¿Emergencia con tu Piscina?
                    </h2>
                    <p className="text-xl text-blue-100 mb-6">
                        Servicio de urgencias 24/7 para problemas críticos
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => window.open('tel:+34123456789')}
                            className="bg-red-600 hover:bg-red-700 text-white"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Llamar Urgencias: +34 123 456 789
                        </Button>
                        <Button
                            size="lg"
                            variant="ghost"
                            onClick={() => onNavigate('services-overview')}
                            className="border-white text-white hover:bg-white hover:text-blue-600"
                        >
                            Ver Servicios de Emergencia
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}