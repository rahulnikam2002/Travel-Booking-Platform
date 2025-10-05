import { useEffect, useState } from 'react';
import { ExpandTabProps } from './ExpandTab.types';
import styles from './expandTab.module.css';

export const ExpandTab = (props: ExpandTabProps) => {
    const { children, opened } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (opened !== undefined) {
            setIsOpen(opened);
        }
    }, [opened]);

    return (
        <div>
            <button className={styles.expandTab} onClick={toggleOpen}>
                {props.title}
            </button>
            {isOpen && <div>{children}</div>}
        </div>
    )
}