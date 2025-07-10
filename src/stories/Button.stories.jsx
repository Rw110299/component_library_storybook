import React from 'react';
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: action('clicked') },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
