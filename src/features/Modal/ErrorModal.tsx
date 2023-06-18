import React from 'react';
import {SuperButton} from "common/components/SuperButton/SuperButton";
import s from 'features/Modal/Modal.module.scss';
import {Button} from "antd";
import close from "common/assets/img/close.svg";
import error from "common/assets/img/error.svg";

type ErrorModalPropsType = {
    onClose: () => void
}
export const ErrorModal: React.FC<ErrorModalPropsType> = ({onClose}) => {
    const onCloseHandler = () => onClose()
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <p>Ошибка</p>
                <Button
                    icon={<img src={close} alt={'img close'} onClick={onCloseHandler}/>}
                    style={{border: 'none'}}/>
            </div>
            <img src={error} alt={'img error'}/>
            <div className={s.button}>
                <SuperButton id={'button-close'} onClick={onCloseHandler}>Закрыть</SuperButton>
            </div>
        </div>
    );
};
