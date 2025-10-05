type SingleCheckboxInfo = {
    title: string;
    description?: string;
    isChecked: boolean;
}

export type CheckboxInfoListProps = {
    items: SingleCheckboxInfo[];
    isExpandable?: boolean;
    minItemsToShow?: number;
    /**
     * Optional callback fired when any checkbox changes.
     * Receives the updated items array.
     */
    onChange?: (items: SingleCheckboxInfo[]) => void;
}