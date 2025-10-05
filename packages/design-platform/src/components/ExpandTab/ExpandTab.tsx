import { useEffect, useState } from 'react';
import { ExpandTabProps } from './ExpandTab.types';
import styles from './expandTab.module.css';

export const ExpandTab = (props: ExpandTabProps) => {
    const { children, opened } = props;
    // Initialize from `opened` to avoid an initial flicker when parent wants it opened on first render
    const [isOpen, setIsOpen] = useState<boolean>(() => opened ?? false);

    const toggleOpen = () => {
        // Use functional updater to avoid stale closures
        setIsOpen(prev => !prev);
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