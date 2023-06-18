import React from 'react';
import deleteImg from "common/assets/img/delete.svg";
import {SuperButton} from "common/components/SuperButton/SuperButton";
import s from 'common/components/Advantages/Advantages.module.scss';
import {FieldArray} from "formik";
import {SuperInput} from "common/components/SuperInput/SuperInput";
import {Button} from "antd";

type AdvantagesPropsType = {
    fields: string[]
    name: string
    label: string
}
export const Advantages: React.FC<AdvantagesPropsType> = ({name, fields, label}) => {
    return (
        <div className={s.advantagesWrapper}>
            <label htmlFor={name}>{label}</label>
            <FieldArray
                name={name}
                render={({remove, push}) => (
                    <div className={s.listInputs}>
                        {fields.map((advant, index) => (
                            <div key={index} className={s.input}>
                                <SuperInput name={`${name}.${index}`}
                                            id={`field-${name}-${index}`}
                                            placeholder="Placeholder"
                                            style={{ maxWidth: '300px'}}
                                />
                                <Button
                                    onClick={() => remove(index)}
                                    id={`button-remove-${index}`}
                                    className={s.removeButton}
                                >
                                    <img src={deleteImg} alt={'img delete'}/>
                                </Button>
                            </div>
                        ))}
                        <SuperButton id={'button-add'} ghost={true} onClick={() => push("")}>+</SuperButton>
                    </div>
                )}
            />
        </div>
    );
};

