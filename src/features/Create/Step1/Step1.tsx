import React from 'react';
import {Select} from "antd";
import {SuperInput} from "common/components/SuperInput/SuperInput";
import {SuperSelect} from "common/components/SuperSelect/SuperSelect";
import {FormikProps} from "formik";
import {DataFormType} from "redux/reducers/dataForm-slice";

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
                name={"sername"}
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
                <Select.Option id={'field-sex-option-man'} value={'man'}>man</Select.Option>
                <Select.Option id={'field-sex-option-woman'} value={'woman'}>woman</Select.Option>
            </SuperSelect>
        </>
    );
};

