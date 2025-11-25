'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16">
            {/* Background image with brightness for both mobile and desktop */}
            <div className="absolute inset-0">
                <img
                    src="/bg_image.jpg"
                    alt="Background"
                    className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-orange-50/40 to-red-50/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 -mt-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-900 border border-red-200">
                                Pioneira em genômica no Brasil - desde 1991
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Excelência em <br />
                            <span className="text-red">Genética Bovina e Ovina</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
                        >
                            Somos especialistas em melhoramento genético e reprodução de bovinos e ovinos, oferecendo as melhores soluções.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col gap-4 mb-12 max-w-md"
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/catalogo"
                                    className="btn-primary text-lg px-8 py-4 rounded-lg hover:scale-105 transition-all duration-200 font-semibold text-center flex-1"
                                >
                                    VER TOUROS
                                </Link>
                                <Link
                                    href="/sobre"
                                    className="bg-white text-red-800 border-2 border-red-800 text-lg px-8 py-4 rounded-lg hover:bg-red-50 hover:scale-105 transition-all duration-200 font-semibold text-center flex-1"
                                >
                                    CONHEÇA NOSSA HISTÓRIA
                                </Link>
                            </div>
                            <Link
                                href="/saldo-banco"
                                className="bg-green-700 text-white border-2 border-green-700 text-lg px-8 py-4 rounded-lg hover:bg-green-800 hover:scale-105 transition-all duration-200 font-semibold text-center w-full"
                            >
                                VER SALDO DE BANCO
                            </Link>
                        </motion.div>

                        {/* Nossos Selos de Qualidade */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">Nossos Selos de Qualidade</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {/* GENÔMICA 100% PURA */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/genomica_pioneira.jpeg"
                                            alt="Genômica 100% Pura"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-1">GENÔMICA 100% PURA</h4>
                                    <p className="text-xs text-gray-600">Genética testada com rigor científico</p>
                                </div>

                                {/* TTR IATF */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/ttr iatf.jpeg"
                                            alt="TTR IATF"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-1">TTR IATF</h4>
                                    <p className="text-xs text-gray-600">Todas as partidas testadas</p>
                                </div>

                                {/* HOMOZIGOTO 100% MACIEZ */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/homozigoto_maciez.jpeg"
                                            alt="Homozigoto 100% Maciez"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-1">HOMOZIGOTO 100% MACIEZ</h4>
                                    <p className="text-xs text-gray-600">Genética para máxima maciez</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

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