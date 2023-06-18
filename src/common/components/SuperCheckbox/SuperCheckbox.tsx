import React from 'react';
import {FieldHookConfig, FormikProps, useField} from "formik";
import {Checkbox} from "antd";
import {DataFormType} from "redux/reducers/dataForm-slice";
import s from '../../style/commonStyle.module.scss';

type SuperCheckboxPropsType = {
    label: string
    formik: FormikProps<DataFormType>
}
export const SuperCheckbox: React.FC<SuperCheckboxPropsType & FieldHookConfig<string>> = (
    {label, formik, ...props}) => {

    const [field, meta] = useField({...props});

    return (
        <div className={s.wrapper}>
            <label id={field.name}>{label}</label>
            <Checkbox.Group
                name={field.name}
                onChange={(value) => formik.setFieldValue(field.name, value)}
                value={field.value as unknown as number[]}
            >
                {props.children}
            </Checkbox.Group>
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

