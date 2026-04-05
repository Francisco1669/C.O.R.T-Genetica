'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Palette, Beef, Heart, FlaskConical, Dna, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const PartnersSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const partners = [
        {
            name: 'C.O.R.T Genética',
            logo: '/CORTlogo.png',
            alt: 'Logo C.O.R.T Genética',
            website: 'https://www.cortgeneticabrasil.com',
            customScale: 1.65
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
            website: 'https://www.sicredi.com.br/home',
            customScale: 1.7
        },
        {
            name: 'MSD Saúde Animal',
            logo: '/mdslogo.jpeg',
            alt: 'Logo MSD Saúde Animal',
            website: 'https://www.msd-saude-animal.com.br',
            customScale: 1.65
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
            website: 'https://www.wtavet.com.br'
        },
        {
            name: 'DIUB Turin',
            logo: '/diubturinlog.png',
            alt: 'Logo DIUB Turin',
            website: 'https://diubturin.com.br'
        },
        {
            name: 'Gallagher',
            logo: '/gallagher.jpeg',
            alt: 'Logo Gallagher',
            website: 'https://www.am.gallagher.com.br/pt-BR'
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

    // Duplicar o array para criar o efeito infinito contínuo
    const duplicatedPartners = [...partners, ...partners];

    // Auto-play com intervalo
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % partners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlay, partners.length]);

    const handlePrevious = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    };

    const handleNext = () => {
        setIsAutoPlay(false);
        setCurrentIndex((prev) => (prev + 1) % partners.length);
    };

    // Calcular quantos logos mostrar por vez baseado no tamanho da tela
    const getVisibleLogos = () => {
        if (typeof window === 'undefined') return 4;
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 768) return 2; // tablet pequeno
        if (window.innerWidth < 1024) return 3; // tablet
        return 4; // desktop
    };

    const [visibleLogos, setVisibleLogos] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            setVisibleLogos(getVisibleLogos());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                        e de qualidade superior para a pecuária brasileira.
                    </p>
                </motion.div>
            </div>

            {/* Carrossel Interativo de Logos */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden">
                    {/* Botão Anterior */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                        aria-label="Parceiro anterior"
                    >
                        <ChevronLeft className="w-6 h-6 text-red-800 group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Botão Próximo */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                        aria-label="Próximo parceiro"
                    >
                        <ChevronRight className="w-6 h-6 text-red-800 group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Container dos logos */}
                    <div className="flex items-center justify-center gap-4 md:gap-8 py-8 px-12 md:px-16">
                        {partners.slice(currentIndex, currentIndex + visibleLogos).concat(
                            currentIndex + visibleLogos > partners.length
                                ? partners.slice(0, (currentIndex + visibleLogos) - partners.length)
                                : []
                        ).map((partner, index) => (
                            <motion.div
                                key={`${partner.name}-${currentIndex}-${index}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center justify-center flex-shrink-0"
                                style={{
                                    width: visibleLogos === 1 ? '250px' : visibleLogos === 2 ? '200px' : '180px',
                                    height: '120px'
                                }}
                            >
                                <a
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-full h-full flex items-center justify-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.alt}
                                        width={160}
                                        height={80}
                                        className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105"
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            transform: partner.customScale ? `scale(${partner.customScale})` : undefined
                                        }}
                                    />
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Indicadores de posição */}
                    <div className="flex justify-center gap-2 mt-6">
                        {partners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlay(false);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-red-800'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Ir para parceiro ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
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
