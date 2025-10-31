'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, AlertCircle } from 'lucide-react';
import { tourosPorId } from '../../data/tourosPorId';

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

export default function SaldoBancoPage() {
    // Filtrar touros que têm "/saldo/" no caminho da imagem
    const saldoBulls = Object.values(tourosPorId).filter((bull: any) =>
        bull.imagem && bull.imagem.includes('/saldo/')
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full mb-6">
                            <AlertCircle size={20} />
                            <span className="font-semibold">Quantidade Limitada</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Saldo de <span className="text-green-700">Banco</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
                            Touros de alta qualidade com quantidade <strong>limitada de sêmen</strong> disponível.
                        </p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Aproveite esta oportunidade exclusiva para adquirir genética premium
                            de reprodutores com estoque reduzido.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Lista de Touros */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {saldoBulls.length} {saldoBulls.length === 1 ? 'Touro Disponível' : 'Touros Disponíveis'}
                            </h2>
                        </div>
                    </motion.div>

                    {/* Grid de Touros */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {saldoBulls.map((bull: any, index: number) => (
                            <motion.div
                                key={bull.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Link href={`/catalogo-touros/${bull.id}`}>
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer relative">
                                        {/* Badge "Saldo" */}
                                        <div className="absolute top-4 right-4 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            SALDO
                                        </div>

                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={bull.imagem}
                                                alt={bull.nome}
                                                fill
                                                className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                                priority={index < 8}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
                                                {bull.nome}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-3">{bull.raca}</p>

                                            {/* Selos */}
                                            {bull.selos && bull.selos.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {bull.selos.map((selo: string, idx: number) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full font-semibold"
                                                        >
                                                            {selo}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between mt-4">
                                                <span className="text-sm font-semibold text-green-700">Ver Detalhes</span>
                                                <ArrowRight className="w-4 h-4 text-green-700 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {saldoBulls.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                        >
                            <div className="max-w-md mx-auto">
                                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Nenhum touro em saldo no momento
                                </h3>
                                <p className="text-gray-600">
                                    Volte em breve para conferir novos touros com quantidade limitada de sêmen.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-green-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Interessado em algum touro?
                        </h3>
                        <p className="text-lg text-gray-700 mb-8">
                            Entre em contato conosco para verificar a disponibilidade e reservar o sêmen antes que acabe!
                        </p>
                        <Link
                            href="/contato"
                            className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 hover:scale-105 transition-all duration-200"
                        >
                            Entrar em Contato
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
