import React from 'react';
import { Radio } from '../atoms/radio';
import { Label } from '../atoms/label';

export interface RadioOption {
    value: string;
    label: string;
}

export interface RadioGroupProps {
    label: string;
    name: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    orientation?: 'vertical' | 'horizontal';
    className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    name,
    options,
    value,
    onChange,
    orientation = 'vertical',
    className = '',
}) => {
    const containerStyles = orientation === 'horizontal'
        ? 'flex flex-wrap gap-4'
        : 'flex flex-col gap-3';

    return (
        <div className={`w-full ${className}`}>
            <Label>{label}</Label>
            <div className={containerStyles}>
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Radio
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <span className="text-[1rem] leading-[1.5rem] text-primary">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';
