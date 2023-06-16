import React from 'react';
import {SuperButton} from "common/components/SuperButton/SuperButton";
import s from 'features/Modal/Modal.module.scss';
import success from "common/assets/succcess.svg";
import {useNavigate} from "react-router-dom";
import {PATH} from "common/constants/path/path";
import {resetData} from "redux/reducers/dataForm-slice";
import {useAppDispatch} from "redux/store/store";

type SuccesModalPropsType = {
    onClose: () => void
}
export const SuccessModal: React.FC<SuccesModalPropsType> = ({onClose}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const redirectHandler = () => {
        onClose()
        dispatch(resetData())
        navigate(PATH.MAIN)
    }
    return (
        <div className={s.wrapper}>
            <p>Ошибка</p>
            <img src={success} alt={'img'}/>
            <SuperButton id={'button-to-main'} onClick={redirectHandler}>На главную</SuperButton>
        </div>
    );
};

