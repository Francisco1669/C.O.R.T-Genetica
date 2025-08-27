'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FlaskConical, CheckCircle, TrendingUp, Shield, Thermometer, ArrowRight, BarChart3 } from 'lucide-react';

const TesteTTRPage = () => {
    const testSteps = [
        {
            step: 1,
            title: 'Coleta da Amostra',
            description: 'Coleta cuidadosa de sêmen de cada partida produzida, seguindo protocolos rigorosos de qualidade.',
            icon: FlaskConical
        },
        {
            step: 2,
            title: 'Teste de Resistência',
            description: 'Exposição controlada a temperatura elevada por período determinado para simular estresse térmico.',
            icon: Thermometer
        },
        {
            step: 3,
            title: 'Análise de Viabilidade',
            description: 'Avaliação da motilidade e viabilidade espermática após o teste de estresse.',
            icon: BarChart3
        },
        {
            step: 4,
            title: 'Correlação de Campo',
            description: 'Comparação dos resultados com taxas de prenhez e fertilidade observadas no campo.',
            icon: TrendingUp
        }
    ];

    const benefits = [
        {
            icon: Shield,
            title: 'Garantia de Qualidade',
            description: 'Cada partida é testada individualmente, garantindo que apenas sêmen de alta qualidade chegue ao campo.',
            stats: '99.2% de correlação com fertilidade'
        },
        {
            icon: TrendingUp,
            title: 'Previsibilidade',
            description: 'Resultados do TTR permitem prever com precisão o desempenho reprodutivo no campo.',
            stats: '95% de acurácia na previsão'
        },
        {
            icon: CheckCircle,
            title: 'Redução de Perdas',
            description: 'Eliminação de partidas com baixa viabilidade antes do uso, evitando prejuízos econômicos.',
            stats: '40% menos falhas reprodutivas'
        }
    ];

    const correlationData = [
        { ttr: '85-100%', field: '90-95%', quality: 'Excelente', color: 'bg-green-500' },
        { ttr: '70-84%', field: '75-89%', quality: 'Boa', color: 'bg-blue-500' },
        { ttr: '55-69%', field: '60-74%', quality: 'Regular', color: 'bg-yellow-500' },
        { ttr: '40-54%', field: '45-59%', quality: 'Baixa', color: 'bg-orange-500' },
        { ttr: '<40%', field: '<45%', quality: 'Descartada', color: 'bg-red-500' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-green-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-red-800 rounded-2xl flex items-center justify-center">
                                <FlaskConical className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Teste <span className="text-earth-brown">TTR</span>
                        </h1>
                        <div className="text-xl text-gray-600 mb-4">
                            <strong>Termo Resistência Rápido</strong>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Nosso teste exclusivo que avalia a resistência do sêmen ao estresse térmico,
                            garantindo alta correlação com a fertilidade de campo e qualidade superior
                            em todas as partidas comercializadas.
                        </p>
                        <div className="bg-red-100border border-green-200 rounded-lg p-4 inline-block">
                            <span className="text-earth-brown font-semibold">
                                🧪 100% das partidas são submetidas ao Teste TTR
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Como Funciona */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Como Funciona o <span className="text-earth-brown">Teste TTR</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Metodologia científica rigorosa que simula condições de estresse para avaliar a qualidade do sêmen
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center relative"
                                >
                                    {/* Connector line */}
                                    {index < testSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-green-200 z-0"></div>
                                    )}

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-red-100rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                            <IconComponent className="w-8 h-8 text-earth-brown" />
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">{step.step}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Correlação com Campo */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Correlação com <span className="text-earth-brown">Resultados de Campo</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Alta correlação entre resultados do TTR e taxa de prenhez observada no campo
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                                    Tabela de Correlação TTR vs Campo
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="px-4 py-3 text-left font-semibold text-gray-900">Resultado TTR</th>
                                                <th className="px-4 py-3 text-left font-semibold text-gray-900">Taxa de Campo</th>
                                                <th className="px-4 py-3 text-left font-semibold text-gray-900">Qualidade</th>
                                                <th className="px-4 py-3 text-left font-semibold text-gray-900">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {correlationData.map((data, index) => (
                                                <motion.tr
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="border-b border-gray-100"
                                                >
                                                    <td className="px-4 py-3 font-medium text-gray-900">{data.ttr}</td>
                                                    <td className="px-4 py-3 text-gray-700">{data.field}</td>
                                                    <td className="px-4 py-3">
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${data.color}`}>
                                                            {data.quality}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {data.quality === 'Descartada' ? (
                                                            <span className="text-red-600 font-medium">❌ Rejeitada</span>
                                                        ) : (
                                                            <span className="text-earth-brown font-medium">✅ Aprovada</span>
                                                        )}
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Vantagens do <span className="text-earth-brown">Teste TTR</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Benefícios comprovados que garantem maior eficiência reprodutiva
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-red-100rounded-2xl flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-earth-brown" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                        <span className="text-earth-brown text-sm font-semibold">{benefit.stats}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Diferencial Técnico */}
            <section className="py-20 bg-red-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Nosso Diferencial Técnico
                        </h2>
                        <p className="text-xl text-green-100 mb-8 leading-relaxed">
                            O Teste TTR da Cort Genética Brasil é único no mercado, desenvolvido
                            após anos de pesquisa e correlação com resultados de campo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">99.2%</div>
                                <div className="text-green-100">Correlação com Campo</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">100%</div>
                                <div className="text-green-100">Partidas Testadas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">30+</div>
                                <div className="text-green-100">Anos de Pesquisa</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">40%</div>
                                <div className="text-green-100">Menos Falhas</div>
                            </div>
                        </div>

                        <div className="bg-red-900 bg-opacity-80 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4">Protocolo Exclusivo</h3>
                            <p className="text-green-100 leading-relaxed">
                                Nosso protocolo TTR foi desenvolvido internamente através de extensivos
                                estudos de correlação, sendo constantemente refinado para garantir
                                a máxima precisão na previsão de fertilidade.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Garanta a Qualidade do Seu Sêmen
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Todos os nossos touros passam pelo rigoroso Teste TTR. Veja nosso catálogo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/catalogo-touros"
                                className="bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Ver Touros Testados
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/tecnologia"
                                className="bg-transparent border-2 border-earth-brown text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-red-800 hover:text-white transition-colors duration-200"
                            >
                                Outras Tecnologias
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TesteTTRPage;
