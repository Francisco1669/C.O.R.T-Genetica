'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const SobrePage = () => {
    const values = [
        {
            icon: Award,
            title: 'Ética',
            description: 'Conduzimos nossos negócios com integridade, transparência e respeito em todas as nossas relações.'
        },
        {
            icon: Target,
            title: 'Inovação',
            description: 'Pioneiros no uso de marcadores moleculares, sempre investindo em tecnologias de ponta para a pecuária brasileira.'
        },
        {
            icon: Users,
            title: 'Compromisso',
            description: 'Dedicação total com nossos clientes, oferecendo suporte técnico especializado e resultados comprovados.'
        },
        {
            icon: Award,
            title: 'Responsabilidade',
            description: 'Assumimos nossas obrigações com seriedade, contribuindo para o desenvolvimento do setor.'
        },
        {
            icon: Target,
            title: 'Lealdade',
            description: 'Construímos relacionamentos duradouros baseados na confiança e no respeito mútuo.'
        },
        {
            icon: Users,
            title: 'Gratidão',
            description: 'Valorizamos nossos parceiros, colaboradores e clientes, reconhecendo sua contribuição para nosso sucesso.'
        }
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
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Sobre a <span className="text-earth-brown">Cort Genética</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Pioneira em genética bovina no Brasil, combinando tradição, inovação e tecnologia
                            para transformar a pecuária brasileira há mais de 30 anos.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* História Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Nossa <span className="text-earth-brown">História</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    A Cort Genética Brasil nasceu da visão de revolucionar a pecuária nacional
                                    através da genética de excelência. Fundada em Uruguaiana, RS, rapidamente
                                    se estabeleceu como referência no setor.
                                </p>
                                <p>
                                    Fomos os primeiros no Brasil a implementar marcadores moleculares em 100%
                                    dos touros de nossa bateria, estabelecendo um novo padrão de qualidade e
                                    confiabilidade no mercado.
                                </p>
                                <p>
                                    Hoje, nossa tecnologia TTR e sistema de selos de qualidade garantem aos
                                    produtores resultados superiores e previsibilidade genética incomparável.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-red-800 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
                                <p className="text-lg leading-relaxed mb-6">
                                    Desenvolver e aplicar tecnologias para melhorar a produtividade da pecuária, gerando emprego e riqueza para todos.
                                </p>
                                <div className="border-t border-red-700 pt-6 mt-6">
                                    <h4 className="text-xl font-semibold mb-4">Nossa Visão</h4>
                                    <p className="text-green-100 leading-relaxed">
                                        Garantir resultados aos nossos clientes com sustentabilidade e crescimento em nosso segmento.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-center mt-6">
                                    <div>
                                        <div className="text-3xl font-bold">30</div>
                                        <div className="text-green-100">Anos de Experiência</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">100%</div>
                                        <div className="text-green-100">Marcadores Moleculares</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Galeria de Marcos */}
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
                            Nossa <span className="text-earth-brown">Jornada</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Marcos importantes que definiram nossa trajetória de inovação e liderança
                        </p>
                    </motion.div>

                    {/* Galeria de Fotos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src="/fotos_sobre/foto_laboratorio_com_atendente.jpeg"
                                    alt="Primeiros Marcadores Moleculares"
                                    className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">Primeiros Marcadores</h3>
                                    <p className="text-sm opacity-90">Implementação pioneira de marcadores moleculares na seleção</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src="/fotos_sobre/espermas_debois_guardados.jpeg"
                                    alt="Selo de Qualidade - 2015"
                                    className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2"> Selo de Qualidade</h3>
                                    <p className="text-sm opacity-90">Sistema exclusivo de certificação genética</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group md:col-span-2 lg:col-span-1"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src="/fotos_sobre/dono_cort_e_sua_filha.jpeg"
                                    alt="Evolução Tecnológica - Décadas de Inovação"
                                    className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">Tradição & Inovação</h3>
                                    <p className="text-sm opacity-90">Mais de 30 anos combinando tradição familiar com tecnologia de ponta</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Teste TTR Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <img
                                    src="/fotos_sobre/frente_cort_visao_de_Cima.PNG"
                                    alt="Teste TTR - Tecnologia de Ponta"
                                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-red-800 text-white p-4 rounded-2xl">
                                    <div className="text-2xl font-bold">TTR</div>
                                    <div className="text-sm">Teste de Termo Resistência Rápido</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Teste <span className="text-earth-brown">TTR</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                O Teste de Termo Resistência Rápido revolucionou a avaliação da qualidade
                                seminal na pecuária brasileira. Esta tecnologia exclusiva permite identificar
                                touros com maior resistência térmica, garantindo resultados superiores na
                                reprodução e maior eficiência reprodutiva.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-earth-brown">100%</div>
                                    <div className="text-gray-600">Precisão na Avaliação</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-earth-brown">Alta</div>
                                    <div className="text-gray-600">Resistência Térmica</div>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                O TTR representa nosso compromisso com a inovação e a busca constante
                                por tecnologias que elevam o padrão da pecuária nacional.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Valores */}
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
                            Princípios <span className="text-earth-brown">Fundamentais</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Os pilares que sustentam nossa cultura e guiam nossas ações diárias
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center group"
                                >
                                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800 transition-colors duration-300">
                                        <IconComponent className="w-8 h-8 text-earth-brown group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-800">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Pronto para Conhecer Nossas Tecnologias?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 leading-relaxed">
                            Descubra como nossa expertise pode transformar a genética do seu rebanho
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/tecnologia"
                                className="bg-white text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Explorar Tecnologias
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/contato"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-earth-brown transition-colors duration-200"
                            >
                                Falar Conosco
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SobrePage;
