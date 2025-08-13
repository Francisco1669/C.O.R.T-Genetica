'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users } from 'lucide-react';

export default function PoliticaPrivacidadePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-green-800 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <Shield className="w-16 h-16 text-white mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Política de Privacidade
                        </h1>
                        <p className="text-xl text-green-100 mb-4">
                            Seu compromisso com a proteção dos seus dados
                        </p>
                        <p className="text-green-100">
                            Última atualização: 15 de janeiro de 2024
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Resumo */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                                <Lock className="w-12 h-12 text-green-800 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Proteção Total</h3>
                                <p className="text-gray-600 text-sm">
                                    Seus dados são protegidos com a mais alta tecnologia de segurança
                                </p>
                            </div>
                            <div className="text-center">
                                <Eye className="w-12 h-12 text-green-800 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparência</h3>
                                <p className="text-gray-600 text-sm">
                                    Você sabe exatamente como seus dados são coletados e utilizados
                                </p>
                            </div>
                            <div className="text-center">
                                <Users className="w-12 h-12 text-green-800 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Controle</h3>
                                <p className="text-gray-600 text-sm">
                                    Você tem total controle sobre seus dados pessoais
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Conteúdo da Política */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    >
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Informações Gerais</h2>
                            <p className="text-gray-700 mb-6">
                                A Cort Genética Brasil, inscrita no CNPJ XX.XXX.XXX/0001-XX, com sede na BR 472 - KM 581,
                                Uruguaiana - RS - Brasil, está comprometida com a proteção da privacidade e dos dados pessoais
                                de nossos clientes, parceiros e visitantes do site.
                            </p>
                            <p className="text-gray-700 mb-8">
                                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas
                                informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Dados Coletados</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Dados Fornecidos Voluntariamente</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Nome completo</li>
                                <li>E-mail</li>
                                <li>Telefone</li>
                                <li>Endereço</li>
                                <li>Informações sobre propriedade rural</li>
                                <li>Dados de comunicação (mensagens, dúvidas, sugestões)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Dados Coletados Automaticamente</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li>Endereço IP</li>
                                <li>Informações do navegador</li>
                                <li>Dados de navegação no site</li>
                                <li>Cookies e tecnologias similares</li>
                                <li>Data e hora de acesso</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Finalidades do Tratamento</h2>
                            <p className="text-gray-700 mb-4">Seus dados pessoais são utilizados para:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li>Processar pedidos e fornecer nossos produtos e serviços</li>
                                <li>Comunicação e atendimento ao cliente</li>
                                <li>Envio de informações técnicas e comerciais</li>
                                <li>Melhorar nossos produtos e serviços</li>
                                <li>Cumprir obrigações legais e regulamentares</li>
                                <li>Análise de desempenho e otimização do site</li>
                                <li>Prevenção a fraudes e segurança</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Base Legal</h2>
                            <p className="text-gray-700 mb-4">O tratamento dos seus dados pessoais é baseado nas seguintes hipóteses legais:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li><strong>Consentimento:</strong> Para comunicações de marketing e newsletter</li>
                                <li><strong>Execução de contrato:</strong> Para fornecimento de produtos e serviços</li>
                                <li><strong>Interesse legítimo:</strong> Para melhorias dos serviços e segurança</li>
                                <li><strong>Cumprimento de obrigação legal:</strong> Para atender exigências regulamentares</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Compartilhamento de Dados</h2>
                            <p className="text-gray-700 mb-4">Seus dados podem ser compartilhados com:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li><strong>Parceiros comerciais:</strong> Para execução de serviços contratados</li>
                                <li><strong>Prestadores de serviços:</strong> Como transportadoras e laboratórios</li>
                                <li><strong>Autoridades competentes:</strong> Quando exigido por lei</li>
                                <li><strong>Empresas do grupo:</strong> Para fins administrativos e comerciais</li>
                            </ul>
                            <p className="text-gray-700 mb-8">
                                <strong>Importante:</strong> Não vendemos, alugamos ou cedemos seus dados pessoais para terceiros
                                para fins de marketing sem seu consentimento expresso.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Segurança dos Dados</h2>
                            <p className="text-gray-700 mb-4">Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li>Criptografia de dados em trânsito e em repouso</li>
                                <li>Controle de acesso e autenticação</li>
                                <li>Monitoramento e auditoria regulares</li>
                                <li>Treinamento regular de funcionários</li>
                                <li>Backup e recuperação de dados</li>
                                <li>Testes de segurança periódicos</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Retenção de Dados</h2>
                            <p className="text-gray-700 mb-4">Mantemos seus dados pessoais apenas pelo tempo necessário para:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Cumprir as finalidades para as quais foram coletados</li>
                                <li>Atender obrigações legais e regulamentares</li>
                                <li>Exercer direitos em processos judiciais</li>
                            </ul>
                            <p className="text-gray-700 mb-8">
                                Após esse período, os dados são eliminados de forma segura ou anonimizados para fins estatísticos.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Seus Direitos</h2>
                            <p className="text-gray-700 mb-4">Você tem os seguintes direitos sobre seus dados pessoais:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li><strong>Acesso:</strong> Saber quais dados possuímos sobre você</li>
                                <li><strong>Retificação:</strong> Corrigir dados incorretos ou incompletos</li>
                                <li><strong>Eliminação:</strong> Solicitar a exclusão de seus dados</li>
                                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                                <li><strong>Oposição:</strong> Opor-se ao tratamento em certas situações</li>
                                <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                                <li><strong>Informação:</strong> Receber informações claras sobre o tratamento</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Cookies</h2>
                            <p className="text-gray-700 mb-4">Utilizamos cookies para:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Melhorar a experiência de navegação</li>
                                <li>Analisar o desempenho do site</li>
                                <li>Personalizar conteúdo</li>
                                <li>Oferecer funcionalidades de redes sociais</li>
                            </ul>
                            <p className="text-gray-700 mb-8">
                                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Transferência Internacional</h2>
                            <p className="text-gray-700 mb-8">
                                Caso seja necessário transferir seus dados para outros países, garantimos que isso seja feito
                                com base em decisões de adequação ou através de salvaguardas apropriadas, como cláusulas
                                contratuais padrão aprovadas pela autoridade competente.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Alterações nesta Política</h2>
                            <p className="text-gray-700 mb-8">
                                Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre mudanças
                                significativas através do site ou por e-mail. Recomendamos verificar esta página regularmente
                                para se manter informado sobre nossas práticas de privacidade.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contato</h2>
                            <p className="text-gray-700 mb-4">
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
                            </p>
                            <div className="bg-green-50 border-l-4 border-green-800 p-6 mb-8">
                                <p className="text-gray-700 mb-2"><strong>E-mail:</strong> privacidade@cortgeneticabrasil.com</p>
                                <p className="text-gray-700 mb-2"><strong>Telefone:</strong> (55) 3414-0164</p>
                                <p className="text-gray-700 mb-2"><strong>Endereço:</strong> BR 472 - KM 581, Uruguaiana - RS - Brasil</p>
                                <p className="text-gray-700"><strong>Encarregado de Dados:</strong> Dr. Carlos Silva</p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Autoridade de Controle</h2>
                            <p className="text-gray-700 mb-4">
                                Você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD):
                            </p>
                            <div className="bg-gray-50 border border-gray-200 p-6">
                                <p className="text-gray-700 mb-2"><strong>Site:</strong> www.gov.br/anpd</p>
                                <p className="text-gray-700"><strong>E-mail:</strong> canal_titular@anpd.gov.br</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Dúvidas sobre Privacidade?
                        </h2>
                        <p className="text-green-100 mb-8">
                            Nossa equipe está pronta para esclarecer qualquer questão sobre o tratamento dos seus dados.
                        </p>
                        <a
                            href="/contato"
                            className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                        >
                            Entre em Contato
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
