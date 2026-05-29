import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ error, className = '', ...props }, ref) => {
        const baseStyles = 'w-full px-4 py-2.5 text-[1rem] leading-[1.5rem] font-normal rounded-lg border transition-colors duration-200 resize-vertical';
        const stateStyles = error
            ? 'border-error focus:outline-none focus:ring-2 focus:ring-error'
            : 'border-weak focus:outline-none focus:ring-2 focus:ring-primary';

        return (
            <textarea
                ref={ref}
                className={`${baseStyles} ${stateStyles} ${className}`}
                {...props}
            />
        );
    }
);

Textarea.displayName = 'Textarea';
