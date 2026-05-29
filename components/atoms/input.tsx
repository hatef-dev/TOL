import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ error, className = '', ...props }, ref) => {
        const baseStyles = 'w-full px-4 py-2.5 text-[1rem] leading-[1.5rem] font-normal rounded-lg border transition-colors duration-200';
        const stateStyles = error
            ? 'border-error focus:outline-none focus:ring-2 focus:ring-error'
            : 'border-weak focus:outline-none focus:ring-2 focus:ring-primary';

        return (
            <input
                ref={ref}
                className={`${baseStyles} ${stateStyles} ${className}`}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input';
