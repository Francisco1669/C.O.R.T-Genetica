''''use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Award, Home, AlertCircle, ArrowRight, Search, Filter } from 'lucide-react';
import { tourosPorId } from '../../../data/tourosPorId';

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

export default function RacaPage({ params }: { params: { raca: string } }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todas');

    const decodedRace = decodeURIComponent(params.raca);

    const bullsOfRace = Object.values(tourosPorId).filter((bull: any) =>
        bull.raca === decodedRace &&
        bull.temImagem !== false &&
        typeof bull.imagem === 'string' && bull.imagem.trim() !== '' &&
        !bull.descricao?.includes("fora de estoque")
    );

    const filteredBulls = bullsOfRace.filter((bull: any) => {
        const matchesSearch = bull.nome.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'todas' || bull.categoria === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Raça <span className="text-red-800">{decodedRace}</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore nossa seleção de touros da raça {decodedRace}.
                        </p>
                    </motion.div>

                    {/* Filtros */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                {/* Barra de pesquisa */}
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Buscar por nome..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Filtro por categoria */}
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
                                >
                                    <option value="todas">Todas as categorias</option>
                                    <option value="corte">Corte</option>
                                    <option value="leite">Leite</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Grid de Touros Filtrados */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredBulls.map((bull: any, index: number) => (
                            <motion.div
                                key={bull.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Link href={`/site/cort/home/exibe/${bull.id}`}>
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer">
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={bull.imagem}
                                                alt={`Touro ${bull.nome} da raça ${bull.raca}`}
                                                fill
                                                className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                                priority={index < 4}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${bull.categoria === 'corte'
                                                    ? 'bg-red-600 text-white'
                                                    : 'bg-blue-600 text-white'
                                                    }`}>
                                                    {bull.categoria.charAt(0).toUpperCase() + bull.categoria.slice(1)}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-800 transition-colors">
                                                    {bull.nome}
                                                </h3>
                                                <p className="text-gray-600 font-medium">{bull.raca}</p>
                                                <p className="text-sm text-gray-500 mt-1">{bull.destaque}</p>
                                            </div>

                                            {bull.selos && bull.selos.length > 0 && (
                                                <div className="mb-4">
                                                    <div className="flex flex-wrap gap-1">
                                                        {bull.selos.slice(0, 2).map((selo: string) => (
                                                            <span
                                                                key={selo}
                                                                className={`px-2 py-1 rounded-md text-xs font-medium ${selosInfo[selo as keyof typeof selosInfo]?.color || 'bg-gray-100 text-gray-800'
                                                                    }`}
                                                            >
                                                                <Award className="w-3 h-3 inline mr-1" />
                                                                {selo === 'homozigoto_preto' ? 'Homozigoto Preto' :
                                                                    selo === 'homozigoto_vermelho' ? 'Homozigoto Vermelho' :
                                                                        selo === 'maciez' ? 'Maciez' :
                                                                            selo === 'iatf' ? 'IATF' :
                                                                                selosInfo[selo as keyof typeof selosInfo]?.nome || selo}
                                                            </span>
                                                        ))}
                                                        {bull.selos.length > 2 && (
                                                            <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                                                                +{bull.selos.length - 2}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-lg font-bold text-red-800">ID: {bull.id}</span>
                                                </div>
                                                <div className="flex items-center text-red-800 font-semibold group-hover:text-red-600">
                                                    <span className="text-sm mr-1">Ver detalhes</span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredBulls.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                        >
                            <div className="max-w-md mx-auto">
                                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Nenhum touro encontrado
                                </h3>
                                <p className="text-gray-600">
                                    Tente ajustar os filtros de busca para encontrar mais touros.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
'''