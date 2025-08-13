'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Award, Palette, Beef, Heart, Eye, ArrowRight } from 'lucide-react';

const CatalogoTourosPage = () => {
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
            case 'red': return 'bg-red-100 text-red-800';
            case 'pink': return 'bg-pink-100 text-pink-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-green-800">
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
                            Explore nossa seleção premium de touros com marcadores moleculares,
                            teste TTR e selos de qualidade garantidos.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-green-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">100%</div>
                                <div className="text-green-100 text-sm">Marcadores Moleculares</div>
                            </div>
                            <div className="bg-green-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">50+</div>
                                <div className="text-green-100 text-sm">Touros Disponíveis</div>
                            </div>
                            <div className="bg-green-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">3</div>
                                <div className="text-green-100 text-sm">Selos de Qualidade</div>
                            </div>    
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filtros */}
            <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {/* Busca */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar por nome ou raça..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        {/* Categoria */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="todos">Todas as Categorias</option>
                            <option value="corte">Gado de Corte</option>
                            <option value="leite">Gado Leiteiro</option>
                        </select>

                        {/* Raça */}
                        <select
                            value={selectedRace}
                            onChange={(e) => setSelectedRace(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="todas">Todas as Raças</option>
                            {racas.map(raca => (
                                <option key={raca} value={raca}>{raca}</option>
                            ))}
                        </select>

                        {/* Selos */}
                        <div className="flex flex-wrap gap-2">
                            {selosInfo.map(selo => {
                                const IconComponent = selo.icon;
                                const isSelected = selectedSeals.includes(selo.id);
                                return (
                                    <button
                                        key={selo.id}
                                        onClick={() => toggleSeal(selo.id)}
                                        className={`filter-badge selo-${selo.id} ${isSelected ? 'active' : ''}`}
                                    >
                                        <IconComponent className="w-4 h-4 mr-1" />
                                        {selo.nome.split(' ')[0]}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Resultados */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-600">
                            {filteredTouros.length} touro(s) encontrado(s)
                        </span>
                        {(selectedSeals.length > 0 || selectedCategory !== 'todos' || selectedRace !== 'todas' || searchTerm) && (
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('todos');
                                    setSelectedRace('todas');
                                    setSelectedSeals([]);
                                }}
                                className="text-green-800 hover:text-green-600 font-medium"
                            >
                                Limpar Filtros
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Grid de Touros */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredTouros.map((touro, index) => (
                            <motion.div
                                key={touro.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Imagem */}
                                <div className="relative h-48 bg-green-100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-green-800">
                                            <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-white font-bold text-xl">🐂</span>
                                            </div>
                                            <div className="font-semibold">{touro.nome}</div>
                                        </div>
                                    </div>

                                    {/* Status de disponibilidade */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${touro.disponibilidade === 'Disponível'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {touro.disponibilidade}
                                        </span>
                                    </div>

                                    {/* Selos */}
                                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-1">
                                        {touro.selos.map(selo => {
                                            const IconComponent = getSealIcon(selo);
                                            return (
                                                <div
                                                    key={selo}
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${getSealColor(selo)}`}
                                                    title={selosInfo.find(s => s.id === selo)?.nome}
                                                >
                                                    <IconComponent className="w-4 h-4" />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Conteúdo */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-gray-900">{touro.nome}</h3>
                                        <span className="text-lg font-bold text-green-800">{touro.preco}</span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Raça:</span>
                                            <span className="font-medium text-gray-900">{touro.raca}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Categoria:</span>
                                            <span className="font-medium text-gray-900 capitalize">{touro.categoria}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-sm text-gray-600 mb-1">Pedigree:</div>
                                        <div className="text-sm text-gray-900">{touro.pedigree}</div>
                                    </div>

                                    <Link
                                        href={`/catalogo-touros/${touro.id}`}
                                        className="w-full bg-green-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                                    >
                                        <Eye className="w-5 h-5 mr-2" />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Mensagem quando não há resultados */}
                    {filteredTouros.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Filter className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum touro encontrado</h3>
                            <p className="text-gray-600 mb-4">
                                Tente ajustar os filtros ou termos de busca
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('todos');
                                    setSelectedRace('todas');
                                    setSelectedSeals([]);
                                }}
                                className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                            >
                                Limpar Todos os Filtros
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-800">
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
                            className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
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
