'use client';

import React, { useState } from 'react';
import styles from './Menu.module.css';
import Link from "next/link";
import {menuItems} from "@/common/mock";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles.menuWrapper}>
            <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '⮜' : '⮞'}
            </button>
            <aside className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
                <ul className={styles.menuList}>
                    {menuItems.map((item) => (
                        <li className={styles.link} key={item.path}>
                            <Link href={item.path} className={styles.menuItem}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Menu;
