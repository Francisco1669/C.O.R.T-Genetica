'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Palette, Beef, Heart, FlaskConical, Dna } from 'lucide-react';

const PartnersSection = () => {
    const partners = [
        {
            name: 'Cort Genética',
            logo: '/CORTlogo.png',
            alt: 'Logo Cort Genética',
            website: 'https://cortgenetica.com.br'
        },
        {
            name: 'Banco do Brasil',
            logo: '/bancobrasilogo.png',
            alt: 'Logo Banco do Brasil',
            website: 'https://www.bb.com.br'
        },
        {
            name: 'Sicredi',
            logo: '/sicredilogo.png',
            alt: 'Logo Sicredi',
            website: 'https://www.sicredi.com.br'
        },
        {
            name: 'Tecnoforte',
            logo: '/tecnoforte.png',
            alt: 'Logo Tecnoforte',
            website: 'https://tecnoforte.com.br'
        },
        {
            name: 'WTA',
            logo: '/wtalogo.png',
            alt: 'Logo WTA',
            website: 'https://www.lojawtavet.com.br'
        },
        {
            name: 'DIUB Turin',
            logo: '/diubturinlog.png',
            alt: 'Logo DIUB Turin',
            website: 'https://diubturin.com.br'
        }
    ];

    // Nossos 5 pilares tecnológicos (3 selos + TTR + Marcadores Moleculares)
    const technologyPillars = [
        {
            name: 'Selo de Homozigose para Pelagem',
            icon: Palette,
            description: 'Garantia de transmissão de cor',
            color: 'from-purple-600 to-purple-800',
            bgColor: 'bg-purple-100',
            link: '/tecnologia/selos-qualidade'
        },
        {
            name: 'Selo de Maciez da Carne',
            icon: Beef,
            description: 'Qualidade superior da carne',
            color: 'from-red-600 to-red-800',
            bgColor: 'bg-red-100',
            link: '/tecnologia/selos-qualidade'
        },
        {
            name: 'Selo IATF',
            icon: Heart,
            description: 'Inseminação artificial em tempo fixo',
            color: 'from-pink-600 to-pink-800',
            bgColor: 'bg-pink-100',
            link: '/tecnologia/selos-qualidade'
        },
        {
            name: 'Teste TTR',
            icon: FlaskConical,
            description: 'Termo Resistência Rápido',
            color: 'from-green-600 to-green-800',
            bgColor: 'bg-green-100',
            link: '/tecnologia/teste-ttr'
        },
        {
            name: 'Marcadores Moleculares',
            icon: Dna,
            description: 'Análise genética avançada',
            color: 'from-blue-600 to-blue-800',
            bgColor: 'bg-blue-100',
            link: '/tecnologia/marcadores-moleculares'
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
                            <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full h-full flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                            >
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
                            </a>
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
                        <div className="text-4xl font-bold text-red-800 mb-2">30+</div>
                        <div className="text-gray-600 text-lg">Anos de Experiência</div>
                        <div className="text-sm text-gray-500 mt-2">Relacionamentos sólidos e duradouros</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-4xl font-bold text-red-800 mb-2">10+</div>
                        <div className="text-gray-600 text-lg">Empresas Parceiras</div>
                        <div className="text-sm text-gray-500 mt-2">Rede nacional de colaboradores</div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-4xl font-bold text-red-800 mb-2">100+</div>
                        <div className="text-gray-600 text-lg">Projetos Conjuntos</div>
                        <div className="text-sm text-gray-500 mt-2">Soluções integradas e inovadoras</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
