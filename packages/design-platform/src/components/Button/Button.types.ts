import type { ReactNode } from "react";

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'filled' | 'outlined' | 'text';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export type ButtonProps = {
    // Content
    title?: string;
    children?: ReactNode;

    // Basic styling
    isSquare?: boolean; // true = square, false = rounded
    size?: ButtonSize;
    type?: ButtonType;
    color?: ButtonColor;

    // Icons (simple left/right support)
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;

    // Basic props
    disabled?: boolean;
    onClick?: () => void;
};
