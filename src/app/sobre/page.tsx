'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const SobrePage = () => {
    const values = [
        {
            icon: Award,
            title: 'Excelência',
            description: 'Buscamos constantemente a perfeição em nossos processos e resultados, garantindo a mais alta qualidade genética.'
        },
        {
            icon: Target,
            title: 'Inovação',
            description: 'Pioneiros no uso de marcadores moleculares, sempre investindo em tecnologias de ponta para o agronegócio.'
        },
        {
            icon: Users,
            title: 'Compromisso',
            description: 'Dedicação total com nossos clientes, oferecendo suporte técnico especializado e resultados comprovados.'
        },
        {
            icon: Heart,
            title: 'Sustentabilidade',
            description: 'Práticas responsáveis que contribuem para o desenvolvimento sustentável da pecuária brasileira.'
        }
    ];

    const timeline = [
        {
            year: '1995',
            title: 'Fundação',
            description: 'Início das atividades com foco em genética bovina de alta qualidade.'
        },
        {
            year: '2005',
            title: 'Primeiros Marcadores',
            description: 'Implementação dos primeiros marcadores moleculares na seleção de reprodutores.'
        },
        {
            year: '2010',
            title: 'Teste TTR',
            description: 'Desenvolvimento e implementação do Teste de Termo Resistência Rápido.'
        },
        {
            year: '2015',
            title: 'Selos de Qualidade',
            description: 'Criação do sistema exclusivo de selos de qualidade genética.'
        },
        {
            year: '2020',
            title: '100% Marcadores',
            description: 'Atingimos 100% de cobertura com marcadores moleculares em nossa bateria.'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-green-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Sobre a <span className="text-earth-brown">Cort Genética</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Pioneira em genética bovina no Brasil, combinando tradição, inovação e tecnologia
                            para transformar o agronegócio há mais de 25 anos.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* História Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Nossa <span className="text-earth-brown">História</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    A Cort Genética Brasil nasceu da visão de revolucionar a pecuária nacional
                                    através da genética de excelência. Fundada em Uruguaiana, RS, rapidamente
                                    se estabeleceu como referência no setor.
                                </p>
                                <p>
                                    Fomos os primeiros no Brasil a implementar marcadores moleculares em 100%
                                    dos touros de nossa bateria, estabelecendo um novo padrão de qualidade e
                                    confiabilidade no mercado.
                                </p>
                                <p>
                                    Hoje, nossa tecnologia TTR e sistema de selos de qualidade garantem aos
                                    produtores resultados superiores e previsibilidade genética incomparável.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-red-800 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
                                <p className="text-lg leading-relaxed mb-6">
                                    Fornecer genética bovina de excelência através de tecnologias inovadoras,
                                    contribuindo para o desenvolvimento sustentável da pecuária brasileira.
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-3xl font-bold">25+</div>
                                        <div className="text-green-100">Anos de Experiência</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">100%</div>
                                        <div className="text-green-100">Marcadores Moleculares</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossa <span className="text-earth-brown">Jornada</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Marcos importantes que definiram nossa trajetória de inovação e liderança
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center mb-12 last:mb-0"
                            >
                                <div className="flex-shrink-0 w-24 h-24 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                                    {item.year}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossos <span className="text-earth-brown">Valores</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Princípios que guiam cada decisão e ação em nossa empresa
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center group"
                                >
                                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800 transition-colors duration-300">
                                        <IconComponent className="w-8 h-8 text-earth-brown group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-800">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Pronto para Conhecer Nossas Tecnologias?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 leading-relaxed">
                            Descubra como nossa expertise pode transformar a genética do seu rebanho
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/tecnologia"
                                className="bg-white text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Explorar Tecnologias
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/contato"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-earth-brown transition-colors duration-200"
                            >
                                Falar Conosco
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SobrePage;
