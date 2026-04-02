'use client';

import { useState } from 'react';
import { Eye, EyeOff, BarChart3, TrendingUp, Users, Lock } from 'lucide-react';

export default function AdminAnalyticsPage() {
    const [token, setToken] = useState('');
    const [showToken, setShowToken] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [analytics, setAnalytics] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/admin/analytics', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Token inválido');
            }

            const data = await response.json();
            setAnalytics(data);
            setIsAuthenticated(true);
        } catch (err: any) {
            setError(err.message || 'Erro ao autenticar');
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-900 to-red-800 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-100 rounded-full p-4">
                            <Lock className="w-8 h-8 text-red-600" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
                        Painel Admin
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        C.O.R.T Genética Brasil
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Token de Acesso
                            </label>
                            <div className="relative">
                                <input
                                    type={showToken ? 'text' : 'password'}
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    placeholder="Digite seu token secreto"
                                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowToken(!showToken)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showToken ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm">
                            <strong>Token Padrão:</strong> cortgenetica-secret-2025
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Autenticando...' : 'Entrar'}
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 text-center mt-6">
                        Acesso restrito a administradores
                    </p>
                </div>
            </div>
        );
    }

    if (!analytics) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin">
                        <BarChart3 className="w-12 h-12 text-red-600" />
                    </div>
                    <p className="text-gray-600 mt-4">Carregando dados...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Painel Analytics</h1>
                    <p className="text-gray-600 mt-2">C.O.R.T Genética Brasil</p>
                </div>

                {/* Cards de Metricas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Pageviews</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {analytics.totalPageviews?.toLocaleString() || '—'}
                                </p>
                            </div>
                            <Eye className="w-12 h-12 text-blue-500" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Visitantes Unicos</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {analytics.uniqueVisitors?.toLocaleString() || '—'}
                                </p>
                            </div>
                            <Users className="w-12 h-12 text-green-500" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Taxa Media</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {analytics.totalPageviews && analytics.uniqueVisitors
                                        ? (analytics.totalPageviews / analytics.uniqueVisitors).toFixed(1)
                                        : '—'}
                                </p>
                            </div>
                            <TrendingUp className="w-12 h-12 text-purple-500" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Ultima Atualizacao</p>
                                <p className="text-sm font-semibold text-gray-900 mt-2">
                                    {new Date(analytics.lastUpdated).toLocaleString('pt-BR')}
                                </p>
                            </div>
                            <BarChart3 className="w-12 h-12 text-red-600" />
                        </div>
                    </div>
                </div>

                {/* Paginas Mais Acessadas */}
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Paginas Mais Acessadas
                        </h2>
                    </div>

                    {analytics.topPages && analytics.topPages.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            Ranking
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            Pagina
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                                            Acessos
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                                            Percentual
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {analytics.topPages.map((page: any, index: number) => (
                                        <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-600">#{index + 1}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 truncate">
                                                {page.path || page.url}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-right text-gray-600">
                                                {page.count?.toLocaleString() || page.views?.toLocaleString() || '—'}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-right text-gray-600">
                                                {analytics.totalPageviews && page.count
                                                    ? ((page.count / analytics.totalPageviews) * 100).toFixed(1)
                                                    : '—'}
                                                %
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-6 text-center text-gray-600">
                            Nao ha dados disponiveis ainda. Os dados aparecerao apos alguns acessos.
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-600 text-sm">
                    <p>Painel de administracao da C.O.R.T Genetica Brasil</p>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="text-red-600 hover:text-red-700 font-semibold mt-2"
                    >
                        Sair
                    </button>
                </div>
            </div>
        </div>
    );
}
