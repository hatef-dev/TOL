import React from 'react';
import { Label } from '../atoms/label';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    label: string;
    error?: string;
    options: SelectOption[];
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, error, options, placeholder, onChange, className = '', ...props }, ref) => {
        const baseStyles = 'w-full px-4 py-2.5 text-[1rem] leading-[1.5rem] font-normal rounded-lg border transition-colors duration-200 bg-base cursor-pointer';
        const stateStyles = error
            ? 'border-error focus:outline-none focus:ring-2 focus:ring-error'
            : 'border-weak focus:outline-none focus:ring-2 focus:ring-primary';

        const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };

        return (
            <div className="w-full">
                <Label>{label}</Label>
                <select
                    ref={ref}
                    className={`${baseStyles} ${stateStyles} ${className}`}
                    onChange={handleChange}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && (
                    <p className="mt-1.5 text-[0.875rem] leading-[1.25rem] text-error">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';
