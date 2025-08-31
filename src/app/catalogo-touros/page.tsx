'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Award, Palette, Beef, Heart, Eye, ArrowRight, Download, FileText, CheckCircle, Clock, Users, Loader2, Droplet, Shield, Sun } from 'lucide-react';

const CatalogoTourosPage = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [selectedRace, setSelectedRace] = useState('todas');
    const [selectedSeals, setSelectedSeals] = useState<string[]>([]);

    // Importar touros do sistema organizado
    const { tourosPorId } = require('../../data/tourosPorId');

    // Converter para array e pegar apenas alguns para exibição
    const touros = Object.values(tourosPorId).slice(0, 12).map((touro: any) => ({
        id: touro.id.toString(),
        nome: touro.nome,
        raca: touro.raca,
        categoria: touro.categoria,
        imagem: touro.imagem,
        selos: touro.selos || [],
        pedigree: 'Informações completas no site oficial',
        disponibilidade: 'Disponível',
        preco: 'Consulte preço'
    }));

    const selosInfo = [
        { id: 'pelagem', nome: 'Homozigose de Pelagem', icon: Palette, color: 'purple' },
        { id: 'homozigoto_preto', nome: 'Homozigoto Preto', icon: Palette, color: 'black' },
        { id: 'homozigoto_vermelho', nome: 'Homozigoto Vermelho', icon: Palette, color: 'red' },
        { id: 'maciez', nome: 'Maciez da Carne', icon: Beef, color: 'red' },
        { id: 'iatf', nome: 'IATF Assistida', icon: Heart, color: 'pink' },
        { id: 'rusticidade', nome: 'Alta Rusticidade', icon: Shield, color: 'brown' },
        { id: 'adaptacao_tropical', nome: 'Adaptação Tropical', icon: Sun, color: 'orange' },
        { id: 'qualidade_leite', nome: 'Qualidade do Leite', icon: Droplet, color: 'blue' }
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
            setTimeout(() => {
                setDownloadProgress(step.progress);
            }, step.delay);
        }
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

            {/* Seção especial: Touros por ID */}
            <section className="py-20 bg-green-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Sistema de URLs por ID
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Agora você pode acessar qualquer touro diretamente pela URL com seu ID numérico
                        </p>
                        <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
                            <p className="text-lg font-semibold text-gray-900 mb-2">Formato da URL:</p>
                            <code className="text-green-600 text-xl bg-gray-100 px-4 py-2 rounded">
                                /site/cort/home/exibe/{'{ID}'}
                            </code>
                            <p className="text-sm text-gray-600 mt-2">
                                Exemplo: <Link href="/site/cort/home/exibe/176" className="text-green-600 hover:underline">/site/cort/home/exibe/176</Link>
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Exemplos de touros organizados */}
                        {[
                            { id: 176, nome: 'FORC BOOMER', raca: 'Angus' },
                            { id: 154, nome: 'CHARUTO', raca: 'Angus' },
                            { id: 217, nome: 'DON LEO', raca: 'Angus' },
                            { id: 287, nome: 'ANAMÃ', raca: 'Braford' },
                            { id: 301, nome: 'JATOBA', raca: 'Guzera' },
                            { id: 339, nome: 'TARUMÃ', raca: 'Charolês Mocho' }
                        ].map((exemplo, index) => (
                            <motion.div
                                key={exemplo.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="mb-4">
                                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                        ID: {exemplo.id}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{exemplo.nome}</h3>
                                <p className="text-gray-600 mb-4">{exemplo.raca}</p>
                                <Link
                                    href={`/site/cort/home/exibe/${exemplo.id}`}
                                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    <Eye className="w-4 h-4 mr-2" />
                                    Ver Touro
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-gray-700 mb-6">
                            🎯 <strong>Total organizado:</strong> 70 touros com IDs mapeados
                        </p>
                        <p className="text-gray-600 mb-8">
                            Todos os touros podem ser acessados diretamente pela URL /site/cort/home/exibe/{'{ID}'}
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 inline-block">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">URLs de Exemplo:</h3>
                            <div className="space-y-1 text-blue-700">
                                <p><Link href="/site/cort/home/exibe/176" className="hover:underline">/site/cort/home/exibe/176</Link> → FORC BOOMER</p>
                                <p><Link href="/site/cort/home/exibe/154" className="hover:underline">/site/cort/home/exibe/154</Link> → CHARUTO</p>
                                <p><Link href="/site/cort/home/exibe/217" className="hover:underline">/site/cort/home/exibe/217</Link> → DON LEO</p>
                            </div>
                        </div>
                    </div>
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
