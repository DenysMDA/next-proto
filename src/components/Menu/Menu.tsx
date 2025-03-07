'use client';

import React, { useState } from 'react';
import styles from './Menu.module.css';

const menuItems = [
    { title: 'Menu 1', submenus: ['Submenu 1', 'Submenu 2'] },
    { title: 'Menu 2', submenus: ['Submenu 2.1', 'Submenu 2.2'] },
    { title: 'Menu 3', submenus: ['Submenu 3.1', 'Submenu 3.2'] },
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const toggleSubmenu = (title: string) => {
        setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className={styles.menuWrapper}>
            <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '⮜' : '⮞'}
            </button>
            <aside className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
                <ul className={styles.menuList}>
                    {menuItems.map((item) => (
                        <li key={item.title}>
                            <button className={styles.menuItem} onClick={() => toggleSubmenu(item.title)}>
                                {item.title}
                            </button>
                            {openMenus[item.title] && (
                                <ul className={styles.submenuList}>
                                    {item.submenus.map((submenu) => (
                                        <li key={submenu} className={styles.submenuItem}>
                                            {submenu}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Menu;
