import { useEffect, useState } from "react";
import { CheckboxInfoRowProps } from "./CheckboxInfoRow.types";
import styles from './checkboxInfoRow.module.css';

export const CheckboxInfoRow = (props: CheckboxInfoRowProps) => {
    const { title, description, isChecked, onChange } = props;
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(!!isChecked);

    // Keep internal state in sync when parent changes `isChecked` prop
    useEffect(() => {
        if (typeof isChecked === 'boolean') setIsCheckboxChecked(isChecked);
    }, [isChecked]);

    const toggle = () => {
        const next = !isCheckboxChecked;
        setIsCheckboxChecked(next);
        if (onChange) onChange(next);
    };

    return (
        <div className={styles.checkboxInfoRow}>
            <label className={styles.leftSection}>
                <input
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={toggle}
                    className={styles.checkbox}
                />
                <div className={styles.title}>{title}</div>
            </label>
            {description && <div className={styles.description}>{description}</div>}
        </div>
    );
}