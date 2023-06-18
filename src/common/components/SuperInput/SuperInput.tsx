import React, {CSSProperties} from 'react';
import {FieldHookConfig, useField} from "formik";
import s from '../../style/commonStyle.module.scss';
import {Input} from "antd";
import MaskedInput from 'antd-mask-input';
import {MaskType} from "antd-mask-input/build/main/lib/MaskedInput";

type SuperInputPropsType = {
    label?: string
    style?: CSSProperties
    mask?: MaskType
}
export const SuperInput: React.FC<SuperInputPropsType & FieldHookConfig<string>> = (
    {label, style, mask, ...props}) => {

    const [field, meta] = useField(props);
    const className = s.input + (meta.touched && meta.error ? ' ' + s.errorField : '')

    return (
        <div className={s.wrapper} style={{maxWidth: style?.maxWidth}}>
            {label && <label htmlFor={props.id}>{label}</label>}
            {mask ? <MaskedInput
                mask={mask}
                className={className}
                id={props.id}
                placeholder={'Placeholder'}
                disabled={props.disabled}
                style={style}
                type={props.type || 'text'}
                {...field}
            /> : <Input
                className={className}
                id={props.id}
                placeholder={'Placeholder'}
                disabled={props.disabled}
                style={style}
                type={props.type || 'text'}
                {...field}
            />}
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

