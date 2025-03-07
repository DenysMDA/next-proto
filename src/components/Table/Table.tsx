'use client';

import React from 'react';
import styles from './Table.module.css';

const operators = [
    { operator: 'Rogers Inc', friendlyName: 'Rogers', state: 'Active', website: 'www.rogers.com' },
    { operator: 'Bell Canada', friendlyName: 'Bell', state: 'Active', website: 'www.bell.ca' },
    { operator: 'Telus Communications', friendlyName: 'Telus', state: 'Active', website: 'www.telus.com' },
    { operator: 'Freedom Mobile', friendlyName: 'Freedom', state: 'Inactive', website: 'www.freedommobile.ca' },
    { operator: 'Videotron', friendlyName: 'Videotron', state: 'Active', website: 'www.videotron.com' },
];

const Table = () => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Operator</th>
                <th>Friendly Name</th>
                <th>State</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
            {operators.map((op, index) => (
                <tr key={index}>
                    <td>{op.operator}</td>
                    <td>{op.friendlyName}</td>
                    <td>{op.state}</td>
                    <td>
                        <a href={`https://${op.website}`} target="_blank" rel="noopener noreferrer">
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
