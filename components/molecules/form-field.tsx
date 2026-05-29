import React from 'react';
import { Label } from '../atoms/label';

export interface FormFieldProps {
    label: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    children: React.ReactNode;
    htmlFor?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    error,
    helperText,
    required,
    children,
    htmlFor,
}) => {
    return (
        <div className="w-full">
            <Label htmlFor={htmlFor} required={required}>
                {label}
            </Label>
            {children}
            {error && (
                <p className="mt-1.5 text-[0.875rem] leading-[1.25rem] text-error">
                    {error}
                </p>
            )}
            {!error && helperText && (
                <p className="mt-1.5 text-[0.875rem] leading-[1.25rem] text-muted">
                    {helperText}
                </p>
            )}
        </div>
    );
};

FormField.displayName = 'FormField';
