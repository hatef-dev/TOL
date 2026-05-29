import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface WebDesignCardProps {
    image: string;
    title: string;
    category?: string;
    href: string;
    className?: string;
}

export const WebDesignCard: React.FC<WebDesignCardProps> = ({
    image,
    title,
    category,
    href,
    className = '',
}) => {
    return (
        <Link
            href={href}
            className={`group block rounded-lg overflow-hidden bg-base border border-weak transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${className}`}
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-level-1">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                {category && (
                    <p className="text-[0.875rem] leading-[1.25rem] text-muted mb-2">
                        {category}
                    </p>
                )}
                <h3 className="text-[1.125rem] leading-[1.6875rem] font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {title}
                </h3>
            </div>
        </Link>
    );
};

WebDesignCard.displayName = 'WebDesignCard';
