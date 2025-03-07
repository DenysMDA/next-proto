'use client';

import React from 'react';
import styles from '../operator/operator.module.css';
import Table from '@/components/Table/Table';
import {numbersData} from "@/common/mock";

const NumbersPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Numbers</h1>
            <Table data={numbersData} />
        </div>
    );
};

export default NumbersPage;