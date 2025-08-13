'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Imagens de demonstração (substituir por imagens reais)
    const images = [
        {
            src: '/api/placeholder/800/500',
            alt: 'Touro de alta genética em pastagem',
            title: 'Genética Superior'
        },
        {
            src: '/api/placeholder/800/500',
            alt: 'Trabalho de campo na fazenda',
            title: 'Trabalho de Campo'
        },
        {
            src: '/api/placeholder/800/500',
            alt: 'Laboratório de análise genética',
            title: 'Laboratório Avançado'
        },
        {
            src: '/api/placeholder/800/500',
            alt: 'Inseminação artificial',
            title: 'Inseminação Artificial'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-20 bg-gray-50">
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
                        Conheça Nossa <span className="text-green-800">Operação</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Veja de perto como trabalhamos com excelência em genética bovina
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Video/Carousel Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Video Player Placeholder */}
                        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-700 transition-colors duration-200"
                                >
                                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                                </motion.button>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <h3 className="text-2xl font-bold mb-2">Vídeo Institucional</h3>
                                    <p className="text-gray-200">Conheça a Cort Genética Brasil</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Carousel */}
                        <div className="mt-8 relative">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                    className="bg-green-800"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-white">
                                        <div className="text-center">
                                            <h4 className="text-xl font-bold mb-2">{images[currentSlide].title}</h4>
                                            <p className="text-green-100">{images[currentSlide].alt}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Carousel Controls */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-200"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-200"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-700" />
                            </button>

                            {/* Dots indicator */}
                            <div className="flex justify-center mt-4 space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                            ? 'bg-green-800 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Excelência em <span className="text-green-800">Cada Detalhe</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Nossa operação combina tradição e inovação para entregar resultados
                                excepcionais. Cada etapa do processo é cuidadosamente monitorada
                                para garantir a máxima qualidade genética.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Seleção Rigorosa</h4>
                                    <p className="text-gray-600">Cada touro passa por criteriosa avaliação genética antes de integrar nossa bateria.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Controle de Qualidade</h4>
                                    <p className="text-gray-600">Teste TTR em todas as partidas e acompanhamento contínuo dos resultados de campo.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Assistência Técnica</h4>
                                    <p className="text-gray-600">Suporte especializado para garantir os melhores resultados em sua propriedade.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Conheça Mais Sobre Nós
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
