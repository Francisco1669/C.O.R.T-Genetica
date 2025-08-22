'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-red-50 overflow-hidden">
            {/* Background pattern - Gradiente profissional */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-30"></div>

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
                            Pioneira em Genética Bovina no Brasil
                        </span>
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Excelência em <br />
                        <span className="text-red-800">Genética Bovina</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Somos especialistas em melhoramento genético de bovinos,
                        oferecendo as melhores soluções para seu rebanho
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
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

                    {/* Nossos Selos de Qualidade */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-semibold text-red-800 uppercase tracking-wide">Nossos Selos de Qualidade</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {/* GENÔMICA 100% PURA */}
                            <div className="bg-white rounded-2xl p-6 shadow-md text-center border border-red-100">
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-xl">
                                    <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">GENÔMICA 100% PURA</h4>
                                <p className="text-sm text-gray-600">Genética testada e validada com rigor científico</p>
                            </div>

                            {/* TTR IATF */}
                            <div className="bg-white rounded-2xl p-6 shadow-md text-center border border-red-100">
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-xl">
                                    <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">TTR IATF</h4>
                                <p className="text-sm text-gray-600">Todas as partidas submetidas ao teste TTR</p>
                            </div>

                            {/* HOMOZIGOTO 100% MACIEZ */}
                            <div className="bg-white rounded-2xl p-6 shadow-md text-center border border-red-100">
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-xl">
                                    <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">HOMOZIGOTO 100% MACIEZ</h4>
                                <p className="text-sm text-gray-600">Touro com genética para máxima maciez de carne</p>
                            </div>
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