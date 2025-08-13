'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dados de exemplo para posts
const blogPosts = [
    {
        id: '1',
        slug: 'marcadores-moleculares-revolucao-genetica',
        title: 'Marcadores Moleculares: A Revolução na Genética Bovina',
        excerpt: 'Descubra como os marcadores moleculares estão transformando a seleção genética e garantindo touros com características superiores para seu rebanho.',
        content: `
# Marcadores Moleculares: A Revolução na Genética Bovina

Os marcadores moleculares representam uma verdadeira revolução na genética bovina, permitindo uma seleção mais precisa e eficiente de características desejáveis nos animais.

## O que são Marcadores Moleculares?

Os marcadores moleculares são sequências de DNA que servem como "marcas" ou "sinalizadores" para identificar genes específicos ou regiões do genoma associadas a características de interesse econômico.

### Principais Vantagens:

1. **Precisão na Seleção**: Identificação direta de genes responsáveis por características específicas
2. **Economia de Tempo**: Seleção precoce, sem necessidade de aguardar expressão fenotípica
3. **Redução de Custos**: Menor necessidade de testes de progênie extensivos
4. **Maior Confiabilidade**: Resultados baseados em análise genética direta

## Aplicações na Cort Genética Brasil

Na Cort Genética Brasil, utilizamos marcadores moleculares em 100% dos nossos touros para:

### 1. Maciez da Carne
- Identificação dos genes CAPN1 e CAST
- Garantia de progênie com carne mais macia
- Maior valor agregado ao produto final

### 2. Características Reprodutivas
- Genes relacionados à fertilidade
- Seleção para melhor desempenho reprodutivo
- Redução de intervalos entre partos

### 3. Resistência a Doenças
- Marcadores para resistência natural
- Menor uso de medicamentos
- Melhor bem-estar animal

## O Processo de Análise

Nossa metodologia de análise de marcadores moleculares segue protocolos rigorosos:

1. **Coleta de Material Genético**: Amostra de sangue ou pelo
2. **Extração de DNA**: Processo laboratorial especializado
3. **Amplificação**: Técnicas de PCR para replicação
4. **Sequenciamento**: Identificação das variantes genéticas
5. **Análise Bioinformática**: Interpretação dos resultados
6. **Validação**: Confirmação dos achados

## Resultados Comprovados

Nossos clientes têm relatado:

- **35% de melhoria** na maciez da carne
- **20% de aumento** na taxa de prenhez
- **15% de redução** nos custos veterinários
- **25% de melhoria** no ganho de peso

## Futuro da Genética Bovina

A tecnologia de marcadores moleculares continua evoluindo, com novas descobertas sendo feitas constantemente. Na Cort Genética Brasil, estamos sempre na vanguarda dessas inovações.

### Perspectivas:

- **Edição Genética**: CRISPR e outras tecnologias
- **Inteligência Artificial**: Análise preditiva avançada
- **Genômica Populacional**: Estudos em larga escala
- **Medicina Personalizada**: Tratamentos específicos por genótipo

## Conclusão

Os marcadores moleculares são uma ferramenta fundamental para o futuro da pecuária brasileira. Com eles, conseguimos oferecer touros superiores, com características genéticas comprovadas e garantidas.

A Cort Genética Brasil permanece comprometida com a inovação e a excelência, proporcionando aos nossos clientes acesso às mais avançadas tecnologias em genética bovina.
        `,
        author: 'Dr. Carlos Silva',
        date: '2024-01-15',
        category: 'Genética',
        tags: ['marcadores moleculares', 'genética bovina', 'inovação'],
        readTime: '5 min'
    },
    {
        id: '2',
        slug: 'teste-ttr-qualidade-semen',
        title: 'Teste TTR: Garantindo a Qualidade do Sêmen Bovino',
        excerpt: 'Entenda como o Teste de Termo Resistência Rápido garante a viabilidade e qualidade do sêmen antes da inseminação artificial.',
        content: `
# Teste TTR: Garantindo a Qualidade do Sêmen Bovino

O Teste de Termo Resistência Rápido (TTR) é uma metodologia exclusiva desenvolvida pela Cort Genética Brasil para garantir a máxima qualidade do sêmen bovino.

## O que é o Teste TTR?

O TTR é um protocolo rigoroso que avalia a resistência dos espermatozoides a mudanças de temperatura, simulando as condições que eles enfrentarão durante o processo de inseminação artificial.

### Metodologia do Teste:

1. **Preparação da Amostra**: Descongelamento controlado
2. **Teste de Estresse Térmico**: Exposição a variações de temperatura
3. **Avaliação da Motilidade**: Análise microscópica detalhada
4. **Teste de Viabilidade**: Verificação da integridade celular
5. **Análise Estatística**: Comparação com padrões de qualidade

## Por que o TTR é Importante?

### Correlação com Resultados de Campo

Nossos estudos demonstram uma correlação de 85% entre os resultados do TTR e as taxas de prenhez em campo, tornando-o um preditor confiável do sucesso da inseminação.

### Benefícios para o Produtor:

- **Maior Taxa de Prenhez**: Sêmen testado garante melhor desempenho
- **Redução de Custos**: Menos repetições de serviço
- **Otimização do Tempo**: Melhor planejamento reprodutivo
- **Maior Confiabilidade**: Resultados previsíveis

## Protocolo Exclusivo da Cort Genética

Nosso protocolo TTR foi desenvolvido através de:

- **10 anos de pesquisa** em laboratório
- **Análise de mais de 50.000 amostras**
- **Validação em campo** com mais de 1.000 fazendas
- **Refinamento contínuo** baseado em resultados

### Diferenciais do Nosso Teste:

1. **Precisão Superior**: Metodologia refinada e validada
2. **Rapidez**: Resultados em 24 horas
3. **Confiabilidade**: 95% de acurácia nos resultados
4. **Rastreabilidade**: Controle total do processo

## Aplicação Prática

### No Laboratório:
- Teste aplicado em 100% das partidas
- Controle de qualidade rigoroso
- Certificação de cada lote

### Na Fazenda:
- Orientações específicas de manejo
- Protocolos de descongelamento
- Suporte técnico especializado

## Resultados Comprovados

Fazendas que utilizam sêmen com certificação TTR relatam:

- **40% menos falhas** na inseminação
- **25% de aumento** na taxa de prenhez
- **30% de redução** no intervalo entre partos
- **20% de economia** em custos reprodutivos

## Investimento em Pesquisa

A Cort Genética Brasil investe continuamente no aprimoramento do TTR:

- **Laboratório de última geração**
- **Equipamentos de alta precisão**
- **Equipe técnica especializada**
- **Parcerias com universidades**

## Conclusão

O Teste TTR é mais que um controle de qualidade – é uma garantia de resultados. Com ele, oferecemos aos nossos clientes a segurança de que estão adquirindo sêmen da mais alta qualidade, com desempenho comprovado em campo.

Esta tecnologia exclusiva reforça nosso compromisso com a excelência e inovação na genética bovina brasileira.
        `,
        author: 'Dra. Maria Santos',
        date: '2024-01-10',
        category: 'Tecnologia',
        tags: ['teste TTR', 'qualidade', 'inseminação artificial'],
        readTime: '4 min'
    },
    // Adicione outros posts conforme necessário...
];

