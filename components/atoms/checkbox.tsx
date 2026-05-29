import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ indeterminate, className = '', ...props }, ref) => {
        const checkboxRef = React.useRef<HTMLInputElement>(null);

        React.useImperativeHandle(ref, () => checkboxRef.current!);

        React.useEffect(() => {
            if (checkboxRef.current) {
                checkboxRef.current.indeterminate = indeterminate ?? false;
            }
        }, [indeterminate]);

        const baseStyles = 'w-5 h-5 rounded border-2 border-weak text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 cursor-pointer';

        return (
            <input
                ref={checkboxRef}
                type="checkbox"
                className={`${baseStyles} ${className}`}
                {...props}
            />
        );
    }
);

Checkbox.displayName = 'Checkbox';
