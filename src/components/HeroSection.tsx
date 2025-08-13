'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-red-50 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-50 text-red-900 border border-red-300 mb-6">
                            🏆 Pioneira em Genética Bovina no Brasil
                        </span>
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        <span className="text-red-800">Genética</span> de{' '}
                        <span className="block md:inline">Excelência</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
                    >
                        Marcadores moleculares em <strong>100% dos touros</strong> de nossa bateria.
                        Tecnologia TTR, selos de qualidade e resultados comprovados no campo.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Link
                            href="/catalogo-touros"
                            className="btn-primary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform duration-200"
                        >
                            Ver Catálogo de Touros
                        </Link>
                        <Link
                            href="/sobre"
                            className="btn-secondary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform duration-200"
                        >
                            Conheça Nossa História
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-red-800 mb-2">100%</div>
                            <div className="text-gray-600">Marcadores Moleculares</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-red-800 mb-2">TTR</div>
                            <div className="text-gray-600">Teste de Qualidade</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-red-800 mb-2">3</div>
                            <div className="text-gray-600">Selos de Qualidade</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gray-400"
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
