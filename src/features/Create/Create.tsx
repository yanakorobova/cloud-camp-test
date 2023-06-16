import React, {useCallback} from 'react';
import {Slider} from 'antd';
import type {SliderMarks} from 'antd/es/slider';
import s from './Create.module.scss';
import {Step1} from "features/Create/Step1/Step1";
import {Form, Formik} from "formik";
import {validateStep1, validateStep2, validateStep3} from "common/validate/validate";
import {useNavigate} from "react-router-dom";
import {PATH} from "common/constants/path/path";
import {Step2} from "features/Create/Step2/Step2";
import {useAppDispatch, useAppSelector} from "redux/store/store";
import {selectData, selectStep} from "redux/selectors/selectors";
import {setStep} from "redux/reducers/steps-slice";
import {DataFormType, sendData, setData} from "redux/reducers/dataForm-slice";
import {ModalContainer} from "features/Modal/ModalContainer";
import {SuperButton} from "common/components/SuperButton/SuperButton";
import {Step3} from "features/Create/Step3/Step3";

const marks: SliderMarks = {
    0: '1',
    50: '2',
    100: '3',
};

export const Create = () => {
    const navigate = useNavigate()
    const step = useAppSelector(selectStep)
    const {name, sername, about, nickname, sex, checkbox} = useAppSelector(selectData)
    const dispatch = useAppDispatch()
    const onChangeStepHandler = (newStep: number) => {
        dispatch(setStep({newStep}))
    }

    const backHandler = useCallback(() => {
        if (step !== 0) {
            dispatch(setStep({newStep: step - 50}))
        } else navigate(PATH.MAIN)
    }, [step])

    const nextHandler = useCallback((values: DataFormType) => {
        dispatch(setStep({newStep: step + 50}))
        dispatch(setData(values))
    }, [step])

    return (
        <div className={s.createContainer}>
            <Slider
                marks={marks}
                step={null}
                onChange={onChangeStepHandler}
                value={step}
                className={s.slider}
                trackStyle={{height: '8px', background: '#5558FA'}}
                railStyle={{height: '8px', background: 'rgba(0, 0, 0, 0.08)'}}
            />
            <Formik
                initialValues={{
                    nickname,
                    name,
                    sername,
                    about,
                    sex,
                    checkbox
                }}
                validationSchema={step === 0 ? validateStep1 : step === 50 ? validateStep2 : validateStep3}
                onSubmit={(values, {resetForm}) => {
                    if (step !== 100) nextHandler(values)
                    else {
                        dispatch(sendData(values))
                        resetForm()
                    }
                }}
            >
                {formik => (
                    <Form className={s.form}>
                        {step === 0 ? <Step1 formik={formik}/> : step === 50 ? <Step2/> : <Step3/>}
                        <div className={s.buttons}>
                            <SuperButton id={'button-back'} onClick={backHandler} ghost={true}>Назад</SuperButton>
                            {step !== 100 ?
                                <SuperButton id={'button-next'}
                                             type={'submit'}>Далее</SuperButton>
                                : <ModalContainer/>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

