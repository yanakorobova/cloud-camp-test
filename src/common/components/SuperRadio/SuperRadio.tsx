import React from 'react';
import {FieldHookConfig, FormikProps, useField} from "formik";
import {Radio} from "antd";
import {DataFormType} from "redux/reducers/dataForm-slice";
import s from '../../style/commonStyle.module.scss';

type SuperRadioPropsType = {
    label: string
    formik: FormikProps<DataFormType>
}
export const SuperRadio: React.FC<SuperRadioPropsType & FieldHookConfig<string>> = (
    {label, formik, ...props}) => {

    const [field, meta] = useField({...props});

    return (
        <div className={s.wrapper}>
            <label id={field.name}>{label}</label>
            <Radio.Group {...field}>
                {props.children}
            </Radio.Group>
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

