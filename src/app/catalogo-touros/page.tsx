'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Award, Palette, Beef, Heart, Eye, ArrowRight, Download, FileText, CheckCircle, Clock, Users, Loader2 } from 'lucide-react';

const CatalogoTourosPage = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [selectedRace, setSelectedRace] = useState('todas');
    const [selectedSeals, setSelectedSeals] = useState<string[]>([]);

    // Dados mockados dos touros
    const touros = [
        {
            id: '001',
            nome: 'Forte CG',
            raca: 'Angus',
            categoria: 'corte',
            imagem: '/api/placeholder/300/200',
            selos: ['pelagem', 'maciez'],
            pedigree: 'PAI: Champion CG x MÃE: Elite CG',
            disponibilidade: 'Disponível',
            preco: 'R$ 45,00'
        },
        {
            id: '002',
            nome: 'Campeão CG',
            raca: 'Nelore',
            categoria: 'corte',
            imagem: '/api/placeholder/300/200',
            selos: ['pelagem', 'iatf'],
            pedigree: 'PAI: Líder CG x MÃE: Suprema CG',
            disponibilidade: 'Disponível',
            preco: 'R$ 38,00'
        },
        {
            id: '003',
            nome: 'Premium CG',
            raca: 'Holandês',
            categoria: 'leite',
            imagem: '/api/placeholder/300/200',
            selos: ['maciez', 'iatf'],
            pedigree: 'PAI: Master CG x MÃE: Princess CG',
            disponibilidade: 'Limitado',
            preco: 'R$ 52,00'
        },
        {
            id: '004',
            nome: 'Supremo CG',
            raca: 'Brahman',
            categoria: 'corte',
            imagem: '/api/placeholder/300/200',
            selos: ['pelagem', 'maciez', 'iatf'],
            pedigree: 'PAI: Royal CG x MÃE: Nobre CG',
            disponibilidade: 'Disponível',
            preco: 'R$ 48,00'
        },
        {
            id: '005',
            nome: 'Élite CG',
            raca: 'Jersey',
            categoria: 'leite',
            imagem: '/api/placeholder/300/200',
            selos: ['maciez'],
            pedigree: 'PAI: Noble CG x MÃE: Grace CG',
            disponibilidade: 'Disponível',
            preco: 'R$ 42,00'
        },
        {
            id: '006',
            nome: 'Dominador CG',
            raca: 'Angus',
            categoria: 'corte',
            imagem: '/api/placeholder/300/200',
            selos: ['pelagem', 'iatf'],
            pedigree: 'PAI: Power CG x MÃE: Victory CG',
            disponibilidade: 'Disponível',
            preco: 'R$ 50,00'
        }
    ];

    const racas = ['Angus', 'Nelore', 'Brahman', 'Holandês', 'Jersey', 'Limousin'];

    const selosInfo = [
        { id: 'pelagem', nome: 'Homozigose de Pelagem', icon: Palette, color: 'purple' },
        { id: 'maciez', nome: 'Maciez da Carne', icon: Beef, color: 'red' },
        { id: 'iatf', nome: 'IATF Assistida', icon: Heart, color: 'pink' }
    ];

    // Filtrar touros
    const filteredTouros = touros.filter(touro => {
        const matchesSearch = touro.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            touro.raca.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'todos' || touro.categoria === selectedCategory;
        const matchesRace = selectedRace === 'todas' || touro.raca === selectedRace;
        const matchesSeals = selectedSeals.length === 0 ||
            selectedSeals.every(seal => touro.selos.includes(seal));

        return matchesSearch && matchesCategory && matchesRace && matchesSeals;
    });

    const toggleSeal = (sealId: string) => {
        setSelectedSeals(prev =>
            prev.includes(sealId)
                ? prev.filter(s => s !== sealId)
                : [...prev, sealId]
        );
    };

    const getSealIcon = (sealId: string) => {
        const seal = selosInfo.find(s => s.id === sealId);
        return seal ? seal.icon : Award;
    };

    const getSealColor = (sealId: string) => {
        const seal = selosInfo.find(s => s.id === sealId);
        switch (seal?.color) {
            case 'purple': return 'bg-purple-100 text-purple-800';
            case 'red': return 'bg-red-200 text-red-800';
            case 'pink': return 'bg-pink-100 text-pink-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleDownload = async () => {
        if (isDownloading) return; // Previne múltiplos cliques

        setIsDownloading(true);
        setDownloadProgress(0);

        // Simula o tempo real de processamento de um arquivo de 68MB
        const steps = [
            { progress: 15, message: "Preparando download...", delay: 800 },
            { progress: 35, message: "Verificando arquivo...", delay: 1200 },
            { progress: 60, message: "Iniciando transferência...", delay: 1500 },
            { progress: 85, message: "Processando (68MB)...", delay: 2000 },
            { progress: 100, message: "Download iniciado!", delay: 500 }
        ];

        for (const step of steps) {
            await new Promise(resolve => setTimeout(resolve, step.delay));
            setDownloadProgress(step.progress);
        }

        // Inicia o download real
        const link = document.createElement('a');
        link.href = '/Catalogo_CORT_2023.pdf';
        link.download = 'Catalogo_CORT_2023.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset após o download
        setTimeout(() => {
            setIsDownloading(false);
            setDownloadProgress(0);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-red-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Catálogo de <span className="text-green-200">Touros</span>
                        </h1>
                        <p className="text-xl leading-relaxed mb-8">
                            Acesse nosso catálogo completo com informações detalhadas de todos os touros,
                            marcadores moleculares, teste TTR e selos de qualidade.
                        </p>

                        {/* Botão Principal de Download */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mb-12"
                        >
                            <button
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className={`inline-flex items-center px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl ${isDownloading
                                        ? 'bg-gray-500 cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700 hover:shadow-green-500/25 hover:scale-105'
                                    } text-white`}
                            >
                                {isDownloading ? (
                                    <>
                                        <Loader2 className="w-8 h-8 mr-3 animate-spin" />
                                        Processando... {downloadProgress}%
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-8 h-8 mr-3" />
                                        Baixar Catálogo Completo
                                    </>
                                )}
                            </button>

                            {/* Barra de progresso */}
                            {isDownloading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 max-w-md mx-auto"
                                >
                                    <div className="bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className="bg-green-400 h-full rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${downloadProgress}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <p className="text-green-100 text-sm mt-2 text-center">
                                        {downloadProgress < 100 ? 'Preparando arquivo de 68MB...' : 'Download iniciado!'}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">106</div>
                                <div className="text-green-100 text-sm">Páginas</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">68MB</div>
                                <div className="text-green-100 text-sm">Tamanho</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">100%</div>
                                <div className="text-green-100 text-sm">Gratuito</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Seção de Informações do PDF */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                O que você encontrará no catálogo?
                            </h2>
                            <p className="text-xl text-gray-600">
                                Um guia completo e detalhado para a seleção de touros de qualidade
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileText className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Informações Completas</h3>
                                <p className="text-gray-600">
                                    Dados detalhados de cada touro, incluindo pedigree, características genéticas e histórico reprodutivo
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Selos de Qualidade</h3>
                                <p className="text-gray-600">
                                    Certificações e selos que garantem a qualidade genética e reprodutiva dos touros
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Suporte Técnico</h3>
                                <p className="text-gray-600">
                                    Informações de contato para orientação na escolha do touro ideal para seu rebanho
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Download Alternativo */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Pronto para baixar?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            O download começará automaticamente. O arquivo tem 68MB e pode levar alguns minutos dependendo da sua conexão.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-colors duration-200 ${isDownloading
                                        ? 'bg-gray-500 cursor-not-allowed'
                                        : 'bg-red-800 hover:bg-red-700'
                                    } text-white`}
                            >
                                {isDownloading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Baixando... {downloadProgress}%
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-5 h-5 mr-2" />
                                        Baixar Agora
                                    </>
                                )}
                            </button>

                            <Link
                                href="/contato"
                                className="inline-flex items-center bg-white hover:bg-gray-100 text-red-800 border-2 border-red-800 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                            >
                                <Clock className="w-5 h-5 mr-2" />
                                Solicitar por Email
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-800">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Precisa de Ajuda na Escolha?
                        </h2>
                        <p className="text-xl text-green-100 mb-8">
                            Nossa equipe técnica está pronta para orientar na seleção do touro ideal para seu rebanho
                        </p>
                        <Link
                            href="/contato"
                            className="bg-white text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                        >
                            Falar com Especialista
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CatalogoTourosPage;
