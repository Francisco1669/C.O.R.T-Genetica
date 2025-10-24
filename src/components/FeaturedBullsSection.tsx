'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowRight } from 'lucide-react';
import { tourosPorId } from '@/data/tourosPorId';

interface FeaturedBull {
    id: string;
    nome: string;
    raca: string;
    categoria: 'corte' | 'leite';
    imagem: string;
    selos: string[];
    destaque: string;
}

const featuredBulls: FeaturedBull[] = (() => {
    const allSaldo = Object.values(tourosPorId)
        .filter((t: any) => typeof t.imagem === 'string' && t.imagem.startsWith('/saldo/'))
        .sort((a: any, b: any) => (a.id || 0) - (b.id || 0));

    const seenRacas = new Set<string>();
    const firstPass: any[] = [];
    const leftovers: any[] = [];

    for (const t of allSaldo) {
        const raca = String(t.raca || '').trim();
        if (raca && !seenRacas.has(raca)) {
            seenRacas.add(raca);
            firstPass.push(t);
        } else {
            leftovers.push(t);
        }
    }

    const selected = [...firstPass, ...leftovers].slice(0, 6);

    return selected.map((t: any) => ({
        id: String(t.id),
        nome: t.nome,
        raca: t.raca,
        categoria: t.categoria,
        imagem: t.imagem,
        selos: Array.isArray(t.selos) ? t.selos : [],
        destaque: t.destaque || ''
    }));
})();

const selosInfo = {
    pelagem: { nome: 'Homozigose de Pelagem', color: 'bg-purple-100 text-purple-800' },
    homozigoto_preto: { nome: 'Homozigoto Preto', color: 'bg-gray-900 text-white' },
    homozigoto_vermelho: { nome: 'Homozigoto Vermelho', color: 'bg-red-600 text-white' },
    maciez: { nome: 'Maciez da Carne', color: 'bg-red-100 text-red-800' },
    iatf: { nome: 'IATF Assistida', color: 'bg-pink-100 text-pink-800' }
};

const FeaturedBullsSection = () => {
    return (
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
                        Touros em <span className="text-red-800">Destaque</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Conheça nossa seleção premium de touros com genética superior,
                        certificados com os mais rigorosos padrões de qualidade
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredBulls.map((bull, index) => (
                        <motion.div
                            key={bull.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/catalogo-touros/${bull.id}`}>
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer">
                                    {/* Imagem */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={bull.imagem}
                                            alt={`Touro ${bull.nome} da raça ${bull.raca}`}
                                            fill
                                            className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                            priority={index === 0}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        {/* Badge de Categoria */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${bull.categoria === 'corte'
                                                ? 'bg-red-600 text-white'
                                                : 'bg-blue-600 text-white'
                                                }`}>
                                                {bull.categoria.charAt(0).toUpperCase() + bull.categoria.slice(1)}
                                            </span>
                                        </div>

                                        {/* Overlay gradiente */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Conteúdo do card */}
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-800 transition-colors">
                                                {bull.nome}
                                            </h3>
                                            <p className="text-gray-600 font-medium">{bull.raca}</p>
                                            <p className="text-sm text-gray-500 mt-1">{bull.destaque}</p>
                                        </div>

                                        {/* Selos */}
                                        {bull.selos.length > 0 && (
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {bull.selos.slice(0, 2).map((selo) => (
                                                        <span
                                                            key={selo}
                                                            className={`px-2 py-1 rounded-md text-xs font-medium ${selosInfo[selo as keyof typeof selosInfo]?.color || 'bg-gray-100 text-gray-800'
                                                                }`}
                                                        >
                                                            <Award className="w-3 h-3 inline mr-1" />
                                                            {selo === 'homozigoto_preto' ? 'Homozigoto Preto' : selo === 'homozigoto_vermelho' ? 'Homozigoto Vermelho' : selo === 'maciez' ? 'Maciez' : 'IATF'}
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

                                        {/* CTA e Contato */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-lg font-bold text-red-800">Entre em contato</span>
                                                <span className="text-sm text-gray-500 block">para preços</span>
                                            </div>
                                            <div className="flex items-center text-red-800 font-semibold group-hover:text-red-600">
                                                <span className="text-sm mr-1">Ver mais</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA para catálogo completo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/catalogo-touros"
                        className="inline-flex items-center bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Ver Catálogo Completo
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedBullsSection;
