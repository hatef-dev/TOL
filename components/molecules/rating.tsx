import React from 'react';

export interface RatingProps {
    value: number;
    max?: number;
    reverse?: boolean;
    onChange?: (value: number) => void;
    readonly?: boolean;
    className?: string;
}

export const Rating: React.FC<RatingProps> = ({
    value,
    max = 5,
    reverse = false,
    onChange,
    readonly = false,
    className = '',
}) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);

    const handleClick = (rating: number) => {
        if (!readonly && onChange) {
            onChange(rating);
        }
    };

    const handleMouseEnter = (rating: number) => {
        if (!readonly) {
            setHoverValue(rating);
        }
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
    };

    const stars = Array.from({ length: max }, (_, i) => i + 1);
    const displayStars = reverse ? stars.reverse() : stars;

    return (
        <div
            className={`flex items-center gap-1 ${reverse ? 'flex-row-reverse' : ''} ${className}`}
            onMouseLeave={handleMouseLeave}
        >
            {displayStars.map((star) => {
                const isFilled = (hoverValue ?? value) >= star;
                return (
                    <button
                        key={star}
                        type="button"
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        disabled={readonly}
                        className={`transition-colors duration-200 ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
                        aria-label={`Rate ${star} out of ${max}`}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={isFilled ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            strokeWidth="2"
                            className={isFilled ? 'text-primary' : 'text-weak'}
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
};

Rating.displayName = 'Rating';
