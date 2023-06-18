import React from 'react';
import {Select} from "antd";
import {FieldHookConfig, FormikProps, useField} from "formik";
import {SizeType} from "antd/es/config-provider/SizeContext";
import s from '../../style/commonStyle.module.scss';
import {DataFormType} from "redux/reducers/dataForm-slice";

type SuperInputPropsType = {
    label: string
    size: SizeType
    formik: FormikProps<DataFormType>
}
export const SuperSelect: React.FC<SuperInputPropsType & FieldHookConfig<string>> = (
    {label, size, formik, ...props}) => {

    const [field, meta] = useField(props)
    return (
        <div className={s.wrapper}>
            <label htmlFor={props.id}>{label}</label>
            <Select placeholder={'Не выбрано'}
                    onChange={(value) => formik.setFieldValue(field.name, value)}
                    size={size}
                    className={s.select}
                    value={field.value}
                    bordered={true}
            >
                {props.children}
            </Select>
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );

};

