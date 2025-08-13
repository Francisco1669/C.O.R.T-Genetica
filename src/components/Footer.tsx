import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Seção principal do footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Informações da empresa */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">CG</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Cort Genética</h3>
                                <p className="text-sm text-gray-400">Brasil</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pioneira em genética bovina com marcadores moleculares em 100% dos touros de nossa bateria.
                            Qualidade, inovação e resultados comprovados.
                        </p>
                    </div>

                    {/* Links rápidos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalogo-touros" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Catálogo de Touros
                                </Link>
                            </li>
                            <li>
                                <Link href="/produtos-servicos" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Produtos e Serviços
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Notícias
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tecnologias */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Nossas Tecnologias</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/tecnologia/marcadores-moleculares" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Marcadores Moleculares
                                </Link>
                            </li>
                            <li>
                                <Link href="/tecnologia/teste-ttr" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Teste TTR
                                </Link>
                            </li>
                            <li>
                                <Link href="/tecnologia/selos-qualidade" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Selos de Qualidade
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin size={18} className="text-red-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        BR 472 - KM 581<br />
                                        Uruguaiana - RS - Brasil
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone size={18} className="text-red-400 flex-shrink-0" />
                                <div className="text-gray-400 text-sm">
                                    <p>(55) 3414-0164</p>
                                    <p>(55) 3414-0198</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail size={18} className="text-red-400 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">
                                    atendimento@cortgeneticabrasil.com
                                </p>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold mb-3">Siga-nos</h5>
                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-200"
                                    aria-label="YouTube"
                                >
                                    <Youtube size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra de copyright */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>
                            © 2024 Cort Genética Brasil. Todos os direitos reservados.
                        </p>
                        <div className="flex space-x-6 mt-2 md:mt-0">
                            <Link href="/politica-privacidade" className="hover:text-white transition-colors duration-200">
                                Política de Privacidade
                            </Link>
                            <Link href="/termos-uso" className="hover:text-white transition-colors duration-200">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
