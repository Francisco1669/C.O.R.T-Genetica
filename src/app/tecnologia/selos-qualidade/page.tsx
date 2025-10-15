'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Palette, Beef, Heart, CheckCircle, ArrowRight, Star } from 'lucide-react';

const SelosQualidadePage = () => {
    const selos = [
        {
            icon: Palette,
            title: 'Selo Homozigoto Preto',
            subtitle: 'Garantia de Transmissão de Cor',
            description: 'Certificação que garante 100% de transmissão da pelagem preta pelos touros portadores deste selo. Elimina surpresas na coloração dos bezerros.',
            details: [
                'Análise genética completa dos genes de pelagem',
                'Garantia de 100% de uniformidade na descendência',
                'Eliminação de surpresas na coloração dos bezerros',
                'Valorização comercial do rebanho'
            ],
            color: 'from-gray-800 to-gray-900',
            bgColor: 'bg-gray-100',
            textColor: 'text-gray-800',
            image: '/selos/PRETO.png'
        },
        {
            icon: Beef,
            title: 'Selo Homozigoto Vermelho',
            subtitle: 'Garantia de Transmissão de Cor',
            description: 'Certificação que garante 100% de transmissão da pelagem vermelha pelos touros portadores deste selo. Uniformidade total na descendência.',
            details: [
                'Análise genética completa dos genes de pelagem',
                'Garantia de 100% de uniformidade na descendência',
                'Eliminação de surpresas na coloração dos bezerros',
                'Valorização comercial do rebanho'
            ],
            color: 'from-red-600 to-red-800',
            bgColor: 'bg-red-100',
            textColor: 'text-red-800',
            image: '/selos/VERMELHO.png'
        },
        {
            icon: Heart,
            title: 'Selo 100% Mocho',
            subtitle: 'Garantia de Ausência de Chifres',
            description: 'Certificação que garante 100% de touros mochos (sem chifres) na descendência. Elimina a necessidade de descorna.',
            details: [
                'Análise genética completa dos genes de chifres',
                'Garantia de 100% de touros mochos na descendência',
                'Eliminação da necessidade de descorna',
                'Redução de estresse e custos de manejo'
            ],
            color: 'from-amber-600 to-amber-800',
            bgColor: 'bg-amber-100',
            textColor: 'text-amber-800',
            image: '/selos/MOCHO selo.png'
        }
    ];

    const benefits = [
        {
            title: 'Diferenciação no Mercado',
            description: 'Os selos agregam valor comercial e facilitam a tomada de decisão dos produtores.',
            icon: Star
        },
        {
            title: 'Garantia de Qualidade',
            description: 'Certificação científica que comprova características específicas dos touros.',
            icon: CheckCircle
        },
        {
            title: 'Previsibilidade',
            description: 'Resultados previsíveis e confiáveis na descendência dos animais.',
            icon: Award
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-amber-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-amber-800 rounded-2xl flex items-center justify-center">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Selos de <span className="text-amber-800">Qualidade</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Sistema exclusivo de certificação que identifica e garante características
                            específicas dos nossos touros, oferecendo segurança e previsibilidade
                            para os produtores.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full flex items-center">
                                <Palette className="w-4 h-4 mr-2" />
                                Homozigoto Preto
                            </span>
                            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full flex items-center">
                                <Beef className="w-4 h-4 mr-2" />
                                Homozigoto Vermelho
                            </span>
                            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full flex items-center">
                                <Heart className="w-4 h-4 mr-2" />
                                100% Mocho
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Selos Detalhados */}
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
                            Nossos <span className="text-amber-800">Três Selos</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Cada selo representa anos de pesquisa e desenvolvimento, garantindo características específicas de pelagem e ausência de chifres
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {selos.map((selo, index) => {
                            const IconComponent = selo.icon;
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
                                            <div className={`w-16 h-16 ${selo.color === 'from-purple-600 to-purple-800' ? 'bg-purple-800' : selo.color === 'from-red-600 to-red-800' ? 'bg-red-800' : 'bg-pink-800'} rounded-2xl flex items-center justify-center mr-4`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{selo.title}</h3>
                                                <p className="text-lg text-gray-600">{selo.subtitle}</p>
                                            </div>
                                        </div>

                                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                            {selo.description}
                                        </p>

                                        <div className="space-y-4 mb-8">
                                            {selo.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual Card com Imagem Real do Selo */}
                                    <div className={isEven ? 'lg:col-start-2' : ''}>
                                        <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden border-2 border-gray-200">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full transform translate-x-8 -translate-y-8 opacity-30"></div>
                                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100 to-gray-200 rounded-full transform -translate-x-4 translate-y-4 opacity-30"></div>

                                            <div className="relative z-10 text-center">
                                                <div className="mb-6">
                                                    <img
                                                        src={selo.image}
                                                        alt={`Selo ${selo.title}`}
                                                        className="w-32 h-32 mx-auto object-contain drop-shadow-lg"
                                                    />
                                                </div>

                                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{selo.title}</h4>
                                                <p className="text-gray-600 mb-6 leading-relaxed">
                                                    Certificado oficial pela C.O.R.T Genética Brasil através de análise genética rigorosa e validação científica.
                                                </p>

                                                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                                                    <div className="text-sm font-medium text-gray-700 mb-1">Garantia de Qualidade</div>
                                                    <div className="text-3xl font-bold text-gray-900">100%</div>
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

            {/* Benefícios dos Selos */}
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
                            Vantagens dos <span className="text-amber-800">Selos de Qualidade</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Benefícios práticos que os selos de homozigose e mocho oferecem para produtores e consumidores
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-amber-800" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Estatísticas */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                            Impacto dos Selos no Mercado
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-amber-800 mb-2">95%</div>
                                <div className="text-gray-600">Satisfação dos Produtores</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-800 mb-2">30%</div>
                                <div className="text-gray-600">Valorização do Rebanho</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-800 mb-2">100+</div>
                                <div className="text-gray-600">Touros Certificados</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Como Obter os Selos */}
            <section className="py-20 bg-amber-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Processo de Certificação
                        </h2>
                        <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                            Nosso processo rigoroso garante que apenas touros com características
                            comprovadas recebam os selos de qualidade.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-red-900 bg-opacity-80 rounded-2xl p-6 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white mb-2">1</div>
                                <h3 className="text-lg font-bold text-white mb-2">Análise Genética</h3>
                                <p className="text-green-100 text-sm">
                                    Sequenciamento completo do DNA para identificar genes específicos
                                </p>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-2xl p-6 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white mb-2">2</div>
                                <h3 className="text-lg font-bold text-white mb-2">Validação</h3>
                                <p className="text-green-100 text-sm">
                                    Verificação por geneticistas especializados e controle de qualidade
                                </p>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-2xl p-6 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white mb-2">3</div>
                                <h3 className="text-lg font-bold text-white mb-2">Certificação</h3>
                                <p className="text-green-100 text-sm">
                                    Emissão do selo oficial com garantia de características
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Escolha Touros com Selos de Qualidade
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Veja nosso catálogo completo de touros certificados com os selos de qualidade
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/catalogo-touros"
                                className="bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Ver Touros Certificados
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/tecnologia"
                                className="bg-transparent border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-200"
                            >
                                Outras Tecnologias
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SelosQualidadePage;
