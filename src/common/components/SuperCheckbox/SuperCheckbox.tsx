import React, {ReactNode} from 'react';
import {FieldHookConfig, useField} from "formik";
import {Checkbox} from "antd";

type SuperCheckboxPropsType = {
    label: string
    children: ReactNode
}
export const SuperCheckbox: React.FC<SuperCheckboxPropsType & FieldHookConfig<string>> = (
    {label, children, ...props}) => {
    const [field, meta] = useField({...props});
    return (
        <div className={''}>
            <label id={field.name}>{label}</label>
            <Checkbox.Group onChange={() => {
            }} name={field.name}>
                {children}
            </Checkbox.Group>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

