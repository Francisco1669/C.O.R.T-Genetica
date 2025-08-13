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

    // Duplicar o array para criar o efeito infinito
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-20 bg-gray-50 border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nossos <span className="text-red-800">Parceiros</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trabalhamos com as melhores empresas do setor para oferecer soluções completas
                        e de qualidade superior para o agronegócio brasileiro.
                    </p>
                </motion.div>
            </div>

            {/* Faixa Infinita de Logos */}
            <div className="relative">
                {/* Gradientes para efeito de fade nas bordas */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                <motion.div
                    animate={{
                        x: [0, -100 * partners.length]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex items-center gap-16"
                    style={{ width: `${duplicatedPartners.length * 200}px` }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="flex items-center justify-center flex-shrink-0"
                            style={{ width: '200px', height: '120px' }}
                        >
                            <div className="relative w-full h-full flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    width={160}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                        maxWidth: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Estatísticas dos Parceiros */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-4xl font-bold text-red-800 mb-2">15+</div>
                        <div className="text-gray-600 text-lg">Anos de Parcerias</div>
                        <div className="text-sm text-gray-500 mt-2">Relacionamentos sólidos e duradouros</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-4xl font-bold text-red-800 mb-2">50+</div>
                        <div className="text-gray-600 text-lg">Empresas Parceiras</div>
                        <div className="text-sm text-gray-500 mt-2">Rede nacional de colaboradores</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-4xl font-bold text-red-800 mb-2">1000+</div>
                        <div className="text-gray-600 text-lg">Projetos Conjuntos</div>
                        <div className="text-sm text-gray-500 mt-2">Soluções integradas e inovadoras</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