const relatedPosts = [
    {
        slug: 'selos-qualidade-garantia-genetica',
        title: 'Selos de Qualidade: Sua Garantia Genética',
        category: 'Qualidade'
    },
    {
        slug: 'manejo-reproducao-bovina-iatf',
        title: 'Manejo da Reprodução Bovina: IATF e Suas Vantagens',
        category: 'Manejo'
    },
    {
        slug: 'mercado-genetica-bovina-2024',
        title: 'Tendências do Mercado de Genética Bovina em 2024',
        category: 'Mercado'
    }
];

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb e Navegação */}
            <section className="bg-white py-6 border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-green-800 hover:text-green-600 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar ao Blog
                        </Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-600">{post.category}</span>
                    </div>
                </div>
            </section>

            {/* Cabeçalho do Post */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6">
                            <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 mb-8">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pb-8 border-b">
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <button className="ml-auto flex items-center gap-2 text-green-800 hover:text-green-600 transition-colors">
                                <Share2 className="w-5 h-5" />
                                Compartilhar
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Imagem do Post */}
            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-96 bg-green-100 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-green-800 bg-opacity-20 flex items-center justify-center">
                            <Tag className="w-24 h-24 text-green-800" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Conteúdo do Post */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="prose prose-lg max-w-none prose-green"
                    >
                        <div
                            className="prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-li:text-gray-700"
                            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/# /g, '<h1>').replace(/<br><h1>/g, '<h1>').replace(/<\/h1><br>/g, '</h1>').replace(/## /g, '<h2>').replace(/<br><h2>/g, '<h2>').replace(/<\/h2><br>/g, '</h2>').replace(/### /g, '<h3>').replace(/<br><h3>/g, '<h3>').replace(/<\/h3><br>/g, '</h3>') }}
                        />
                    </motion.article>
                </div>
            </section>

            {/* Posts Relacionados */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Artigos Relacionados
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <article
                                    key={relatedPost.slug}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="h-48 bg-green-100 relative">
                                        <div className="absolute inset-0 bg-green-800 bg-opacity-20 flex items-center justify-center">
                                            <Tag className="w-12 h-12 text-green-800" />
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-green-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                {relatedPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4 hover:text-green-800 transition-colors">
                                            <Link href={`/blog/${relatedPost.slug}`}>
                                                {relatedPost.title}
                                            </Link>
                                        </h3>
                                        <Link
                                            href={`/blog/${relatedPost.slug}`}
                                            className="inline-flex items-center gap-2 text-green-800 font-medium hover:text-green-600 transition-colors"
                                        >
                                            Ler artigo
                                            <ArrowLeft className="w-4 h-4 rotate-180" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Newsletter */}
            <section className="py-16 bg-green-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Gostou do Artigo?
                        </h2>
                        <p className="text-green-100 mb-8">
                            Receba mais conteúdos como este direto no seu e-mail.
                            Cadastre-se em nossa newsletter!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
                            />
                            <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Inscrever-se
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

// Gerar metadata para SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Post não encontrado - Cort Genética Brasil',
        };
    }

    return {
        title: `${post.title} - Blog Cort Genética Brasil`,
        description: post.excerpt,
        keywords: post.tags.join(', '),
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
    };
}
