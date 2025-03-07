import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
    label?: string;
    options: { value: string; label: string }[];
    onChange?: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
}

const Dropdown = ({ label, options, onChange, disabled, placeholder = 'Select an option' }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [dropUp, setDropUp] = useState(false); // Добавляем состояние для позиционирования вверх/вниз
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Определяем, куда открывать меню (вниз или вверх)
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            setDropUp(spaceBelow < 200); // Если места меньше 200px, открываем вверх
        }
    }, [isOpen]);

    const handleSelect = (value: string) => {
        setSelected(value);
        onChange?.(value);
        setIsOpen(false);
    };

    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            {label && <label className={styles.label}>{label}</label>}
            <div
                className={`${styles.dropdown} ${disabled ? styles.disabled : ''}`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                role="combobox"
                aria-expanded={isOpen}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
            >
                <span className={styles.selected}>{selected || placeholder}</span>
                <span className={styles.arrow}>▼</span>
            </div>

            {isOpen && (
                <ul className={`${styles.menu} ${dropUp ? styles.dropUp : styles.dropDown}`}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={styles.option}
                            onClick={() => handleSelect(option.value)}
                            role="option"
                            tabIndex={0}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
