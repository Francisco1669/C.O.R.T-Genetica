'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { GiCow, GiDna2, GiStarMedal } from 'react-icons/gi';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-red-50 overflow-hidden pt-20 pb-16">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/fotos_sobre/frente_cort_visao_de_Cima.PNG"
                    alt="Frente da CORT Genética - Visão Superior"
                    className="w-full h-full object-cover"
                />
                {/* Overlay escuro para melhor legibilidade do texto */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Gradiente profissional sobreposto */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-blue-50/60 to-purple-50/40 opacity-50"></div>
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
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 text-red-900 border border-white/50 mb-6 backdrop-blur-sm">
                            Pioneira em genômica no Brasil - desde 1991
                        </span>
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    >
                        Excelência em <br />
                        <span className="text-red-300 drop-shadow-lg">Genética Bovina e Ovina</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
                    >
                        Somos especialistas em melhoramento genético e reprodução de bovinos e ovinos, oferecendo as melhores soluções.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Link
                            href="/catalogo"
                            className="btn-primary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform duration-200"
                        >
                            Ver touros
                        </Link>
                        <Link
                            href="/sobre"
                            className="bg-white text-red-800 border-2 border-white px-6 py-3 rounded-lg inline-block hover:bg-gray-100 hover:scale-105 transition-all duration-200 font-semibold"
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
                            <h3 className="text-lg font-semibold text-white uppercase tracking-wide drop-shadow-lg">Nossos Selos de Qualidade</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {/* GENÔMICA 100% PURA */}
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center border border-white/50">
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-xl">
                                    <GiDna2 className="w-6 h-6 text-red-800" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">GENÔMICA 100% PURA</h4>
                                <p className="text-sm text-gray-600">Genética testada e validada com rigor científico</p>
                            </div>

                            {/* TTR IATF */}
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center border border-white/50">
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-xl">
                                    <GiCow className="w-6 h-6 text-red-800" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">TTR IATF</h4>
                                <p className="text-sm text-gray-600">Todas as partidas submetidas ao teste TTR</p>
                            </div>

                            {/* HOMOZIGOTO 100% MACIEZ */}
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center border border-white/50">
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-xl">
                                    <GiStarMedal className="w-6 h-6 text-red-800" />
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
                        className="text-white/70"
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;