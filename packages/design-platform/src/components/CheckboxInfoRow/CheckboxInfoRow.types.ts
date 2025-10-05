export type CheckboxInfoRowProps = {
    title: string;
    description?: string;
    isChecked: boolean;
    onChange: (checked: boolean) => void;   
}