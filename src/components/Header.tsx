'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { href: '/', label: 'Início' },
        { href: '/sobre', label: 'Sobre Nós' },
        {
            href: '/tecnologia',
            label: 'Tecnologia',
            submenu: [
                { href: '/tecnologia/marcadores-moleculares', label: 'Marcadores Moleculares' },
                { href: '/tecnologia/teste-ttr', label: 'Teste TTR' },
                { href: '/tecnologia/selos-qualidade', label: 'Selos de Qualidade' }
            ]
        },
        { href: '/catalogo-touros', label: 'Catálogo de Touros' },
        { href: '/produtos-servicos', label: 'Produtos e Serviços' },
        { href: '/blog', label: 'Notícias' },
        { href: '/contato', label: 'Contato' }
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            {/* Barra de contato superior */}
            <div className="bg-green-800 text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Phone size={14} />
                            <span>(55) 3414-0164</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Mail size={14} />
                            <span>atendimento@cortgeneticabrasil.com</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <span>BR 472 - KM 581 - Uruguaiana - RS - Brasil</span>
                    </div>
                </div>
            </div>

            {/* Navegação principal */}
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">CG</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Cort Genética</h1>
                            <p className="text-sm text-gray-600">Brasil</p>
                        </div>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-green-800 font-medium transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                                {item.submenu && (
                                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors duration-200"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Botão CTA */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contato"
                            className="btn-primary inline-block"
                        >
                            Fale Conosco
                        </Link>
                    </div>

                    {/* Menu Mobile Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-green-800"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 py-4 border-t">
                        <div className="space-y-4">
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    <Link
                                        href={item.href}
                                        className="block text-gray-700 hover:text-green-800 font-medium transition-colors duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.submenu && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block text-sm text-gray-600 hover:text-green-800 transition-colors duration-200"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/contato"
                                    className="btn-primary inline-block w-full text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Fale Conosco
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
