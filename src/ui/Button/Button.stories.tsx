import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
        ariaLabel: 'Primary button example',
    },
};

export const Secondary: StoryObj<typeof Button> = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
        ariaLabel: 'Secondary button example',
    },
};

export const Disabled: StoryObj<typeof Button> = {
    args: {
        children: 'Disabled Button',
        disabled: true,
        ariaLabel: 'Disabled button example',
    },
};

export const Large: StoryObj<typeof Button> = {
    args: {
        children: 'Large Button',
        size: 'large',
    },
};

export const Small: StoryObj<typeof Button> = {
    args: {
        children: 'Small Button',
        size: 'small',
    },
};
