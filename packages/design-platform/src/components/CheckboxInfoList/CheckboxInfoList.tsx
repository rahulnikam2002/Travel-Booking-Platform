import { useEffect, useMemo, useState } from 'react';
import { CheckboxInfoListProps } from './CheckboxInfoList.type';
import { CheckboxInfoRow } from '../CheckboxInfoRow/CheckboxInfoRow';
import styles from './checkboxInfoList.module.css';

export const CheckboxInfoList = (props: CheckboxInfoListProps) => {
    const { items, isExpandable = false, minItemsToShow = 4, onChange } = props;

    const [internalItems, setInternalItems] = useState(() => items.map((it) => ({ ...it })));

    useEffect(() => {
        setInternalItems(items.map((it) => ({ ...it })));
    }, [items]);

    const [expanded, setExpanded] = useState(false);

    const itemsToRender = useMemo(() => {
        if (!isExpandable) return internalItems;
        if (expanded) return internalItems;
        return internalItems.slice(0, minItemsToShow);
    }, [internalItems, isExpandable, expanded, minItemsToShow]);

    const hiddenCount = Math.max(0, internalItems.length - itemsToRender.length);

    const toggleExpand = () => setExpanded((s) => !s);

    const handleRowChange = (index: number, checked: boolean) => {
        setInternalItems((prev) => {
            const copy = prev.map((it) => ({ ...it }));
            if (typeof copy[index] !== 'undefined') copy[index].isChecked = checked;
            // notify parent if provided
            onChange?.(copy.map((c) => ({ ...c })));
            return copy;
        });
    };

    return (
        <div className={styles.checkboxInfoList}>
            {itemsToRender.map((item, idx) => (
                <CheckboxInfoRow
                    key={`${item.title}-${idx}`}
                    title={item.title}
                    description={item.description}
                    isChecked={!!item.isChecked}
                    onChange={(checked) => handleRowChange(idx, checked)}
                />
            ))}

            {isExpandable && internalItems.length > minItemsToShow && (
                <button className={styles.expandButton} onClick={toggleExpand}>
                    {expanded ? 'Show less' : `+${hiddenCount} more`}
                </button>
            )}
        </div>
    );
};

export default CheckboxInfoList;