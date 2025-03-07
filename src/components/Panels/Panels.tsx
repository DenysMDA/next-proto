'use client';

import React from 'react';
import styles from './Panel.module.css';
import TextField from "@/ui/TextField/TextField";
import Dropdown from "@/ui/Dropdown/Dropdown";
import Button from "@/ui/Button/Button";
import {options} from "@/common/mock";

interface PanelProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
}

const Panel = ({ isOpen, onClose, onSubmit }: PanelProps) => {
    return (
        <div className={`${styles.panel} ${isOpen ? styles.open : styles.closed}`}>
            <button className={styles.closeButton} onClick={onClose}>X</button>

            <div className={styles.content}>
                <h2>Panel Content</h2>

                {/* Поле ввода */}
                <TextField label="Your Name" placeholder="Enter your name" required />

                {/* Выпадающий список */}
                <Dropdown label="Select an Option" options={options} />

                {/* Кнопки */}
                <div className={styles.buttonGroup}>
                    <Button variant="primary" onClick={onSubmit}>Submit</Button>
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default Panel;
