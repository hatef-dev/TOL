import React from 'react';
import { Checkbox } from '../atoms/checkbox';
import { Label } from '../atoms/label';

export interface CheckboxOption {
    value: string;
    label: string;
}

export interface CheckboxGroupProps {
    label: string;
    options: CheckboxOption[];
    value: string[];
    onChange: (value: string[]) => void;
    orientation?: 'vertical' | 'horizontal';
    className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    label,
    options,
    value,
    onChange,
    orientation = 'vertical',
    className = '',
}) => {
    const handleCheckboxChange = (optionValue: string, checked: boolean) => {
        if (checked) {
            onChange([...value, optionValue]);
        } else {
            onChange(value.filter((v) => v !== optionValue));
        }
    };

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
                        <Checkbox
                            checked={value.includes(option.value)}
                            onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
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

CheckboxGroup.displayName = 'CheckboxGroup';
