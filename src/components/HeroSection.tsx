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
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100/95 text-red-900 border border-red-200 shadow-lg backdrop-blur-sm">
                                Pioneira em genômica no Brasil - desde 1991
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            <span className="inline-block bg-white/90 px-4 py-2 rounded-lg shadow-xl backdrop-blur-sm text-gray-900">
                                Excelência em
                            </span>
                            <br />
                            <span className="inline-block bg-red-800/95 px-4 py-2 rounded-lg shadow-xl backdrop-blur-sm text-white mt-2">
                                Genética Bovina e Ovina
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl mb-8 leading-relaxed"
                        >
                            <span className="inline-block bg-white/90 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm text-gray-800">
                                Somos especialistas em melhoramento genético e reprodução de bovinos e ovinos, oferecendo as melhores soluções.
                            </span>
                        </motion.p>

                        {/* CTA Cards - Similar to Quality Seals */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
                        >
                            {/* VER TOUROS */}
                            <Link
                                href="/catalogo"
                                className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-red-800 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-800 group-hover:border-red-900 transition-colors">
                                    <img
                                        src="/bois_amontoados.jpeg"
                                        alt="Touros"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-sm font-bold text-red-900 mb-2">VER TOUROS</h4>
                                <p className="text-xs text-gray-600">Confira nosso catálogo completo</p>
                            </Link>

                            {/* CONHEÇA NOSSOS SELOS */}
                            <Link
                                href="/nossos-selos"
                                className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-red-800 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-red-800 rounded-full flex items-center justify-center group-hover:bg-red-900 transition-colors">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h4 className="text-sm font-bold text-red-900 mb-2">CONHEÇA NOSSOS SELOS</h4>
                                <p className="text-xs text-gray-600">Certificações de qualidade</p>
                            </Link>

                            {/* VER SALDO DE BANCO */}
                            <Link
                                href="/saldo-banco"
                                className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-green-700 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-green-700 rounded-full flex items-center justify-center group-hover:bg-green-800 transition-colors">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <h4 className="text-sm font-bold text-green-900 mb-2">VER SALDO DE BANCO</h4>
                                <p className="text-xs text-gray-600">Consulte disponibilidade</p>
                            </Link>
                        </motion.div>

                        {/* Nossos Selos de Qualidade */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold uppercase tracking-wide">
                                    <span className="inline-block bg-white/90 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm text-gray-900">
                                        Nossos Selos de Qualidade
                                    </span>
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                {/* GENÔMICA 100% PURA */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/genomica_pioneira.jpeg"
                                            alt="Genômica 100% Pura"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">GENÔMICA 100% PURA</h4>
                                    <p className="text-[10px] text-gray-600">Genética testada</p>
                                </div>

                                {/* TTR IATF */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/ttr iatf.jpeg"
                                            alt="TTR IATF"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">TTR IATF</h4>
                                    <p className="text-[10px] text-gray-600">Partidas testadas</p>
                                </div>

                                {/* HOMOZIGOTO 100% MACIEZ */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/homozigoto_maciez.jpeg"
                                            alt="Homozigoto 100% Maciez"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">HOMOZIGOTO MACIEZ</h4>
                                    <p className="text-[10px] text-gray-600">Máxima maciez</p>
                                </div>

                                {/* HOMOZIGOTO PRETO */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/PRETO.png"
                                            alt="Homozigoto Preto"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">HOMOZIGOTO PRETO</h4>
                                    <p className="text-[10px] text-gray-600">Pelagem preta</p>
                                </div>

                                {/* HOMOZIGOTO VERMELHO */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/VERMELHO.png"
                                            alt="Homozigoto Vermelho"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">HOMOZIGOTO VERMELHO</h4>
                                    <p className="text-[10px] text-gray-600">Pelagem vermelha</p>
                                </div>

                                {/* 100% MOCHO */}
                                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                        <img
                                            src="/selos/MOCHO selo.png"
                                            alt="100% Mocho"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">100% MOCHO</h4>
                                    <p className="text-[10px] text-gray-600">Sem chifres</p>
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