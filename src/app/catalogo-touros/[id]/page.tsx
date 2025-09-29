'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowLeft, Phone, Mail } from 'lucide-react';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { tourosPorId } from '@/data/tourosPorId';

// Normaliza URLs do YouTube para formato embed (evita bloqueio em iframes)
function getYouTubeEmbedUrl(url?: string): string | undefined {
    if (!url) return undefined;
    try {
        const original = new URL(url);
        // Já é embed
        if (original.pathname.startsWith('/embed/')) {
            return `https://www.youtube-nocookie.com${original.pathname}${original.search}`;
        }
        let videoId = '';
        if (original.hostname.includes('youtu.be')) {
            videoId = original.pathname.replace('/', '');
        } else if (original.hostname.includes('youtube.com')) {
            const v = original.searchParams.get('v');
            if (v) videoId = v;
        }
        if (videoId) {
            const params = new URLSearchParams({ rel: '0', modestbranding: '1' });
            return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
        }
        return url;
    } catch {
        return url;
    }
}

// Tipagem para os touros
interface Bull {
    id: number;
    nome: string;
    raca: string;
    categoria: 'corte' | 'leite';
    imagem: string;
    catalogo: string;
    temImagem: boolean;
    selos: string[];
    destaque: string;
    descricao?: string;
    caracteristicas?: string[];
    videoUrl?: string;
}

type BullData = Bull;


const selosInfo = {
    pelagem: { nome: 'Homozigose de Pelagem', color: 'bg-purple-100 text-purple-800' },
    homozigoto_preto: { nome: 'Homozigoto Preto', color: 'bg-gray-900 text-white' },
    homozigoto_vermelho: { nome: 'Homozigoto Vermelho', color: 'bg-red-600 text-white' },
    maciez: { nome: 'Maciez da Carne', color: 'bg-red-100 text-red-800' },
    iatf: { nome: 'IATF Assistida', color: 'bg-pink-100 text-pink-800' }
};

interface PageParams {
    id: string;
}

export default function BullDetailPage({ params }: { params: Promise<PageParams> }) {
    const { id } = use(params);
    const bullId = parseInt(id);
    const bull = tourosPorId[bullId as keyof typeof tourosPorId] as BullData;

    if (!bull) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section com imagem em tamanho completo */}
            <section className="relative h-[80vh] min-h-[600px] max-h-[800px]">
                <Image
                    src={bull.imagem}
                    alt={`Touro ${bull.nome} da raça ${bull.raca}`}
                    fill
                    className="object-contain object-center"
                    priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Botão voltar */}
                <div className="absolute top-8 left-8 z-10">
                    <Link
                        href="/catalogo-touros"
                        className="inline-flex items-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Voltar ao Catálogo
                    </Link>
                </div>

                {/* Conteúdo sobreposto */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            {/* Badge de categoria */}
                            <div className="mb-4">
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${bull.categoria === 'corte'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-blue-600 text-white'
                                    }`}>
                                    {bull.categoria.charAt(0).toUpperCase() + bull.categoria.slice(1)}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                {bull.nome}
                            </h1>
                            <p className="text-xl md:text-2xl text-green-200 mb-4">
                                {bull.raca}
                            </p>
                            <p className="text-lg text-white/90 max-w-2xl">
                                {bull.destaque}
                            </p>

                            {/* Selos */}
                            {bull.selos.length > 0 && (
                                <div className="flex flex-wrap gap-3 mt-6">
                                    {bull.selos.map((selo) => (
                                        <span
                                            key={selo}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm ${selosInfo[selo as keyof typeof selosInfo]?.color || 'bg-gray-100 text-gray-800'
                                                } bg-opacity-90`}
                                        >
                                            <Award className="w-4 h-4 inline mr-2" />
                                            {selosInfo[selo as keyof typeof selosInfo]?.nome || selo}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Seção de informações detalhadas */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className={`${(bull.descricao || bull.caracteristicas) ? 'grid grid-cols-1 lg:grid-cols-2 gap-12' : 'flex justify-center'}`}>
                            {/* Descrição e características */}
                            {(bull.descricao || bull.caracteristicas) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    {bull.descricao && (
                                        <>
                                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o {bull.nome}</h2>
                                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                                {bull.descricao}
                                            </p>
                                        </>
                                    )}

                                    {bull.videoUrl && (
                                        <div className="mb-10">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vídeo</h3>
                                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow">
                                                <iframe
                                                    src={getYouTubeEmbedUrl(bull.videoUrl)}
                                                    title={`Vídeo do touro ${bull.nome}`}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {bull.caracteristicas && bull.caracteristicas.length > 0 && (
                                        <>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Características</h3>
                                            <ul className="space-y-3">
                                                {bull.caracteristicas.map((caracteristica: string, index: number) => (
                                                    <li key={index} className="flex items-start">
                                                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                        <span className="text-gray-700">{caracteristica}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </motion.div>
                            )}

                            {/* Card de contato */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className={`space-y-8 ${!(bull.descricao || bull.caracteristicas) ? 'max-w-md' : ''}`}
                            >
                                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                                    <h3 className="text-2xl font-bold text-red-800 mb-4">Interessado?</h3>
                                    <p className="text-gray-600 mb-6">
                                        Entre em contato conosco para mais informações sobre preços e disponibilidade.
                                    </p>

                                    <div className="space-y-3">
                                        <Link
                                            href="/contato"
                                            className="inline-flex items-center w-full bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                                        >
                                            <Phone className="w-5 h-5 mr-3" />
                                            Entrar em Contato
                                        </Link>

                                        <Link
                                            href="mailto:contato@cortgenetica.com.br"
                                            className="inline-flex items-center w-full bg-white hover:bg-gray-50 text-red-800 border-2 border-red-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                                        >
                                            <Mail className="w-5 h-5 mr-3" />
                                            Enviar Email
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de touros relacionados */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Outros Touros em Destaque
                        </h2>
                        <p className="text-xl text-gray-600">
                            Conheça outros reprodutores de nossa seleção
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(tourosPorId)
                            .filter(b => b.id !== bull.id)
                            .slice(0, 3)
                            .map((otherBull, index) => (
                                <motion.div
                                    key={otherBull.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href={`/catalogo-touros/${otherBull.id}`}>
                                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer">
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={otherBull.imagem}
                                                    alt={`Touro ${otherBull.nome}`}
                                                    fill
                                                    className="object-cover object-top hover:scale-110 transition-transform duration-300"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{otherBull.nome}</h3>
                                                <p className="text-gray-600 mb-2">{otherBull.raca}</p>
                                                <p className="text-sm text-gray-500">{otherBull.destaque}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}