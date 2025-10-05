import { useState } from 'react';
import { ExpandTabProps } from './ExpandTab.types';
import styles from './expandTab.module.css';

export const ExpandTab = (props: ExpandTabProps) => {
    const { children } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className={styles.expandTab} onClick={toggleOpen}>
                {props.title}
            </button>
            {isOpen && <div>{children}</div>}
        </div>
    )
}