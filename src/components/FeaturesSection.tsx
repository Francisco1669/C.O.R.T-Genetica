'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dna, FlaskConical, Award, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: Dna,
            title: 'Marcadores Moleculares',
            description: 'Tecnologia de ponta que permite a seleção de touros com alto potencial genético para características de importância econômica, como maciez da carne.',
            link: '/tecnologia/marcadores-moleculares',
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
            hoverBg: 'hover:bg-blue-50'
        },
        {
            icon: FlaskConical,
            title: 'Teste TTR',
            description: 'Teste de Termo Resistência Rápido aplicado a todas as partidas de sêmen, correlacionando-se com os resultados de campo e garantindo qualidade.',
            link: '/tecnologia/teste-ttr',
            color: 'text-red-800',
            bgColor: 'bg-red-100',
            hoverBg: 'hover:bg-red-50'
        },
        {
            icon: Award,
            title: 'Selos de Qualidade',
            description: 'Sistema exclusivo de certificação com selos de Homozigose para Pelagem, Maciez da Carne e IATF, garantindo a qualidade superior dos nossos touros.',
            link: '/tecnologia/selos-qualidade',
            color: 'text-amber-600',
            bgColor: 'bg-amber-100',
            hoverBg: 'hover:bg-amber-50'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

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
                        Nossos <span className="text-red-800">Diferenciais</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Três pilares tecnológicos que nos posicionam como referência em genética bovina no Brasil
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`group p-8 rounded-2xl border border-gray-200 ${feature.hoverBg} transition-all duration-300 hover:shadow-xl hover:scale-105`}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                {/* Link */}
                                <Link
                                    href={feature.link}
                                    className={`inline-flex items-center ${feature.color} font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-200`}
                                >
                                    Saiba mais
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Pronto para conhecer nossa tecnologia?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Descubra como nossos diferenciais podem melhorar a genética do seu rebanho
                        </p>
                        <Link
                            href="/tecnologia"
                            className="btn-primary inline-block"
                        >
                            Explorar Tecnologias
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
