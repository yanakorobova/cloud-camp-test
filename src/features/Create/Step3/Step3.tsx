import React, {useEffect, useState} from 'react';
import {useField} from "formik";
import {Input} from 'antd';
import s from './Step3.module.scss';

const {TextArea} = Input;

export const Step3: React.FC = () => {

    const [countSymbols, setCountSymbols] = useState(0)
    const [field, meta] = useField('about');

    useEffect(() => {
        let count = field.value.match(/[^ ]/g)?.length
        setCountSymbols(count ? count : 0)
    }, [field.value])

    const className = s.textArea + (meta.touched && meta.error ? ' ' + s.errorTextArea : '')

    return (
        <div className={s.textWrapper}>
            <label htmlFor={'field-about'}>About</label>
            <TextArea
                id={'field-about'}
                placeholder="Placeholder"
                className={className}
                maxLength={200}
                {...field}
            />
            <div className={s.info}>
                {meta.touched && meta.error ? (
                    <div className={s.error}>{meta.error}</div>
                ) : <div className={s.error}></div>}
                <p>Number of characters excluding spaces: {countSymbols}</p>
            </div>
        </div>
    );
};

