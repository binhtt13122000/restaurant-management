import { FormControl, FormControlProps, InputLabel, Select } from "@mui/material";
import { Control, Controller } from "react-hook-form";

export interface ReactHookFormSelectProps extends FormControlProps {
    name: string;
    label: string;
    control: Control;
    children: any;
    readOnly?: boolean;
}
const ReactHookFormSelect: React.FC<ReactHookFormSelectProps> = ({
    name,
    label,
    control,
    children,
    readOnly,
    ...props
}) => {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                render={({ field: { value, ref, onChange } }) => (
                    <Select
                        inputRef={ref}
                        ref={ref}
                        labelId={labelId}
                        id={name}
                        label={label}
                        readOnly={readOnly}
                        value={value}
                        onChange={(value) => {
                            onChange(value);
                        }}
                    >
                        {children}
                    </Select>
                )}
                name={name}
                control={control}
            />
        </FormControl>
    );
};
export default ReactHookFormSelect;
