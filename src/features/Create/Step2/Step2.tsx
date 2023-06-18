import React from 'react';
import {Checkbox, Radio, Space} from "antd";
import s from './Step2.module.scss';
import {SuperCheckbox} from "common/components/SuperCheckbox/SuperCheckbox";
import {FormikProps} from "formik";
import {DataFormType} from "redux/reducers/dataForm-slice";
import {Advantages} from "common/components/Advantages/Advantages";
import {SuperRadio} from "common/components/SuperRadio/SuperRadio";

const checkboxOptions = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3}
]
const radioOptions = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3}
]
type Step1PropsType = {
    formik: FormikProps<DataFormType>
}

export const Step2: React.FC<Step1PropsType> = ({formik}) => {

    return (
        <div className={s.wrapper}>
            <Advantages
                name={"advantages"}
                label={"Advantages"}
                fields={formik.values.advantages}
            />
            <SuperCheckbox label={'Checkbox group'} name={"checkbox"} formik={formik}>
                <Space direction="vertical">
                    {checkboxOptions.map((o, i) => (
                        <Checkbox key={o.value} id={`field-checkbox-group-option-${i}`}
                                  value={o.value}>{o.label}</Checkbox>))}
                </Space>
            </SuperCheckbox>
            <SuperRadio label={'Radio group'} name={'radio'} formik={formik}>
                <Space direction="vertical">
                    {radioOptions.map((o, i) => (
                        <Radio key={o.value} id={`field-radio-group-option-${i}`} value={o.value}>{o.label}</Radio>))}
                </Space>
            </SuperRadio>
        </div>
    );
};

