import React, {useEffect, useState} from 'react';
import {Modal} from "common/components/Modal/Modal";
import {SuperButton} from "common/components/SuperButton/SuperButton";
import {ErrorModal} from "features/Modal/ErrorModal";
import {useAppSelector} from "redux/store/store";
import {selectStatus} from "redux/selectors/selectors";
import {SuccessModal} from "features/Modal/SuccessModal";


export const ModalContainer: React.FC = () => {

    const status = useAppSelector(selectStatus)
    const [show, setShow] = useState(false);
    const closeModalHandler = () => {
        setShow(false)
    }
    useEffect(() => {
        status && setShow(true)
    }, [status])
    return (
        <>
            <SuperButton id={'button-send'} type={"submit"}>Отправить</SuperButton>
            <Modal
                enableBackground={true}
                width={460}
                height={312}
                show={show}
            >
                {status === 'success' ? <SuccessModal onClose={closeModalHandler}/>
                    : <ErrorModal onClose={closeModalHandler}/>}
            </Modal>
        </>
    );
};


