export interface Operator {
    operator: string;
    friendlyName: string;
    state: string;
    website: string;
}

export interface TableProps {
    data: Operator[];
}