import React from 'react';

export interface IconProps {
    size?: 'sm' | 'base' | 'lg' | 'xl';
    color?: string;
    className?: string;
}

const sizeMap = {
    sm: 16,
    base: 20,
    lg: 24,
    xl: 32,
};

export const Icon: React.FC<IconProps> = ({
    size = 'base',
    color = 'currentColor',
    className = ''
}) => {
   
    const iconSize = sizeMap[size];

    return (
        <span
            className={`inline-flex items-center justify-center ${className}`}
            style={{ width: iconSize, height: iconSize, color }}
            aria-hidden="true"
        >
            {/* Solar icon will be rendered here */}
            <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
            </svg>
        </span>
    );
};

Icon.displayName = 'Icon';
