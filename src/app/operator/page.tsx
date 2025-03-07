'use client';

import React from 'react';
import styles from './operator.module.css';
import Table from "@/components/Table/Table";
import {operators} from "@/common/mock";

const OperatorPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Operator Configuration</h1>
            <Table data={operators} />
        </div>
    );
};

export default OperatorPage;
