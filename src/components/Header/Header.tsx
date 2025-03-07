'use client';

import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import Panel from "@/components/Panels/Panels";

const Header = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>My Application</h1>
            <button className={styles.chatButton} onClick={() => setIsPanelOpen(true)}>Chat</button>

            <Panel
                isOpen={isPanelOpen}
                onClose={() => setIsPanelOpen(false)}
                onSubmit={() => console.log('Submitted')}
            >
                <p>Here is the panel content</p>
            </Panel>
        </header>
    );
};


export default Header;
