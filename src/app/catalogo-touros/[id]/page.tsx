'use client';

import { motion } from 'framer-motion';
import { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, Palette, Beef, Heart, Download, Share2, Phone, Mail } from 'lucide-react';

// Dados mockados do touro (em produção viria de uma API)
const getTourosData = (id: string) => {
    const tourosData: { [key: string]: any } = {
        '001': {
            id: '001',
            nome: 'Forte CG',
            raca: 'Angus',
            categoria: 'corte',
            registro: 'ANG001-2024',
            nascimento: '2020-03-15',
            peso: '850 kg',
            altura: '145 cm',
            imagem: '/api/placeholder/600/400',
            selos: ['pelagem', 'maciez'],
            disponibilidade: 'Disponível',
            preco: 'R$ 45,00',
            pedigree: {
                pai: 'Champion CG',
                registroPai: 'ANG789-2018',
                mae: 'Elite CG',
                registroMae: 'ANG456-2017'
            },
            indices: {
                dep: '+12.5',
                dmg: '+8.2',
                dmp: '+15.7',
                facilidadeParto: '95%',
                habilidadeMaterna: '+6.8'
            },
            marcadoresMoleculares: {
                maciez: {
                    calpaina: 'CC (Favorável)',
                    calpastatina: 'GG (Favorável)',
                    resultado: 'Carne Extra Macia'
                },
                pelagem: {
                    mc1r: 'AA (Preto Homozigoto)',
                    resultado: '100% Pelagem Preta'
                }
            },
            testeTTR: {
                resultado: '92%',
                classificacao: 'Excelente',
                correlacaoCampo: '94%'
            },
            historico: [
                { data: '2024-01-15', evento: 'Coleta de sêmen', resultado: 'Aprovado TTR 92%' },
                { data: '2024-01-10', evento: 'Exame andrológico', resultado: 'Apto para reprodução' },
                { data: '2023-12-20', evento: 'Análise genética', resultado: 'Marcadores confirmados' }
            ],
            dosesDisponiveis: 150,
            dosesReservadas: 23
        },
        '002': {
            id: '002',
            nome: 'Campeão CG',
            raca: 'Nelore',
            categoria: 'corte',
            registro: 'NEL002-2024',
            nascimento: '2019-08-22',
            peso: '920 kg',
            altura: '155 cm',
            imagem: '/api/placeholder/600/400',
            selos: ['pelagem', 'iatf'],
            disponibilidade: 'Disponível',
            preco: 'R$ 38,00',
            pedigree: {
                pai: 'Líder CG',
                registroPai: 'NEL123-2017',
                mae: 'Suprema CG',
                registroMae: 'NEL456-2016'
            },
            indices: {
                dep: '+18.3',
                dmg: '+12.1',
                dmp: '+22.4',
                facilidadeParto: '98%',
                habilidadeMaterna: '+8.9'
            },
            marcadoresMoleculares: {
                adaptacao: {
                    slick: 'AA (Favorável)',
                    tolloid: 'GG (Favorável)',
                    resultado: 'Alta Adaptação Tropical'
                },
                pelagem: {
                    mc1r: 'GG (Vermelho Homozigoto)',
                    resultado: '100% Pelagem Vermelha'
                }
            },
            testeTTR: {
                resultado: '89%',
                classificacao: 'Excelente',
                correlacaoCampo: '91%'
            },
            historico: [
                { data: '2024-01-12', evento: 'Coleta de sêmen', resultado: 'Aprovado TTR 89%' },
                { data: '2024-01-08', evento: 'Exame andrológico', resultado: 'Apto para reprodução' },
                { data: '2023-12-15', evento: 'Análise genética', resultado: 'Marcadores confirmados' }
            ],
            dosesDisponiveis: 200,
            dosesReservadas: 45
        }
    };

    return tourosData[id] || null;
};

interface PageProps {
    params: Promise<{ id: string }>;
}

