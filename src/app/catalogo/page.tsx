'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
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

const representativeBullNames: { [key: string]: string } = {
    'Angus': 'Silvestre',
    'Braford': 'Mic',
    'Brangus': 'Marreta',
    'Red Brangus': 'Malagueta',
    'Polled Hereford': 'Max',
    'Nelore': 'MIDAS FVC',
    'Nelore Mocho': 'ÍNDICE',
    'Tababuá': 'Lapso da Jangada',
    'Ultra Black': 'CRIOULO',
    'Charolês Mocho': 'TARUMÃ',
    'Charolês': 'Mágico',
    'Simental': 'Naipe',
    'Belted Galloway': 'Guapo',
    'Galloway': 'Gaulês',
    'Holandês': 'Lucas',
    'Gir leiteiro': 'Maguari',
    'Girolando 3/4 Hol + 1/4 Gir': 'Faceiro',
    'Jersey': 'FERDINANDO',
    'Guzerá': 'JATOBA',
    'Indubrasil': 'TUPI',
    'Normando': 'Seibo',
    'Braunvieh': 'Vernon',
    'Red Angus': 'Matreiro',
    'Nelore Padrao': 'BEST FIV DA RIB',
};

export default function CatalogoRacasPage() {
    const allBulls = Object.values(tourosPorId).filter((bull: any) =>
        bull.temImagem !== false &&
        typeof bull.imagem === 'string' && bull.imagem.trim() !== '' &&
        !bull.descricao?.includes("fora de estoque")
    );

    const uniqueRaces = Array.from(new Set(allBulls.map((bull: any) => bull.raca))).sort();

    const representativeBulls = uniqueRaces.map(race => {
        const representativeName = representativeBullNames[race];
        let bullForRace = null;

        if (representativeName) {
            bullForRace = allBulls.find((bull: any) => bull.nome.toUpperCase() === representativeName.toUpperCase() && bull.raca === race);
        }

        if (!bullForRace) {
            bullForRace = allBulls.find((bull: any) => bull.raca === race);
        }

        return {
            raca: race,
            imagem: bullForRace ? bullForRace.imagem : '/public/CORT_GenéticaBrasil_logotipo.png', // Imagem padrão
            nome: bullForRace ? bullForRace.nome : 'Touro Representante',
        };
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
                            Nossas <span className="text-red-800">Raças</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Selecione uma raça para ver os touros disponíveis.
                        </p>
                    </motion.div>

                    {/* Grid de Raças */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {representativeBulls.map((bull, index) => (
                            <motion.div
                                key={bull.raca}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Link href={`/catalogo/${encodeURIComponent(bull.raca)}`}>
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer">
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={bull.imagem}
                                                alt={`Representante da raça ${bull.raca}`}
                                                fill
                                                className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                                priority={index < 4}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-800 transition-colors">
                                                {bull.raca}
                                            </h3>
                                            <div className="flex items-center justify-between mt-4">
                                                <span className="text-sm font-semibold text-red-800">Ver Touros</span>
                                                <ArrowRight className="w-4 h-4 text-red-800 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {representativeBulls.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                        >
                            <div className="max-w-md mx-auto">
                                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Nenhuma raça encontrada
                                </h3>
                                <p className="text-gray-600">
                                    Não há touros disponíveis no momento.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}