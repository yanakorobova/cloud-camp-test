import React from 'react';
import {Select} from "antd";
import {SuperInput} from "common/components/SuperInput/SuperInput";
import {SuperSelect} from "common/components/SuperSelect/SuperSelect";
import {FormikProps} from "formik";
import {DataFormType} from "redux/reducers/dataForm-slice";

const selectOptions = [
    {label: 'man', value: 'man'},
    {label: 'woman', value: 'woman'}
]

type Step1PropsType = {
    formik: FormikProps<DataFormType>
}
export const Step1: React.FC<Step1PropsType> = ({formik}) => {
    const style = {
        maxWidth: '300px'
    }

    return (
        <>
            <SuperInput
                label={'Nickname'}
                name={"nickname"}
                id={'field-nickname'}
                style={style}
            />
            <SuperInput
                label={'Name'}
                name={"name"}
                id={'field-name'}
                style={style}
            />
            <SuperInput
                label={'Surname'}
                name={"surname"}
                id={'field-sername'}
                style={style}
            />
            <SuperSelect
                id={'field-sex'}
                label={'Sex'}
                size={'large'}
                name={"sex"}
                formik={formik}
            >
                {selectOptions.map((o) => (
                    <Select.Option key={o.value} id={`field-sex-option-${o.label}`}
                                   value={o.value}>{o.label}</Select.Option>))}
            </SuperSelect>
        </>
    );
};

