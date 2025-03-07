import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

export default {
    title: 'UI/TextField',
    component: TextField,
} as Meta<typeof TextField>;

export const Default: StoryObj<typeof TextField> = {
    args: {
        label: 'Enter text',
        placeholder: 'Type something...',
    },
};

export const WithError: StoryObj<typeof TextField> = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        errorMessage: 'Invalid email format',
    },
};

export const Disabled: StoryObj<typeof TextField> = {
    args: {
        label: 'Disabled field',
        placeholder: 'Cannot type here',
        disabled: true,
    },
};

export const Required: StoryObj<typeof TextField> = {
    args: {
        label: 'Required field',
        placeholder: 'Type something...',
        required: true,
    },
};

export const Multiline: StoryObj<typeof TextField> = {
    args: {
        label: 'Multiline Field',
        placeholder: 'Enter multiple lines...',
        multiline: true,
        rows: 4, // Можно задать количество строк
    },
};
