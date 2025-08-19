'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    category: string;
    image: string;
}

interface BlogPostClientProps {
    post: BlogPost;
}

const BlogPostClient = ({ post }: BlogPostClientProps) => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center space-x-2 text-red-100 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">
                                Início
                            </Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-white transition-colors">
                                Blog
                            </Link>
                            <span>/</span>
                            <span className="text-white font-medium">{post.title}</span>
                        </div>

                        {/* Category Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-200text-red-800">
                                {post.category}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            {post.title}
                        </motion.h1>

                        {/* Excerpt */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            {post.excerpt}
                        </motion.p>

                        {/* Meta Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap items-center justify-center gap-6 text-red-100"
                        >
                            <div className="flex items-center space-x-2">
                                <User size={18} />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar size={18} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock size={18} />
                                <span>{post.readTime}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                            {/* Main Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:col-span-3"
                            >
                                {/* Article Content */}
                                <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                                    <div className="prose prose-lg max-w-none">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: post.content.replace(/\n/g, '<br>')
                                            }}
                                        />
                                    </div>
                                </article>

                                {/* Tags */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="bg-white rounded-2xl shadow-lg p-6 mb-8"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Tag className="w-5 h-5 mr-2 text-red-600" />
                                        Tags relacionadas
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 hover:bg-red-200transition-colors cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Share & Navigation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="bg-white rounded-2xl shadow-lg p-6"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                        {/* Back Button */}
                                        <Link
                                            href="/blog"
                                            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                            Voltar ao Blog
                                        </Link>

                                        {/* Share Button */}
                                        <button className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Compartilhar
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="lg:col-span-1"
                            >
                                {/* Author Info */}
                                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Sobre o Autor</h3>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                            <User className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{post.author}</p>
                                            <p className="text-sm text-gray-600">Especialista em Genética Bovina</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Especialista com mais de 15 anos de experiência em genética bovina e marcadores moleculares.
                                    </p>
                                </div>

                                {/* Related Articles */}
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Artigos Relacionados</h3>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-red-600 pl-4">
                                            <h4 className="text-sm font-medium text-gray-900 mb-1">
                                                Teste TTR: Garantia de Qualidade
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                Como o teste TTR revoluciona o controle de qualidade do sêmen bovino.
                                            </p>
                                        </div>
                                        <div className="border-l-4 border-red-600 pl-4">
                                            <h4 className="text-sm font-medium text-gray-900 mb-1">
                                                Selos de Qualidade CORT
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                Conheça nosso sistema exclusivo de certificação genética.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-red-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center text-white"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Mantenha-se Atualizado
                        </h2>
                        <p className="text-red-100 mb-8">
                            Receba as últimas novidades sobre genética bovina e inovações da Cort Genética Brasil.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300"
                            />
                            <button className="px-6 py-3 bg-white text-red-800 font-semibold rounded-lg hover:bg-red-50 transition-colors">
                                Inscrever-se
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BlogPostClient;

