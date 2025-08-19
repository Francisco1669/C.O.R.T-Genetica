'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermosUsoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-red-800 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <FileText className="w-16 h-16 text-white mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Termos de Uso
                        </h1>
                        <p className="text-xl text-green-100 mb-4">
                            Regras e condições para uso do nosso site e serviços
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
                                <Scale className="w-12 h-12 text-earth-brown mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Termos Justos</h3>
                                <p className="text-gray-600 text-sm">
                                    Condições equilibradas e transparentes para todos os usuários
                                </p>
                            </div>
                            <div className="text-center">
                                <AlertTriangle className="w-12 h-12 text-earth-brown mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Responsabilidades</h3>
                                <p className="text-gray-600 text-sm">
                                    Definição clara das obrigações de ambas as partes
                                </p>
                            </div>
                            <div className="text-center">
                                <CheckCircle className="w-12 h-12 text-earth-brown mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Uso Adequado</h3>
                                <p className="text-gray-600 text-sm">
                                    Diretrizes para o uso correto dos nossos serviços
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Conteúdo dos Termos */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    >
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Aceitação dos Termos</h2>
                            <p className="text-gray-700 mb-6">
                                Ao acessar e usar o site da Cort Genética Brasil (www.cortgeneticabrasil.com) e nossos
                                serviços, você concorda em cumprir e estar sujeito aos seguintes termos e condições de uso.
                            </p>
                            <p className="text-gray-700 mb-8">
                                Se você não concordar com qualquer parte destes termos, não deve usar nosso site ou serviços.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Informações da Empresa</h2>
                            <div className="bg-amber-50 border-l-4 border-earth-brown p-6 mb-8">
                                <p className="text-gray-700 mb-2"><strong>Razão Social:</strong> Cort Genética Brasil Ltda.</p>
                                <p className="text-gray-700 mb-2"><strong>CNPJ:</strong> XX.XXX.XXX/0001-XX</p>
                                <p className="text-gray-700 mb-2"><strong>Endereço:</strong> BR 472 - KM 581, Uruguaiana - RS - Brasil</p>
                                <p className="text-gray-700 mb-2"><strong>E-mail:</strong> atendimento@cortgeneticabrasil.com</p>
                                <p className="text-gray-700"><strong>Telefone:</strong> (55) 3414-0164</p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Definições</h2>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li><strong>"Usuário":</strong> Qualquer pessoa que acesse ou utilize nossos serviços</li>
                                <li><strong>"Serviços":</strong> Todos os produtos, serviços e funcionalidades oferecidas pela Cort Genética Brasil</li>
                                <li><strong>"Conteúdo":</strong> Todas as informações, textos, imagens, vídeos e dados disponibilizados</li>
                                <li><strong>"Conta":</strong> Registro do usuário em nossos sistemas</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Uso do Site e Serviços</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1 Uso Permitido</h3>
                            <p className="text-gray-700 mb-4">Você pode usar nossos serviços para:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Consultar informações sobre produtos e serviços</li>
                                <li>Realizar compras de produtos autorizados</li>
                                <li>Entrar em contato conosco para suporte técnico</li>
                                <li>Acessar conteúdo educacional e técnico</li>
                                <li>Participar de programas de fidelidade quando disponíveis</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2 Uso Proibido</h3>
                            <p className="text-gray-700 mb-4">É expressamente proibido:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li>Usar o site para atividades ilegais ou não autorizadas</li>
                                <li>Transmitir vírus, malware ou códigos maliciosos</li>
                                <li>Tentar acessar áreas restritas do sistema</li>
                                <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                                <li>Usar informações para fins de spam ou marketing não autorizado</li>
                                <li>Interferir no funcionamento normal do site</li>
                                <li>Criar contas falsas ou fornecer informações incorretas</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Registro e Conta de Usuário</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Criação de Conta</h3>
                            <p className="text-gray-700 mb-4">Para acessar determinados serviços, você deve:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Fornecer informações precisas e atualizadas</li>
                                <li>Manter a confidencialidade de suas credenciais</li>
                                <li>Notificar imediatamente sobre uso não autorizado</li>
                                <li>Ser responsável por todas as atividades em sua conta</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Verificação</h3>
                            <p className="text-gray-700 mb-8">
                                Reservamo-nos o direito de verificar as informações fornecidas e suspender ou encerrar
                                contas que contenham informações falsas ou enganosas.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Produtos e Serviços</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Disponibilidade</h3>
                            <p className="text-gray-700 mb-6">
                                A disponibilidade de produtos está sujeita ao estoque. Reservamo-nos o direito de
                                descontinuar produtos ou serviços a qualquer momento.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Preços e Pagamento</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Preços estão sujeitos a alterações sem aviso prévio</li>
                                <li>Todos os preços incluem impostos aplicáveis</li>
                                <li>Pagamento deve ser realizado conforme condições acordadas</li>
                                <li>Inadimplência pode resultar em suspensão de serviços</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">6.3 Garantias Técnicas</h3>
                            <p className="text-gray-700 mb-8">
                                Nossos produtos genéticos são garantidos conforme especificações técnicas. Garantias
                                específicas são fornecidas na documentação de cada produto.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Propriedade Intelectual</h2>
                            <p className="text-gray-700 mb-4">
                                Todo o conteúdo do site, incluindo mas não limitado a:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Textos, imagens, vídeos e gráficos</li>
                                <li>Marcas, logotipos e designs</li>
                                <li>Software e códigos</li>
                                <li>Metodologias e processos técnicos</li>
                                <li>Bases de dados e informações genéticas</li>
                            </ul>
                            <p className="text-gray-700 mb-8">
                                São de propriedade exclusiva da Cort Genética Brasil ou licenciados por terceiros,
                                protegidos por leis de direitos autorais e propriedade intelectual.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Limitação de Responsabilidade</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">8.1 Disponibilidade do Site</h3>
                            <p className="text-gray-700 mb-6">
                                Embora nos esforcemos para manter o site disponível, não garantimos que estará livre
                                de interrupções, erros ou falhas técnicas.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">8.2 Limitações</h3>
                            <p className="text-gray-700 mb-4">
                                Não seremos responsáveis por:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li>Danos indiretos, incidentais ou consequenciais</li>
                                <li>Perda de lucros, dados ou oportunidades de negócio</li>
                                <li>Problemas decorrentes de uso inadequado dos produtos</li>
                                <li>Falhas causadas por fatores externos ou caso fortuito</li>
                                <li>Ações de terceiros ou links para sites externos</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Privacidade e Proteção de Dados</h2>
                            <p className="text-gray-700 mb-8">
                                O tratamento de dados pessoais é regido por nossa Política de Privacidade, que faz
                                parte integrante destes Termos de Uso e está em conformidade com a LGPD.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Modificações</h2>
                            <p className="text-gray-700 mb-4">
                                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações
                                entrarão em vigor após publicação no site.
                            </p>
                            <p className="text-gray-700 mb-8">
                                É responsabilidade do usuário revisar periodicamente estes termos. O uso contínuo
                                do site após as alterações constitui aceitação dos novos termos.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Rescisão</h2>
                            <p className="text-gray-700 mb-4">
                                Podemos suspender ou encerrar sua conta e acesso aos serviços:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li>Por violação destes termos</li>
                                <li>Por uso inadequado dos serviços</li>
                                <li>Por inadimplência ou fraude</li>
                                <li>A nosso critério, com aviso prévio quando aplicável</li>
                            </ul>
                            <p className="text-gray-700 mb-8">
                                Você pode encerrar sua conta a qualquer momento entrando em contato conosco.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Lei Aplicável e Jurisdição</h2>
                            <p className="text-gray-700 mb-8">
                                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer
                                disputa será resolvida no foro da comarca de Uruguaiana, Estado do Rio Grande do Sul.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Disposições Gerais</h2>
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li>Se qualquer cláusula for considerada inválida, as demais permanecerão em vigor</li>
                                <li>A falha em exercer qualquer direito não constitui renúncia</li>
                                <li>Estes termos constituem o acordo completo entre as partes</li>
                                <li>Nenhuma das partes será responsável por caso fortuito ou força maior</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Contato</h2>
                            <p className="text-gray-700 mb-4">
                                Para questões sobre estes Termos de Uso, entre em contato:
                            </p>
                            <div className="bg-amber-50 border-l-4 border-earth-brown p-6">
                                <p className="text-gray-700 mb-2"><strong>E-mail:</strong> juridico@cortgeneticabrasil.com</p>
                                <p className="text-gray-700 mb-2"><strong>Telefone:</strong> (55) 3414-0164</p>
                                <p className="text-gray-700"><strong>Endereço:</strong> BR 472 - KM 581, Uruguaiana - RS - Brasil</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-red-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Dúvidas sobre os Termos?
                        </h2>
                        <p className="text-green-100 mb-8">
                            Nossa equipe jurídica está disponível para esclarecer qualquer questão sobre nossos termos de uso.
                        </p>
                        <a
                            href="/contato"
                            className="bg-white text-earth-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                        >
                            Entre em Contato
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
