'use client';

import { motion } from 'framer-motion';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const VideoSection = () => {
    const features = [
        {
            icon: Award,
            title: 'Excelência Genética',
            description: 'Mais de 25 anos de experiência em melhoramento genético bovino, com resultados comprovados em todo o Brasil.'
        },
        {
            icon: Target,
            title: 'Precisão Científica',
            description: 'Utilizamos marcadores moleculares e testes rigorosos para garantir 99% de precisão em nossas análises.'
        },
        {
            icon: Users,
            title: 'Parceiros de Sucesso',
            description: 'Mais de 1000 clientes confiam em nossa tecnologia para transformar seus rebanhos e aumentar a produtividade.'
        },
        {
            icon: TrendingUp,
            title: 'Resultados Comprovados',
            description: 'Aumento médio de 35% na produtividade dos rebanhos que utilizam nossos touros e tecnologias.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Conheça a <span className="text-red-800">CORT Genética Brasil</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Liderança em genética bovina com tecnologia de ponta e resultados excepcionais
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center shadow-2xl">
                                <Image
                                    src="/CORT_GenéticaBrasil_logotipo.png"
                                    alt="CORT Genética Brasil - Logotipo"
                                    width={320}
                                    height={320}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border-4 border-red-200 animate-pulse"></div>
                            <div className="absolute -inset-4 rounded-full border-2 border-red-100 opacity-50"></div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Tradição e <span className="text-red-800">Inovação</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Há mais de 25 anos no mercado, a CORT Genética Brasil é referência nacional em
                                melhoramento genético bovino, combinando expertise tradicional com as mais
                                avançadas tecnologias do setor.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Nossa missão é transformar a pecuária brasileira através da genética de excelência,
                                oferecendo soluções completas e personalizadas para cada produtor.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-red-50 rounded-lg">
                                <div className="text-3xl font-bold text-red-800 mb-1">25+</div>
                                <div className="text-sm text-gray-600">Anos de Experiência</div>
                            </div>
                            <div className="text-center p-4 bg-red-50 rounded-lg">
                                <div className="text-3xl font-bold text-red-800 mb-1">1000+</div>
                                <div className="text-sm text-gray-600">Clientes Atendidos</div>
                            </div>
                            <div className="text-center p-4 bg-red-50 rounded-lg">
                                <div className="text-3xl font-bold text-red-800 mb-1">100%</div>
                                <div className="text-sm text-gray-600">Marcadores Moleculares</div>
                            </div>
                            <div className="text-center p-4 bg-red-50 rounded-lg">
                                <div className="text-3xl font-bold text-red-800 mb-1">99%</div>
                                <div className="text-sm text-gray-600">Precisão Genética</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="w-8 h-8 text-red-800" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
