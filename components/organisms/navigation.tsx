import React from 'react';
import Link from 'next/link';
import { SubMenu, SubMenuItem } from './sub-menu';

export interface NavItem {
    label: string;
    href: string;
    subMenu?: {
        variant: 'industries' | 'resources';
        items: SubMenuItem[];
    };
}

export interface NavigationProps {
    items: NavItem[];
    logo?: React.ReactNode;
    activeItem?: string;
    className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
    items,
    logo,
    activeItem,
    className = '',
}) => {
    const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <nav className={`bg-base border-b border-weak ${className}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    {logo && (
                        <div className="flex-shrink-0">
                            {logo}
                        </div>
                    )}

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {items.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.subMenu && setOpenSubMenu(item.label)}
                                onMouseLeave={() => setOpenSubMenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-[1rem] leading-[1.5rem] font-semibold transition-colors duration-200 ${activeItem === item.label
                                            ? 'text-primary'
                                            : 'text-muted hover:text-primary'
                                        }`}
                                >
                                    {item.label}
                                </Link>

                                {/* Submenu */}
                                {item.subMenu && openSubMenu === item.label && (
                                    <div className="absolute top-full left-0 mt-2 z-50">
                                        <SubMenu
                                            variant={item.subMenu.variant}
                                            items={item.subMenu.items}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-weak">
                        {items.map((item) => (
                            <div key={item.label} className="py-2">
                                <Link
                                    href={item.href}
                                    className={`block text-[1rem] leading-[1.5rem] font-semibold ${activeItem === item.label
                                            ? 'text-primary'
                                            : 'text-muted'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

Navigation.displayName = 'Navigation';
