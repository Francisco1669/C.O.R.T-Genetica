import { notFound } from "next/navigation";
import { tourosPorId } from "@/data/tourosPorId";
import { Metadata } from "next";
import ExibeBullClient from "@/components/ExibeBullClient";

interface Bull {
    id: number;
    nome: string;
    raca: string;
    categoria: "corte" | "leite";
    imagem: string;
    catalogo: string;
    temImagem: boolean;
    selos: string[];
    destaque: string;
    descricao?: string;
    caracteristicas?: string[];
}

interface PageParams {
    id: string;
}

// Gerar metadata dinamico para SEO de cada touro
export async function generateMetadata({
    params,
}: {
    params: Promise<PageParams>;
}): Promise<Metadata> {
    const { id } = await params;
    const bullId = parseInt(id);
    const bull = (tourosPorId as any)[bullId];

    if (!bull) {
        return {
            title: "Touro nao encontrado - C.O.R.T Genetica Brasil",
        };
    }

    const title = `${bull.nome} - Raca ${bull.raca} | C.O.R.T Genetica Brasil`;
    const description = `Conheca o touro ${bull.nome} da raca ${bull.raca
        }. ${bull.destaque || "Genetica de elite com marcadores moleculares e teste TTR."} Disponivel no catalogo da C.O.R.T Genetica.`;

    return {
        title,
        description,
        keywords: `${bull.nome}, raca ${bull.raca}, genetica bovina, semen ${bull.raca}, C.O.R.T genetica, touro ${bull.categoria}`,
        openGraph: {
            title,
            description,
            images: [bull.imagem],
            url: `https://www.cortgeneticabrasil.com/site/cort/home/exibe/${id}`,
        },
    };
}

// Gerar parametros estaticos para build mais rapido e melhor SEO
export async function generateStaticParams() {
    return Object.keys(tourosPorId).map((id) => ({
        id: id.toString(),
    }));
}

export default async function ExibeBullPage({
    params,
}: {
    params: Promise<PageParams>;
}) {
    const { id } = await params;
    const bullId = parseInt(id);
    const bull = (tourosPorId as any)[bullId] as Bull;

    if (!bull) {
        notFound();
    }

    // Buscar touros relacionados (mesma raca, com imagem, em estoque)
    const otherBulls = Object.values(tourosPorId)
        .filter((b: any) =>
            b.id !== bull.id &&
            b.raca === bull.raca &&
            b.temImagem !== false &&
            (!b.descricao || !b.descricao.includes("fora de estoque"))
        )
        .slice(0, 3) as Bull[];

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: bull.nome,
        image: `https://www.cortgeneticabrasil.com${bull.imagem}`,
        description: bull.descricao || bull.destaque,
        brand: {
            "@type": "Brand",
            name: "C.O.R.T Genetica Brasil",
        },
        offers: {
            "@type": "Offer",
            url: `https://www.cortgeneticabrasil.com/site/cort/home/exibe/${bull.id}`,
            availability: "https://schema.org/InStock",
        },
        additionalProperty: [
            {
                "@type": "PropertyValue",
                name: "Raca",
                value: bull.raca,
            },
            {
                "@type": "PropertyValue",
                name: "Categoria",
                value: bull.categoria,
            },
        ],
    };

    return (
        <>
            {/* SEO: Dados Estruturados */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <ExibeBullClient bull={bull} otherBulls={otherBulls} />
        </>
    );
}
