import React from 'react';

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className = '', ...props }, ref) => {
        const baseStyles = 'w-5 h-5 border-2 border-weak text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 cursor-pointer';

        return (
            <input
                ref={ref}
                type="radio"
                className={`${baseStyles} ${className}`}
                {...props}
            />
        );
    }
);

Radio.displayName = 'Radio';
