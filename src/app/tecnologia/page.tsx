'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dna, FlaskConical, Award, ArrowRight, CheckCircle } from 'lucide-react';

const TecnologiaPage = () => {
    const technologies = [
        {
            icon: Dna,
            title: 'Marcadores Moleculares',
            subtitle: 'Tecnologia de Ponta em Genética',
            description: 'Utilizamos marcadores moleculares em 100% dos touros de nossa bateria para identificar características genéticas importantes como maciez da carne, resistência e produtividade.',
            benefits: [
                'Seleção precisa de características econômicas',
                'Redução do tempo de melhoramento genético',
                'Maior confiabilidade nos resultados',
                'Identificação precoce de potencial genético'
            ],
            link: '/tecnologia/marcadores-moleculares',
            color: 'green',
            bgClass: 'bg-red-800'
        },
        {
            icon: FlaskConical,
            title: 'Teste TTR',
            subtitle: 'Termo Resistência Rápido',
            description: 'Nosso exclusivo Teste TTR é aplicado em todas as partidas de sêmen, garantindo qualidade superior e correlação direta com resultados de campo.',
            benefits: [
                'Controle rigoroso de qualidade',
                'Correlação com fertilidade de campo',
                'Redução de perdas econômicas',
                'Garantia de viabilidade do sêmen'
            ],
            link: '/tecnologia/teste-ttr',
            color: 'green',
            bgClass: 'bg-primary-red'
        },
        {
            icon: Award,
            title: 'Selos de Qualidade',
            subtitle: 'Certificação Exclusiva',
            description: 'Sistema único de certificação que garante características específicas através de três selos: Homozigose para Pelagem, Maciez da Carne e IATF.',
            benefits: [
                'Garantia de transmissão de pelagem',
                'Certificação de maciez da carne',
                'Controle de IATF assistida',
                'Diferenciação no mercado'
            ],
            link: '/tecnologia/selos-qualidade',
            color: 'green',
            bgClass: 'bg-red-800'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            <span className="text-earth-brown">Tecnologia</span> e Inovação
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Três pilares tecnológicos que revolucionaram a genética bovina brasileira,
                            garantindo resultados superiores e previsibilidade genética incomparável.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                            <span className="bg-red-100 text-earth-brown px-4 py-2 rounded-full">
                                100% Marcadores Moleculares
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                                Teste TTR Exclusivo
                            </span>
                            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
                                3 Selos de Qualidade
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {technologies.map((tech, index) => {
                            const IconComponent = tech.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={isEven ? '' : 'lg:col-start-2'}>
                                        <div className="flex items-center mb-6">
                                            <div className={`w-16 h-16 ${tech.bgClass} rounded-2xl flex items-center justify-center mr-4`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-bold text-gray-900">{tech.title}</h2>
                                                <p className="text-lg text-gray-600">{tech.subtitle}</p>
                                            </div>
                                        </div>

                                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                            {tech.description}
                                        </p>

                                        <div className="space-y-4 mb-8">
                                            {tech.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-6 h-6 text-earth-brown flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={tech.link}
                                            className={`inline-flex items-center px-6 py-3 ${tech.bgClass} hover:bg-red-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105`}
                                        >
                                            Saiba Mais
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
                                    </div>

                                    {/* Visual/Stats */}
                                    <div className={isEven ? 'lg:col-start-2' : ''}>
                                        <div className={`${tech.bgClass} rounded-2xl p-8 text-white`}>
                                            <h3 className="text-2xl font-bold mb-6 text-white">Resultados Comprovados</h3>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                                                    <div className="text-sm opacity-90">Cobertura</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-white mb-2">25+</div>
                                                    <div className="text-sm opacity-90">Anos</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-white mb-2">99%</div>
                                                    <div className="text-sm opacity-90">Precisão</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-white mb-2">1000+</div>
                                                    <div className="text-sm opacity-90">Clientes</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Diferencial Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            O Diferencial da <span className="text-earth-brown">Cort Genética</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            Somos os únicos no Brasil a combinar essas três tecnologias de forma integrada,
                            oferecendo a mais completa solução em genética bovina.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Dna className="w-6 h-6 text-earth-brown" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Integração Total</h3>
                                <p className="text-gray-600">Todas as tecnologias trabalham em conjunto para máxima eficiência</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <FlaskConical className="w-6 h-6 text-blue-800" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Controle Rigoroso</h3>
                                <p className="text-gray-600">Cada etapa é monitorada para garantir qualidade superior</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6 text-amber-800" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Certificação Única</h3>
                                <p className="text-gray-600">Sistema exclusivo de selos que garante características específicas</p>
                            </div>
                        </div>
                    </motion.div>
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
                            Transforme Seu Rebanho com Nossa Tecnologia
                        </h2>
                        <p className="text-xl text-green-100 mb-8">
                            Conheça nosso catálogo de touros e veja como aplicamos essas tecnologias na prática
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/catalogo-touros"
                                className="bg-white text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Ver Catálogo de Touros
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/contato"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-earth-brown transition-colors duration-200"
                            >
                                Falar com Especialista
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TecnologiaPage;
