import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    ariaLabel?: string;
}

const Button = ({
                    children,
                    onClick,
                    variant = 'primary',
                    disabled = false,
                    size = 'medium',
                    ariaLabel,
                    ...props
                }: ButtonProps) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (onClick && !disabled) {
                onClick();
            }
        }
    };

    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]}`}
            onClick={onClick}
            disabled={disabled}
            aria-disabled={disabled}
            aria-label={ariaLabel}
            role="button"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
