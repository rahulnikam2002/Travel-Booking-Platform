import React from "react";
import styles from "./button.module.css"

export type ButtonProps = {
    // Content
    title?: string;
    children?: React.ReactNode;

    // Basic styling
    isSquare?: boolean; // true = square, false = rounded
    size?: 'small' | 'medium' | 'large';
    type?: 'filled' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

    // Icons (simple left/right support)
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;

    // Basic props
    disabled?: boolean;
    onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
    const {
        isSquare = false,
        size = 'medium',
        type = 'filled',
        color = 'primary',
        title,
        children,
        leftIcon,
        rightIcon,
        disabled = false,
        onClick
    } = props;

    const buttonContent = children || title;

    const buttonClasses = [
        styles.button,
        isSquare ? styles.square : styles.rounded,
        styles[size],
        styles[type],
        styles[color],
        disabled && styles.disabled
    ].filter(Boolean).join(' ');

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
            {buttonContent && <span className={styles.text}>{buttonContent}</span>}
            {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </button>
    );
};