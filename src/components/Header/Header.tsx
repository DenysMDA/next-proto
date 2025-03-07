'use client';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>My Application</h1>
            <button className={styles.chatButton}>Chat</button>
        </header>
    );
};

export default Header;
