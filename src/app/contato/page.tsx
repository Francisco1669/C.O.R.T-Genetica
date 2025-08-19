'use client';

import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Facebook,
    Instagram,
    Youtube,
    Linkedin
} from 'lucide-react';
import { useState } from 'react';

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envio do formulário
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            assunto: '',
            mensagem: ''
        });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-red-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Entre em Contato
                        </h1>
                        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                            Estamos aqui para ajudar com suas necessidades em genética bovina.
                            Nossa equipe técnica especializada está pronta para atendê-lo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">25+</div>
                                <div className="text-green-100 text-sm">Anos de Experiência</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                <div className="text-green-100 text-sm">Suporte Técnico</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                                <div className="text-green-100 text-sm">Clientes Atendidos</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Informações de Contato + Formulário */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Informações de Contato */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                Informações de Contato
                            </h2>

                            <div className="space-y-6">
                                {/* Telefones */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-earth-brown" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Telefones</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+555534140164" className="hover:text-earth-brown transition-colors">
                                                (55) 3414-0164
                                            </a>
                                        </p>
                                        <p className="text-gray-600">
                                            <a href="tel:+555534140198" className="hover:text-earth-brown transition-colors">
                                                (55) 3414-0198
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-earth-brown" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">E-mail</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:atendimento@cortgeneticabrasil.com" className="hover:text-earth-brown transition-colors">
                                                atendimento@cortgeneticabrasil.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Endereço */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-earth-brown" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Endereço</h3>
                                        <p className="text-gray-600">
                                            BR 472 - KM 581<br />
                                            Uruguaiana - RS - Brasil<br />
                                            CEP: 97501-970
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <Clock className="w-6 h-6 text-earth-brown" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Horário de Funcionamento</h3>
                                        <p className="text-gray-600">
                                            Segunda a Sexta: 8h às 18h<br />
                                            Sábado: 8h às 12h<br />
                                            Domingo: Fechado
                                        </p>
                                        <p className="text-sm text-earth-brown mt-2">
                                            *Suporte técnico 24/7 para emergências
                                        </p>
                                    </div>
                                </div>

                                {/* Redes Sociais */}
                                <div>
                                    <h3 className="font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
                                    <div className="flex gap-4">
                                        <a
                                            href="#"
                                            className="bg-red-800 p-3 rounded-lg text-white hover:bg-red-700 transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-red-800 p-3 rounded-lg text-white hover:bg-red-700 transition-colors"
                                            aria-label="Instagram"
                                        >
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-red-800 p-3 rounded-lg text-white hover:bg-red-700 transition-colors"
                                            aria-label="YouTube"
                                        >
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-red-800 p-3 rounded-lg text-white hover:bg-red-700 transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Formulário de Contato */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <MessageSquare className="w-6 h-6 text-earth-brown" />
                                    <h2 className="text-2xl font-bold">
                                        Envie sua Mensagem
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nome Completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                value={formData.nome}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                                placeholder="Seu nome completo"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Telefone
                                            </label>
                                            <input
                                                type="tel"
                                                id="telefone"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                                placeholder="(00) 00000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            E-mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                            placeholder="seu.email@exemplo.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                                            Assunto *
                                        </label>
                                        <select
                                            id="assunto"
                                            name="assunto"
                                            value={formData.assunto}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                                        >
                                            <option value="">Selecione um assunto</option>
                                            <option value="catalogo-touros">Catálogo de Touros</option>
                                            <option value="marcadores-moleculares">Marcadores Moleculares</option>
                                            <option value="teste-ttr">Teste TTR</option>
                                            <option value="selos-qualidade">Selos de Qualidade</option>
                                            <option value="produtos-servicos">Produtos e Serviços</option>
                                            <option value="suporte-tecnico">Suporte Técnico</option>
                                            <option value="parcerias">Parcerias</option>
                                            <option value="outros">Outros</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mensagem *
                                        </label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            value={formData.mensagem}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                                            placeholder="Descreva sua dúvida, necessidade ou sugestão..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-red-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Enviar Mensagem
                                            </>
                                        )}
                                    </button>

                                    <p className="text-sm text-gray-500 text-center">
                                        * Campos obrigatórios. Responderemos em até 24 horas.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Nossa Localização
                        </h2>
                        <p className="text-xl text-gray-600">
                            Visite nossa sede em Uruguaiana, RS - Portão de entrada do agronegócio brasileiro
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="rounded-2xl overflow-hidden shadow-lg"
                    >
                        <div className="h-96 bg-gray-200 relative">
                            {/* Placeholder para mapa - em produção, usar Google Maps ou similar */}
                            <div className="absolute inset-0 flex items-center justify-center bg-amber-100">
                                <div className="text-center">
                                    <MapPin className="w-16 h-16 text-earth-brown mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-earth-brown mb-2">
                                        Cort Genética Brasil
                                    </h3>
                                    <p className="text-earth-brown-dark">
                                        BR 472 - KM 581<br />
                                        Uruguaiana - RS - Brasil
                                    </p>
                                    <button className="mt-4 bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        Ver no Google Maps
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-red-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Pronto para Melhorar sua Genética?
                        </h2>
                        <p className="text-green-100 mb-8">
                            Entre em contato conosco e descubra como podemos ajudar a revolucionar seu rebanho
                            com nossa tecnologia de ponta em genética bovina.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+555534140164"
                                className="bg-white text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                Ligar Agora
                            </a>
                            <a
                                href="/catalogo-touros"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-earth-brown transition-colors duration-200"
                            >
                                Ver Catálogo de Touros
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
