'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Dna, FlaskConical, Beef, CheckCircle, ArrowRight, Star, Target } from 'lucide-react';

const NossosSelosPage = () => {
    const selos = [
        {
            icon: Dna,
            title: 'GENÔMICA 100% PURA',
            subtitle: 'Genética testada com rigor científico',
            description: 'Nossa genética é 100% testada e aprovada através de análises genômicas completas. Utilizamos tecnologia de ponta para garantir a pureza e qualidade de cada animal.',
            details: [
                'Sequenciamento genético completo de cada reprodutor',
                'Análise de mais de 50.000 marcadores moleculares',
                'Testes realizados em laboratórios certificados internacionalmente',
                'Garantia de pureza racial e características superiores',
                'Rastreabilidade completa do material genético'
            ],
            color: 'from-red-600 to-red-800',
            bgColor: 'bg-red-100',
            textColor: 'text-red-800',
            image: '/selos/genomica_pioneira.jpeg',
            link: '/tecnologia/marcadores-moleculares'
        },
        {
            icon: FlaskConical,
            title: 'TTR IATF',
            subtitle: 'Todas as partidas testadas',
            description: 'Certificação que garante que todas as partidas de sêmen passam por rigoroso teste de Taxa de Recuperação Total (TTR), garantindo máxima eficiência reprodutiva.',
            details: [
                'Teste de viabilidade em todas as partidas comercializadas',
                'Avaliação de motilidade e vigor espermático',
                'Controle de qualidade em cada lote produzido',
                'Garantia de fertilidade superior',
                'Maior taxa de prenhez na IATF'
            ],
            color: 'from-blue-600 to-blue-800',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-800',
            image: '/selos/ttr iatf.jpeg',
            link: '/tecnologia/teste-ttr'
        },
        {
            icon: Beef,
            title: 'HOMOZIGOTO 100% MACIEZ',
            subtitle: 'Genética para máxima maciez',
            description: 'Selo que certifica touros homozigotos para o gene da maciez, garantindo que 100% da descendência terá carne com maciez superior.',
            details: [
                'Análise do gene marcador de maciez da carne',
                'Garantia de 100% de transmissão para a descendência',
                'Carne com maciez comprovada cientificamente',
                'Maior valor agregado ao produto final',
                'Diferencial competitivo no mercado de carnes premium'
            ],
            color: 'from-amber-600 to-amber-800',
            bgColor: 'bg-amber-100',
            textColor: 'text-amber-800',
            image: '/selos/homozigoto_maciez.jpeg',
            link: '/tecnologia/marcadores-moleculares'
        }
    ];

    const benefits = [
        {
            title: 'Garantia Científica',
            description: 'Cada selo é resultado de análises genéticas rigorosas e validadas cientificamente.',
            icon: Star
        },
        {
            title: 'Segurança no Investimento',
            description: 'Certificação que comprova as características e qualidade dos reprodutores.',
            icon: CheckCircle
        },
        {
            title: 'Resultados Previsíveis',
            description: 'Previsibilidade e confiabilidade nos resultados da descendência.',
            icon: Target
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-red-800 rounded-2xl flex items-center justify-center">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Nossos <span className="text-red-800">Selos de Qualidade</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Sistema de certificação exclusivo que garante genética de excelência através
                            de análises científicas rigorosas e controle de qualidade total.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full flex items-center">
                                <Dna className="w-4 h-4 mr-2" />
                                Genômica 100% Pura
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center">
                                <FlaskConical className="w-4 h-4 mr-2" />
                                TTR IATF
                            </span>
                            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full flex items-center">
                                <Beef className="w-4 h-4 mr-2" />
                                Homozigoto 100% Maciez
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introdução */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Por que nossos <span className="text-red-800">selos importam?</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Desde 1991, a C.O.R.T. Genética é pioneira no uso de tecnologias genômicas no Brasil.
                            Nossos selos de qualidade representam décadas de pesquisa, inovação e compromisso com
                            a excelência genética. Cada certificação é um diferencial competitivo que agrega valor
                            ao seu plantel e garante resultados superiores.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Selos Detalhados */}
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
                            Conheça nossos <span className="text-red-800">Três Selos</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Cada selo representa o que há de mais avançado em genética e reprodução animal
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
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                                        isEven ? '' : 'lg:grid-flow-col-dense'
                                    }`}
                                >
                                    {/* Content */}
                                    <div className={isEven ? '' : 'lg:col-start-2'}>
                                        <div className="flex items-center mb-6">
                                            <div
                                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                                                    selo.textColor === 'text-red-800'
                                                        ? 'bg-red-800'
                                                        : selo.textColor === 'text-blue-800'
                                                        ? 'bg-blue-800'
                                                        : 'bg-amber-800'
                                                }`}
                                            >
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

                                        <Link
                                            href={selo.link}
                                            className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                                                selo.textColor === 'text-red-800'
                                                    ? 'bg-red-800 text-white hover:bg-red-900'
                                                    : selo.textColor === 'text-blue-800'
                                                    ? 'bg-blue-800 text-white hover:bg-blue-900'
                                                    : 'bg-amber-800 text-white hover:bg-amber-900'
                                            }`}
                                        >
                                            Saiba mais
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
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
                                                        className="w-40 h-40 mx-auto object-contain drop-shadow-lg"
                                                    />
                                                </div>

                                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{selo.title}</h4>
                                                <p className="text-gray-600 mb-6 leading-relaxed">
                                                    Certificado oficial pela C.O.R.T Genética Brasil através de análise
                                                    científica rigorosa e validação internacional.
                                                </p>

                                                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                                                    <div className="text-sm font-medium text-gray-700 mb-1">
                                                        Garantia de Qualidade
                                                    </div>
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
                            Vantagens dos <span className="text-red-800">Nossos Selos</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Benefícios concretos que nossos selos de qualidade oferecem para o seu negócio
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-red-800" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Outros Selos - Link para página de selos de pelagem */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Também oferecemos <span className="text-red-800">Selos de Pelagem</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Além dos nossos três selos principais, certificamos touros com garantia de
                            transmissão de pelagem (Homozigoto Preto, Homozigoto Vermelho) e ausência
                            de chifres (100% Mocho).
                        </p>
                        <Link
                            href="/tecnologia/selos-qualidade"
                            className="inline-flex items-center bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors duration-200"
                        >
                            Conhecer Selos de Pelagem
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
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
                            Escolha Genética Certificada
                        </h2>
                        <p className="text-xl text-red-100 mb-8">
                            Confira nosso catálogo completo de touros com selos de qualidade C.O.R.T. Genética
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/catalogo"
                                className="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Ver Catálogo de Touros
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/contato"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors duration-200"
                            >
                                Fale Conosco
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NossosSelosPage;