const TourosDetalhePage = ({ params }: PageProps) => {
    const resolvedParams = use(params);
    const [activeTab, setActiveTab] = useState('geral');

    const touro = getTourosData(resolvedParams.id);

    if (!touro) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Touro não encontrado</h1>
                    <Link href="/catalogo-touros" className="text-green-800 hover:underline">
                        Voltar ao catálogo
                    </Link>
                </div>
            </div>
        );
    }

    const selosInfo = [
        { id: 'pelagem', nome: 'Homozigose de Pelagem', icon: Palette, color: 'bg-purple-100 text-purple-800' },
        { id: 'maciez', nome: 'Maciez da Carne', icon: Beef, color: 'bg-red-100 text-red-800' },
        { id: 'iatf', nome: 'IATF Assistida', icon: Heart, color: 'bg-pink-100 text-pink-800' }
    ];

    const tabs = [
        { id: 'geral', label: 'Informações Gerais' },
        { id: 'genetica', label: 'Análise Genética' },
        { id: 'indices', label: 'Índices Zootécnicos' },
        { id: 'historico', label: 'Histórico' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-6">
                    <Link
                        href="/catalogo-touros"
                        className="inline-flex items-center text-green-800 hover:text-green-600 mb-4"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Voltar ao Catálogo
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                {touro.nome}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600">
                                <span>Registro: {touro.registro}</span>
                                <span>•</span>
                                <span>Raça: {touro.raca}</span>
                                <span>•</span>
                                <span className="capitalize">Categoria: {touro.categoria}</span>
                            </div>
                        </div>

                        <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-3">
                            <span className="text-2xl font-bold text-green-800">{touro.preco}</span>
                            <div className="flex gap-2">
                                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    <Share2 className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    <Download className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conteúdo Principal */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Coluna Principal */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Imagem e Selos */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                            >
                                {/* Imagem */}
                                <div className="relative h-80 bg-green-100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-green-800">
                                            <div className="w-24 h-24 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-white font-bold text-3xl">🐂</span>
                                            </div>
                                            <div className="text-xl font-semibold">{touro.nome}</div>
                                            <div className="text-green-600">{touro.raca}</div>
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                            {touro.disponibilidade}
                                        </span>
                                    </div>
                                </div>

                                {/* Selos */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Selos de Qualidade</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {touro.selos.map((selo: string) => {
                                            const seloInfo = selosInfo.find(s => s.id === selo);
                                            if (!seloInfo) return null;
                                            const IconComponent = seloInfo.icon;
                                            return (
                                                <div
                                                    key={selo}
                                                    className={`flex items-center px-4 py-2 rounded-lg ${seloInfo.color}`}
                                                >
                                                    <IconComponent className="w-5 h-5 mr-2" />
                                                    <span className="font-medium">{seloInfo.nome}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Tabs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="tabs-container"
                            >
                                {/* Tab Headers */}
                                <div className="tabs-header">
                                    <div className="flex flex-wrap">
                                        {tabs.map(tab => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="tab-content">
                                    {activeTab === 'geral' && (
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-4">Dados Físicos</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                                                        <div className="text-2xl font-bold text-gray-900">{touro.peso}</div>
                                                        <div className="text-sm text-gray-600">Peso</div>
                                                    </div>
                                                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                                                        <div className="text-2xl font-bold text-gray-900">{touro.altura}</div>
                                                        <div className="text-sm text-gray-600">Altura</div>
                                                    </div>
                                                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                                                        <div className="text-2xl font-bold text-gray-900">{touro.nascimento.split('-')[0]}</div>
                                                        <div className="text-sm text-gray-600">Nascimento</div>
                                                    </div>
                                                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                                                        <div className="text-2xl font-bold text-gray-900">{touro.testeTTR.resultado}</div>
                                                        <div className="text-sm text-gray-600">TTR</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-4">Pedigree</h4>
                                                <div className="bg-gray-50 rounded-lg p-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-sm text-gray-600 mb-1">Pai</div>
                                                            <div className="font-bold text-gray-900">{touro.pedigree.pai}</div>
                                                            <div className="text-sm text-gray-500">{touro.pedigree.registroPai}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-gray-600 mb-1">Mãe</div>
                                                            <div className="font-bold text-gray-900">{touro.pedigree.mae}</div>
                                                            <div className="text-sm text-gray-500">{touro.pedigree.registroMae}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'genetica' && (
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-4">Marcadores Moleculares</h4>
                                                {Object.entries(touro.marcadoresMoleculares).map(([key, value]: [string, any]) => (
                                                    <div key={key} className="bg-gray-50 rounded-lg p-4 mb-4">
                                                        <h5 className="font-bold text-gray-900 mb-3 capitalize">{key}</h5>
                                                        <div className="space-y-2">
                                                            {Object.entries(value).map(([marker, result]: [string, any]) => (
                                                                marker !== 'resultado' && (
                                                                    <div key={marker} className="flex justify-between">
                                                                        <span className="text-gray-600 capitalize">{marker}:</span>
                                                                        <span className="font-medium text-gray-900">{result}</span>
                                                                    </div>
                                                                )
                                                            ))}
                                                            <div className="border-t pt-2 mt-3">
                                                                <div className="flex justify-between">
                                                                    <span className="font-bold text-gray-900">Resultado:</span>
                                                                    <span className="font-bold text-green-800">{value.resultado}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-4">Teste TTR</h4>
                                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                                    <div className="grid grid-cols-3 gap-4 text-center">
                                                        <div>
                                                            <div className="text-2xl font-bold text-green-800">{touro.testeTTR.resultado}</div>
                                                            <div className="text-sm text-gray-600">Resultado TTR</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-2xl font-bold text-green-800">{touro.testeTTR.classificacao}</div>
                                                            <div className="text-sm text-gray-600">Classificação</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-2xl font-bold text-green-800">{touro.testeTTR.correlacaoCampo}</div>
                                                            <div className="text-sm text-gray-600">Correlação Campo</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'indices' && (
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">Índices Zootécnicos</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {Object.entries(touro.indices).map(([key, value]: [string, any]) => (
                                                    <div key={key} className="bg-gray-50 rounded-lg p-4">
                                                        <div className="text-center">
                                                            <div className="text-2xl font-bold text-gray-900">{value}</div>
                                                            <div className="text-sm text-gray-600 capitalize">
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'historico' && (
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">Histórico Reprodutivo</h4>
                                            <div className="space-y-4">
                                                {touro.historico.map((evento: any, index: number) => (
                                                    <div key={index} className="border-l-4 border-green-600 pl-4 py-2">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <div className="font-medium text-gray-900">{evento.evento}</div>
                                                                <div className="text-sm text-gray-600">{evento.resultado}</div>
                                                            </div>
                                                            <div className="text-sm text-gray-500">{evento.data}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">

                            {/* Disponibilidade */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Disponibilidade</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Doses Disponíveis:</span>
                                        <span className="font-bold text-green-800">{touro.dosesDisponiveis}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Doses Reservadas:</span>
                                        <span className="font-medium text-gray-900">{touro.dosesReservadas}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Preço por Dose:</span>
                                        <span className="text-xl font-bold text-gray-900">{touro.preco}</span>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                    <button className="w-full bg-green-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                                        Solicitar Orçamento
                                    </button>
                                    <button className="w-full border-2 border-green-800 text-green-800 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200">
                                        Reservar Doses
                                    </button>
                                </div>
                            </motion.div>

                            {/* Contato */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Precisa de Ajuda?</h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Nossa equipe técnica está pronta para esclarecer dúvidas sobre este touro.
                                </p>

                                <div className="space-y-3">
                                    <a
                                        href="tel:+5535414-0164"
                                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <Phone className="w-5 h-5 text-green-800 mr-3" />
                                        <div>
                                            <div className="font-medium text-gray-900">(55) 3414-0164</div>
                                            <div className="text-sm text-gray-600">Ligar agora</div>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:atendimento@cortgeneticabrasil.com"
                                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <Mail className="w-5 h-5 text-green-800 mr-3" />
                                        <div>
                                            <div className="font-medium text-gray-900">Enviar E-mail</div>
                                            <div className="text-sm text-gray-600">Resposta em 24h</div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Touros Relacionados */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Touros Similares</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/catalogo-touros/002"
                                        className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div className="font-medium text-gray-900">Campeão CG</div>
                                        <div className="text-sm text-gray-600">Nelore • R$ 38,00</div>
                                    </Link>
                                    <div className="text-center py-4">
                                        <Link
                                            href="/catalogo-touros"
                                            className="text-green-800 hover:underline text-sm font-medium"
                                        >
                                            Ver todos os touros →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourosDetalhePage;
