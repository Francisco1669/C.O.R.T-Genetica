'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersSection = () => {
    const partners = [
        {
            name: 'Cort Genética',
            logo: '/CORTlogo.png',
            alt: 'Logo Cort Genética'
        },
        {
            name: 'Banco do Brasil',
            logo: '/bancobrasilogo.png',
            alt: 'Logo Banco do Brasil'
        },
        {
            name: 'Sicredi',
            logo: '/sicredilogo.png',
            alt: 'Logo Sicredi'
        },
        {
            name: 'Tecnoforte',
            logo: '/tecnoforte.png',
            alt: 'Logo Tecnoforte'
        },
        {
            name: 'WTA',
            logo: '/wtalogo.png',
            alt: 'Logo WTA'
        },
        {
            name: 'DIUB Turin',
            logo: '/diubturinlog.png',
            alt: 'Logo DIUB Turin'
        }
    ];

    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Nossos <span className="text-green-800">Parceiros</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Trabalhamos com as melhores empresas do setor para oferecer soluções completas
                        e de qualidade superior para o agronegócio brasileiro.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center group"
                        >
                            <div className="relative w-full h-20 flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group-hover:shadow-md">
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    width={120}
                                    height={60}
                                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                        maxWidth: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Estatísticas dos Parceiros */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div className="bg-green-50 rounded-xl p-6">
                        <div className="text-3xl font-bold text-green-800 mb-2">15+</div>
                        <div className="text-gray-600">Anos de Parcerias</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                        <div className="text-3xl font-bold text-green-800 mb-2">50+</div>
                        <div className="text-gray-600">Empresas Parceiras</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                        <div className="text-3xl font-bold text-green-800 mb-2">1000+</div>
                        <div className="text-gray-600">Projetos Conjuntos</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
