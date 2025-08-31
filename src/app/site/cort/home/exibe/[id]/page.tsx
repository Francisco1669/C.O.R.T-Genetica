'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowLeft, Phone, Mail, Eye, ExternalLink } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import { use } from 'react';
import { tourosPorId } from '../../../../../../data/tourosPorId';

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
}

const selosInfo = {
    pelagem: { nome: 'Homozigose de Pelagem', color: 'bg-purple-100 text-purple-800' },
    homozigoto_preto: { nome: 'Homozigoto Preto', color: 'bg-gray-900 text-white' },
    homozigoto_vermelho: { nome: 'Homozigoto Vermelho', color: 'bg-red-600 text-white' },
    maciez: { nome: 'Maciez da Carne', color: 'bg-red-100 text-red-800' },
    iatf: { nome: 'IATF Assistida', color: 'bg-pink-100 text-pink-800' },
    rusticidade: { nome: 'Alta Rusticidade', color: 'bg-green-100 text-green-800' },
    adaptacao_tropical: { nome: 'Adaptação Tropical', color: 'bg-orange-100 text-orange-800' },
    qualidade_leite: { nome: 'Qualidade do Leite', color: 'bg-blue-100 text-blue-800' }
};

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function BullDetailPage({ params }: PageProps) {
    const { id } = use(params);
    const bullId = parseInt(id);

    const bull = tourosPorId[bullId as keyof typeof tourosPorId] as Bull;

    if (!bull) {
        notFound();
    }

    // Verificar se é um touro fora de estoque baseado na descrição
    const isOutOfStock = bull.descricao && bull.descricao.includes("fora de estoque");

    // Verificar se o touro tem imagem disponível
    const hasImage = bull.temImagem !== false;

    // URL externa do site oficial
    const urlExterna = `https://www.cortgeneticabrasil.com/site/cort/home/exibe/${bullId}`;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section com imagem em tamanho completo */}
            <section className="relative h-[80vh] min-h-[600px] max-h-[800px]">
                {isOutOfStock ? (
                    // Mostrar mensagem quando fora de estoque
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                        <div className="text-center p-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl mx-auto">
                            <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{bull.nome}</h2>
                            <p className="text-xl text-red-600 font-semibold mb-4">FORA DE ESTOQUE</p>
                            <p className="text-lg text-gray-700 mb-6">
                                Este touro não está mais disponível em nosso catálogo atual.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <strong>ID:</strong> {bullId} | <strong>Raça:</strong> {bull.raca}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : !hasImage ? (
                    // Mostrar placeholder quando não há imagem
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center p-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl mx-auto">
                            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{bull.nome}</h2>
                            <p className="text-xl text-orange-600 font-semibold mb-4">IMAGEM EM BREVE</p>
                            <p className="text-lg text-gray-700 mb-6">
                                A imagem deste touro estará disponível em breve. Todas as informações técnicas já estão atualizadas.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <strong>ID:</strong> {bullId} | <strong>Raça:</strong> {bull.raca} | <strong>Catálogo:</strong> {bull.catalogo}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Mostrar imagem normal quando disponível
                    <Image
                        src={bull.imagem}
                        alt={`Touro ${bull.nome} da raça ${bull.raca}`}
                        fill
                        className="object-contain object-center"
                        priority
                    />
                )}

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

                {/* Link para o site oficial */}
                <div className="absolute top-8 right-8 z-10">
                    <a
                        href={urlExterna}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600/90 backdrop-blur-sm hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Ver no Site Oficial
                    </a>
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
                            {/* Badge de categoria e ID */}
                            <div className="mb-4 flex flex-wrap gap-3">
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${bull.categoria === 'corte'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-blue-600 text-white'
                                    }`}>
                                    {bull.categoria.charAt(0).toUpperCase() + bull.categoria.slice(1)}
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-600 text-white">
                                    ID: {bullId}
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white">
                                    {bull.catalogo === 'catalogo1' ? 'Catálogo 1' : 'Catálogo 2'}
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
                            {bull.selos && bull.selos.length > 0 && (
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Descrição e características */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Informações do {bull.nome}</h2>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">ID do Touro</p>
                                            <p className="text-xl font-bold text-gray-900">{bullId}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">Raça</p>
                                            <p className="text-xl font-bold text-gray-900">{bull.raca}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">Categoria</p>
                                            <p className="text-xl font-bold text-gray-900">{bull.categoria}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">Catálogo</p>
                                            <p className="text-xl font-bold text-gray-900">{bull.catalogo === 'catalogo1' ? '1' : '2'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre o {bull.nome}</h3>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        {bull.descricao}
                                    </p>
                                    {isOutOfStock && (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                                </svg>
                                                <div>
                                                    <p className="font-semibold text-red-800">Status: Fora de Estoque</p>
                                                    <p className="text-red-600 text-sm">Este touro não está disponível para comercialização no momento.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {bull.caracteristicas && bull.caracteristicas.length > 0 && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Características</h3>
                                        <ul className="space-y-3">
                                            {bull.caracteristicas.map((caracteristica, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                    <span className="text-gray-700">{caracteristica}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>

                            {/* Card de contato e link externo */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                {/* Link para o site oficial */}
                                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                                    <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                                        <ExternalLink className="w-6 h-6 mr-3" />
                                        Site Oficial
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Veja todas as informações completas deste touro no site oficial da CORT Genética Brasil.
                                    </p>

                                    <a
                                        href={urlExterna}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                                    >
                                        <Eye className="w-5 h-5 mr-3" />
                                        Ver no Site Oficial
                                    </a>
                                </div>

                                {/* Card de contato */}
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
                        {/* Mostra alguns touros relacionados da mesma raça ou catálogo */}
                        {Object.values(tourosPorId)
                            .filter((otherBull: any) =>
                                otherBull.id !== bullId &&
                                otherBull.raca === bull.raca &&
                                otherBull.temImagem !== false &&
                                (!otherBull.descricao || !otherBull.descricao.includes("fora de estoque"))
                            )
                            .slice(0, 3)
                            .map((otherBull: any, index: number) => (
                                <motion.div
                                    key={otherBull.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href={`/site/cort/home/exibe/${otherBull.id}`}>
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
                                                <p className="text-sm text-gray-500">ID: {otherBull.id}</p>
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
