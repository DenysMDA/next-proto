import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './TextField.module.css';

interface BaseProps {
    label?: string;
    errorMessage?: string;
    disabled?: boolean;
    required?: boolean;
    multiline?: boolean;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

type TextFieldProps = InputProps & TextareaProps;

const TextField = ({
                       label,
                       errorMessage,
                       disabled,
                       required,
                       multiline = false,
                       ...props
                   }: TextFieldProps) => {
    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label} {required && '*'}</label>}
            {multiline ? (
                <textarea
                    className={`${styles.input} ${styles.textarea} ${errorMessage ? styles.error : ''}`}
                    disabled={disabled}
                    aria-disabled={disabled}
                    aria-required={required}
                    aria-invalid={!!errorMessage}
                    {...props}
                />
            ) : (
                <input
                    className={`${styles.input} ${errorMessage ? styles.error : ''}`}
                    disabled={disabled}
                    aria-disabled={disabled}
                    aria-required={required}
                    aria-invalid={!!errorMessage}
                    {...props}
                />
            )}
            {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
    );
};

export default TextField;
