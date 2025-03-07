'use client';

import React from 'react';
import styles from './Table.module.css';
import { TableProps } from '@/common/interfaces'; // Явный импорт

const Table = ({ data }: TableProps) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.th}>Operator</th>
                <th className={styles.th}>Friendly Name</th>
                <th className={styles.th}>State</th>
                <th className={styles.th}>Website</th>
            </tr>
            </thead>
            <tbody>
            {data.map((op, index) => (
                <tr key={index}>
                    <td className={styles.td}>{op.operator}</td>
                    <td className={styles.td}>{op.friendlyName}</td>
                    <td className={styles.td}>{op.state}</td>
                    <td className={styles.td}>
                        <a href={`https://${op.website}`} className={styles.link} target="_blank" rel="noopener noreferrer">
                            {op.website}
                        </a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};


export default Table;

