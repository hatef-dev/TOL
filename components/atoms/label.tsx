import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
    children: React.ReactNode;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ required, className = '', children, ...props }, ref) => {
        const baseStyles = 'block text-[0.875rem] leading-[1.25rem] font-semibold text-primary mb-1.5';

        return (
            <label
                ref={ref}
                className={`${baseStyles} ${className}`}
                {...props}
            >
                {children}
                {required && <span className="text-error ml-1">*</span>}
            </label>
        );
    }
);

Label.displayName = 'Label';
