'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dna, CheckCircle, TrendingUp, Clock, Target, ArrowRight } from 'lucide-react';

const MarcadoresMolecularesPage = () => {
    const characteristics = [
        {
            title: 'Maciez da Carne',
            description: 'Identificação de genes responsáveis pela textura e qualidade da carne',
            impact: 'Aumento de 25% na satisfação do consumidor'
        },
        {
            title: 'Resistência a Doenças',
            description: 'Marcadores para resistência natural a parasitas e enfermidades',
            impact: 'Redução de 40% nos custos veterinários'
        },
        {
            title: 'Eficiência Alimentar',
            description: 'Genes relacionados à conversão alimentar e ganho de peso',
            impact: 'Melhoria de 30% na conversão alimentar'
        },
        {
            title: 'Fertilidade',
            description: 'Marcadores para características reprodutivas e prolificidade',
            impact: 'Aumento de 20% na taxa de prenhez'
        },
        {
            title: 'Qualidade do Leite',
            description: 'Genes para composição e volume de produção leiteira',
            impact: 'Incremento de 35% na produção'
        },
        {
            title: 'Adaptabilidade',
            description: 'Resistência ao calor e adaptação a diferentes climas',
            impact: 'Melhor performance em 15% das condições'
        }
    ];

    const benefits = [
        {
            icon: Clock,
            title: 'Seleção Precoce',
            description: 'Identificação do potencial genético desde o nascimento, reduzindo o tempo de seleção de anos para meses.'
        },
        {
            icon: Target,
            title: 'Precisão Aumentada',
            description: 'Seleção baseada no DNA oferece 99% de precisão comparado a 60% dos métodos tradicionais.'
        },
        {
            icon: TrendingUp,
            title: 'Progresso Acelerado',
            description: 'Melhoramento genético 3x mais rápido através da seleção assistida por marcadores.'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-light-green">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-dark-green rounded-2xl flex items-center justify-center">
                                <Dna className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Marcadores <span className="text-dark-green">Moleculares</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Tecnologia de ponta que revoluciona a seleção genética através da análise direta do DNA,
                            identificando com precisão características de importância econômica.
                        </p>
                        <div className="bg-red-100border border-green-200 rounded-lg p-4 inline-block">
                            <span className="text-dark-green font-semibold">
                                🧬 100% dos nossos touros são testados com marcadores moleculares
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
                            Como <span className="text-dark-green">Funciona</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Processo científico rigoroso que analisa o DNA para identificar genes específicos
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-red-100rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-dark-green">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Coleta de Amostra</h3>
                            <p className="text-gray-600">
                                Coleta não invasiva de material genético através de pelos ou sangue do animal.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-red-100rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-dark-green">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Análise Laboratorial</h3>
                            <p className="text-gray-600">
                                Sequenciamento do DNA em laboratório especializado com tecnologia de ponta.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-red-100rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-dark-green">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Interpretação</h3>
                            <p className="text-gray-600">
                                Análise dos resultados por geneticistas especializados para tomada de decisão.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Características Analisadas */}
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
                            Características <span className="text-dark-green">Analisadas</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mais de 50 marcadores moleculares para características economicamente importantes
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {characteristics.map((char, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                                    <h3 className="text-lg font-bold text-gray-900">{char.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{char.description}</p>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                    <span className="text-dark-green text-sm font-medium">{char.impact}</span>
                                </div>
                            </motion.div>
                        ))}
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
                            Vantagens dos <span className="text-dark-green">Marcadores Moleculares</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Benefícios comprovados que transformam a eficiência do melhoramento genético
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
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-red-100rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <IconComponent className="w-8 h-8 text-dark-green" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Estatísticas */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="section-dark rounded-2xl p-8 text-white"
                    >
                        <h3 className="text-2xl font-bold text-center mb-8">Resultados Comprovados</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">99%</div>
                                <div className="text-green-100">Precisão na Seleção</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">3x</div>
                                <div className="text-green-100">Velocidade do Progresso</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">50+</div>
                                <div className="text-green-100">Marcadores Analisados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">25+</div>
                                <div className="text-green-100">Anos de Experiência</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 section-dark">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Descubra o Poder dos Marcadores Moleculares
                        </h2>
                        <p className="text-xl text-green-100 mb-8">
                            Veja como aplicamos essa tecnologia em nosso catálogo de touros
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/catalogo-touros"
                                className="bg-white text-dark-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Ver Touros Testados
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/tecnologia"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-green transition-colors duration-200"
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

export default MarcadoresMolecularesPage;
