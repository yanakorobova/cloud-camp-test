import React, {CSSProperties} from 'react';
import {FieldHookConfig, useField} from "formik";
import s from "common/components/SuperInput/SuperInput.module.scss";
import {Input} from "antd";

type SuperInputPropsType = {
    label: string
    style?: CSSProperties
}
export const SuperInput: React.FC<SuperInputPropsType & FieldHookConfig<string>> = (
    {label, style, ...props}) => {

    const [field, meta] = useField(props);
    const className = s.input + (meta.touched && meta.error ? ' ' + s.errorInput : '')

    return (
        <div className={s.inputWrapper}>
            <label htmlFor={props.id}>{label}</label>
            <Input
                className={className}
                id={props.id}
                placeholder={'Placeholder'}
                disabled={props.disabled}
                style={style}
                {...field}
            />
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

