import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
    title: 'UI/Dropdown',
    component: Dropdown,
} as Meta<typeof Dropdown>;

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

export const Default: StoryObj<typeof Dropdown> = {
    args: {
        label: 'Select an option',
        options,
    },
};

export const Disabled: StoryObj<typeof Dropdown> = {
    args: {
        label: 'Disabled Dropdown',
        options,
        disabled: true,
    },
};

export const WithPlaceholder: StoryObj<typeof Dropdown> = {
    args: {
        label: 'Choose something',
        options,
        placeholder: 'Please select...',
    },
};
