'use client';

import { ReactNode } from 'react';

interface FilterBadgeProps {
    children: ReactNode;
    isActive: boolean;
    onClick: () => void;
    variant?: 'default' | 'pelagem' | 'maciez' | 'iatf';
    className?: string;
}

const FilterBadge = ({
    children,
    isActive,
    onClick,
    variant = 'default',
    className = ''
}: FilterBadgeProps) => {
    const getVariantClass = () => {
        switch (variant) {
            case 'pelagem':
                return 'selo-pelagem';
            case 'maciez':
                return 'selo-maciez';
            case 'iatf':
                return 'selo-iatf';
            default:
                return '';
        }
    };

    return (
        <button
            onClick={onClick}
            className={`filter-badge ${getVariantClass()} ${isActive ? 'active' : ''} ${className}`}
        >
            {children}
        </button>
    );
};

export default FilterBadge;
