import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'base' | 'lg' | 'xl';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'base', className = '', children, disabled, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

        const variantStyles = {
            primary: 'bg-primary text-on-strong hover:opacity-90',
            secondary: 'border border-primary text-primary hover:bg-hover',
            tertiary: 'text-primary hover:bg-hover',
        };

        const sizeStyles = {
            base: 'px-4 py-2.5 text-[0.875rem] leading-[1.25rem] rounded-lg',
            lg: 'px-6 py-3.5 text-[1.125rem] leading-[1.6875rem] rounded-lg',
            xl: 'px-8 py-4 text-[1.375rem] leading-[2rem] rounded-lg',
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
                disabled={disabled}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
