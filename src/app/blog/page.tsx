'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
    {
        id: '1',
        slug: 'marcadores-moleculares-revolucao-genetica',
        title: 'Marcadores Moleculares: A Revolução na Genética Bovina',
        excerpt: 'Descubra como os marcadores moleculares estão transformando a seleção genética e garantindo touros com características superiores para seu rebanho.',
        content: 'Os marcadores moleculares representam uma verdadeira revolução na genética bovina...',
        author: 'Dr. Carlos Silva',
        date: '2024-01-15',
        category: 'Genética',
        tags: ['marcadores moleculares', 'genética bovina', 'inovação'],
        featured: true,
        readTime: '5 min'
    },
    {
        id: '2',
        slug: 'teste-ttr-qualidade-semen',
        title: 'Teste TTR: Garantindo a Qualidade do Sêmen Bovino',
        excerpt: 'Entenda como o Teste de Termo Resistência Rápido garante a viabilidade e qualidade do sêmen antes da inseminação artificial.',
        content: 'O Teste TTR é uma metodologia exclusiva desenvolvida pela Cort Genética...',
        author: 'Dra. Maria Santos',
        date: '2024-01-10',
        category: 'Tecnologia',
        tags: ['teste TTR', 'qualidade', 'inseminação artificial'],
        featured: false,
        readTime: '4 min'
    },
    {
        id: '3',
        slug: 'selos-qualidade-garantia-genetica',
        title: 'Selos de Qualidade: Sua Garantia Genética',
        excerpt: 'Conheça os três selos de qualidade da Cort Genética e como eles garantem características específicas na sua criação.',
        content: 'Os selos de qualidade da Cort Genética são certificações que garantem...',
        author: 'Equipe Técnica',
        date: '2024-01-05',
        category: 'Qualidade',
        tags: ['selos', 'qualidade', 'certificação'],
        featured: false,
        readTime: '6 min'
    },
    {
        id: '4',
        slug: 'manejo-reproducao-bovina-iatf',
        title: 'Manejo da Reprodução Bovina: IATF e Suas Vantagens',
        excerpt: 'Aprenda sobre as melhores práticas em IATF e como maximizar os resultados reprodutivos do seu rebanho.',
        content: 'A Inseminação Artificial em Tempo Fixo (IATF) é uma técnica...',
        author: 'Dr. João Ferreira',
        date: '2024-01-01',
        category: 'Manejo',
        tags: ['IATF', 'reprodução', 'manejo'],
        featured: false,
        readTime: '7 min'
    },
    {
        id: '5',
        slug: 'mercado-genetica-bovina-2024',
        title: 'Tendências do Mercado de Genética Bovina em 2024',
        excerpt: 'Análise das principais tendências e inovações que estão moldando o mercado de genética bovina neste ano.',
        content: 'O mercado de genética bovina continua em constante evolução...',
        author: 'Análise de Mercado',
        date: '2023-12-28',
        category: 'Mercado',
        tags: ['mercado', 'tendências', '2024'],
        featured: true,
        readTime: '8 min'
    },
    {
        id: '6',
        slug: 'nutricao-reproducao-bovina',
        title: 'Nutrição e Reprodução: A Conexão Essencial',
        excerpt: 'Como a nutrição adequada impacta diretamente na eficiência reprodutiva do seu rebanho bovino.',
        content: 'A relação entre nutrição e reprodução bovina é fundamental...',
        author: 'Dra. Ana Costa',
        date: '2023-12-25',
        category: 'Nutrição',
        tags: ['nutrição', 'reprodução', 'manejo'],
        featured: false,
        readTime: '5 min'
    }
];

const categories = ['Todos', 'Genética', 'Tecnologia', 'Qualidade', 'Manejo', 'Mercado', 'Nutrição'];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-red-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Blog Cort Genética
                        </h1>
                        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                            Acompanhe as últimas novidades em genética bovina, tecnologia e manejo.
                            Conteúdo técnico e insights do mercado agropecuário.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">50+</div>
                                <div className="text-green-100 text-sm">Artigos Técnicos</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">25+</div>
                                <div className="text-green-100 text-sm">Especialistas</div>
                            </div>
                            <div className="bg-red-900 bg-opacity-80 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                                <div className="text-green-100 text-sm">Leitores Mensais</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filtros e Busca */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Busca */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar artigos..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                        </div>

                        {/* Filtros de Categoria */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${category === 'Todos'
                                        ? 'bg-red-800 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-earth-brown'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts em Destaque */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Posts em Destaque</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {blogPosts.filter(post => post.featured).map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="h-64 bg-red-100 relative">
                                        <div className="absolute inset-0 bg-red-800 bg-opacity-20 flex items-center justify-center">
                                            <Tag className="w-16 h-16 text-earth-brown" />
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.date).toLocaleDateString('pt-BR')}
                                            </div>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-earth-brown transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-earth-brown font-medium hover:text-earth-brown-dark transition-colors"
                                        >
                                            Ler mais
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Todos os Posts */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Todos os Artigos</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="h-48 bg-red-100 relative">
                                        <div className="absolute inset-0 bg-red-800 bg-opacity-20 flex items-center justify-center">
                                            <Tag className="w-12 h-12 text-earth-brown" />
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-red-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString('pt-BR')}
                                            </div>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-earth-brown transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-earth-brown font-medium text-sm hover:text-earth-brown-dark transition-colors"
                                        >
                                            Ler mais
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-red-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Receba Nossas Novidades
                        </h2>
                        <p className="text-green-100 mb-8">
                            Cadastre-se para receber artigos exclusivos, dicas técnicas e novidades do mercado de genética bovina.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-red-300"
                            />
                            <button className="bg-white text-earth-brown px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Inscrever-se
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
