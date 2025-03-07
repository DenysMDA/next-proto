'use client';

import React from 'react';
import styles from '../operator/operator.module.css';
import Table from '@/components/Table/Table';
import {historyData} from "@/common/mock";

const HistoryPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>History</h1>
            <Table data={historyData} />
        </div>
    );
};

export default HistoryPage;
