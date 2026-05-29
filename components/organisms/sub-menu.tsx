import React from 'react';
import Link from 'next/link';

export interface SubMenuItem {
    label: string;
    href: string;
    description?: string;
}

export interface SubMenuProps {
    variant: 'industries' | 'resources';
    items: SubMenuItem[];
    onItemClick?: (item: SubMenuItem) => void;
    className?: string;
}

export const SubMenu: React.FC<SubMenuProps> = ({
    variant,
    items,
    onItemClick,
    className = '',
}) => {
    const title = variant === 'industries' ? 'Industries' : 'Resources';

    return (
        <div className={`bg-base border border-weak rounded-lg shadow-lg p-6 ${className}`}>
            <h3 className="text-[1.125rem] leading-[1.6875rem] font-semibold text-primary mb-4">
                {title}
            </h3>
            <nav>
                <ul className="space-y-3">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                onClick={() => onItemClick?.(item)}
                                className="block p-3 rounded-md hover:bg-hover transition-colors duration-200"
                            >
                                <div className="text-[1rem] leading-[1.5rem] font-semibold text-primary">
                                    {item.label}
                                </div>
                                {item.description && (
                                    <div className="text-[0.875rem] leading-[1.25rem] text-muted mt-1">
                                        {item.description}
                                    </div>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>


           

        </div>
    );
};

SubMenu.displayName = 'SubMenu';
