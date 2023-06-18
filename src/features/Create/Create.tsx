import React, {useCallback} from 'react';
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
import {Slider} from "common/components/Slider/Slider";

export const Create = () => {
    const navigate = useNavigate()
    const step = useAppSelector(selectStep)
    const {name, surname, about, nickname, sex, checkbox, advantages, radio} = useAppSelector(selectData)
    const dispatch = useAppDispatch()

    const backHandler = useCallback(() => {
        if (step !== 1) {
            dispatch(setStep({newStep: step - 1}))
        } else navigate(PATH.MAIN)
    }, [step])

    const nextHandler = useCallback((values: DataFormType) => {
        dispatch(setStep({newStep: step + 1}))
        dispatch(setData(values))
    }, [step])

    return (
        <div className={s.createContainer}>
            <Slider currentStep={step} steps={3}/>
            <Formik
                initialValues={{
                    nickname,
                    name,
                    surname,
                    about,
                    sex,
                    checkbox,
                    advantages,
                    radio
                }}
                validationSchema={step === 1 ? validateStep1 : step === 2 ? validateStep2 : validateStep3}
                onSubmit={(values, {resetForm}) => {
                    if (step !== 3) nextHandler(values)
                    else {
                        dispatch(sendData(values))
                        resetForm()
                    }
                }}
            >
                {formik => (
                    <Form className={s.form}>
                        {step === 1 ? <Step1 formik={formik}/> : step === 2 ? <Step2 formik={formik}/> : <Step3/>}
                        <div className={s.buttons}>
                            <SuperButton id={'button-back'} onClick={backHandler} ghost={true}>Назад</SuperButton>
                            {step !== 3 ?
                                <SuperButton id={'button-next'} type={'submit'}>Далее</SuperButton>
                                : <ModalContainer/>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

