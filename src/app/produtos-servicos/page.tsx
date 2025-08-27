'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, Scale, Shield, BookOpen, PiggyBank, ArrowRight, CheckCircle } from 'lucide-react';

const ProdutosServicosPage = () => {
    const produtos = [
        {
            icon: Package,
            title: 'Insumos para Inseminação Artificial',
            description: 'Linha completa de produtos e materiais para inseminação artificial com qualidade garantida.',
            items: [
                'Aplicadores universais e específicos',
                'Luvas descartáveis especializadas',
                'Gel lubrificante veterinário',
                'Bainhas e camisas protetoras',
                'Seringas e agulhas específicas',
                'Material de higienização'
            ],
            categoria: 'insumos',
            cor: 'from-blue-600 to-blue-800'
        },
        {
            icon: Scale,
            title: 'Troncos e Balanças',
            description: 'Equipamentos robustos para manejo seguro e pesagem precisa do gado.',
            items: [
                'Troncos de contenção automáticos',
                'Balanças eletrônicas de precisão',
                'Sistemas de identificação eletrônica',
                'Portões de manejo inteligentes',
                'Sistemas de embarcadouro',
                'Acessórios e peças de reposição'
            ],
            categoria: 'equipamentos',
            cor: 'from-amber-600 to-amber-800'
        },
        {
            icon: Shield,
            title: 'DIUB - Dispositivo Intrauterino',
            description: 'Dispositivo anticoncepcional bovino para controle reprodutivo eficiente.',
            items: [
                'DIUB de diferentes tamanhos',
                'Aplicadores específicos',
                'Manual de aplicação',
                'Treinamento técnico',
                'Suporte pós-aplicação',
                'Protocolo de remoção'
            ],
            categoria: 'reprodução',
            cor: 'from-purple-600 to-purple-800'
        },
        {
            icon: BookOpen,
            title: 'Catálogos Especializados',
            description: 'Material técnico completo para corte e leite com informações detalhadas.',
            items: [
                'Catálogo de Gado de Corte 2024',
                'Catálogo de Gado Leiteiro 2024',
                'Guia de Marcadores Moleculares',
                'Manual de Teste TTR',
                'Certificados de Selos de Qualidade',
                'Relatórios técnicos personalizados'
            ],
            categoria: 'informação',
            cor: 'from-amber-600 to-amber-800'
        },
        {
            icon: PiggyBank,
            title: 'Saldo de Banco - Ferramenta Exclusiva',
            description: 'Sistema online para gerenciamento de créditos e controle financeiro.',
            items: [
                'Consulta de saldo em tempo real',
                'Histórico de movimentações',
                'Relatórios personalizados',
                'Alertas de vencimento',
                'Integração com sistema de vendas',
                'Suporte técnico dedicado'
            ],
            categoria: 'tecnologia',
            cor: 'from-red-600 to-red-800'
        }
    ];

    const servicos = [
        {
            title: 'Consultoria Técnica Especializada',
            description: 'Acompanhamento técnico personalizado para otimizar resultados reprodutivos.',
            beneficios: [
                'Análise de rebanho individualizada',
                'Planejamento reprodutivo estratégico',
                'Seleção de touros adequados',
                'Protocolos de IATF customizados'
            ]
        },
        {
            title: 'Treinamento e Capacitação',
            description: 'Cursos e workshops para técnicos e produtores sobre nossas tecnologias.',
            beneficios: [
                'Curso de Inseminação Artificial',
                'Workshop de Marcadores Moleculares',
                'Treinamento em Teste TTR',
                'Certificação técnica oficial'
            ]
        },
        {
            title: 'Suporte Técnico 24/7',
            description: 'Assistência técnica completa para garantir o sucesso dos seus programas.',
            beneficios: [
                'Atendimento telefônico especializado',
                'Suporte via WhatsApp',
                'Visitas técnicas programadas',
                'Relatórios de acompanhamento'
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-red-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Produtos e <span className="text-green-200">Serviços</span>
                        </h1>
                        <p className="text-xl leading-relaxed mb-8">
                            Soluções completas para inseminação artificial, manejo de gado e controle reprodutivo.
                            Tudo que você precisa para maximizar os resultados do seu rebanho.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">500+</div>
                                <div className="text-green-100 text-sm">Produtos Disponíveis</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">30+</div>
                                <div className="text-green-100 text-sm">Anos de Experiência</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                <div className="text-green-100 text-sm">Suporte Técnico</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Produtos */}
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
                            Nossos <span className="text-earth-brown">Produtos</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Linha completa de produtos para atender todas as necessidades da pecuária moderna
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {produtos.map((produto, index) => {
                            const IconComponent = produto.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={isEven ? '' : 'lg:col-start-2'}>
                                        <div className="flex items-center mb-6">
                                            <div className={`w-16 h-16 ${produto.cor === 'from-blue-600 to-blue-800' ? 'bg-blue-800' : produto.cor === 'from-amber-600 to-amber-800' ? 'bg-red-800' : produto.cor === 'from-purple-600 to-purple-800' ? 'bg-purple-800' : produto.cor === 'from-amber-600 to-amber-800' ? 'bg-amber-800' : 'bg-red-800'} rounded-2xl flex items-center justify-center mr-4`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{produto.title}</h3>
                                                <p className="text-gray-600 capitalize">{produto.categoria}</p>
                                            </div>
                                        </div>

                                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                            {produto.description}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {produto.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-5 h-5 text-earth-brown flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button className={`inline-flex items-center px-6 py-3 ${produto.cor === 'from-blue-600 to-blue-800' ? 'bg-blue-800 hover:bg-blue-700' : produto.cor === 'from-amber-600 to-amber-800' ? 'bg-red-800 hover:bg-red-700' : produto.cor === 'from-purple-600 to-purple-800' ? 'bg-purple-800 hover:bg-purple-700' : produto.cor === 'from-amber-600 to-amber-800' ? 'bg-amber-800 hover:bg-amber-700' : 'bg-red-800 hover:bg-red-700'} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                                            Solicitar Orçamento
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </button>
                                    </div>

                                    {/* Visual Card */}
                                    <div className={isEven ? 'lg:col-start-2' : ''}>
                                        <div className={`${produto.cor === 'from-blue-600 to-blue-800' ? 'bg-blue-800' : produto.cor === 'from-amber-600 to-amber-800' ? 'bg-red-800' : produto.cor === 'from-purple-600 to-purple-800' ? 'bg-purple-800' : produto.cor === 'from-amber-600 to-amber-800' ? 'bg-amber-800' : 'bg-red-800'} rounded-2xl p-8 text-white relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
                                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-5 rounded-full transform -translate-x-4 translate-y-4"></div>

                                            <div className="relative z-10">
                                                <IconComponent className="w-16 h-16 text-white mb-6" />
                                                <h4 className="text-2xl font-bold mb-4">{produto.title}</h4>
                                                <p className="text-white text-opacity-90 mb-6">
                                                    Qualidade garantida e suporte técnico especializado inclusos.
                                                </p>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-white mb-1">100%</div>
                                                        <div className="text-xs opacity-90">Qualidade</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-white mb-1">24h</div>
                                                        <div className="text-xs opacity-90">Entrega</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Serviços */}
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
                            Nossos <span className="text-earth-brown">Serviços</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Suporte técnico especializado para garantir o sucesso dos seus projetos
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {servicos.map((servico, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{servico.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{servico.description}</p>

                                <div className="space-y-3">
                                    {servico.beneficios.map((beneficio, beneficioIndex) => (
                                        <div key={beneficioIndex} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-earth-brown flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm">{beneficio}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destaque Saldo de Banco */}
            <section className="py-20 bg-red-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                <PiggyBank className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ferramenta Saldo de Banco
                        </h2>
                        <p className="text-xl text-red-100 mb-8 leading-relaxed">
                            Sistema exclusivo da Cort Genética para controle financeiro e gestão de créditos.
                            Acesse online a qualquer momento e tenha total controle sobre suas transações.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-red-900 bg-opacity-80 rounded-xl p-6 backdrop-blur-sm">
                                <h3 className="text-lg font-bold text-white mb-2">Controle Total</h3>
                                <p className="text-red-100 text-sm">
                                    Acompanhe saldo, movimentações e histórico completo
                                </p>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-xl p-6 backdrop-blur-sm">
                                <h3 className="text-lg font-bold text-white mb-2">Acesso Online</h3>
                                <p className="text-red-100 text-sm">
                                    Disponível 24h por dia via web e aplicativo móvel
                                </p>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-xl p-6 backdrop-blur-sm">
                                <h3 className="text-lg font-bold text-white mb-2">Relatórios</h3>
                                <p className="text-red-100 text-sm">
                                    Relatórios detalhados para melhor gestão financeira
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Acessar Sistema
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors duration-200">
                                Saiba Mais
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Final */}
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
                            Pronto para Elevar Seu Rebanho?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Entre em contato conosco e descubra como nossos produtos e serviços
                            podem transformar os resultados da sua propriedade.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contato"
                                className="bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                Solicitar Orçamento
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/catalogo-touros"
                                className="bg-transparent border-2 border-earth-brown text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-red-800 hover:text-white transition-colors duration-200"
                            >
                                Ver Catálogo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProdutosServicosPage;
