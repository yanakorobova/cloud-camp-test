import React, {CSSProperties, ReactNode} from 'react';
import s from './Modal.module.scss';

type IModal = {
    enableBackground?: boolean;
    maxWidth: number | string;
    height: number;
    modalStyle?: CSSProperties;
    show: boolean
    children: ReactNode
}

export const Modal: React.FC<IModal> = (
    {
        enableBackground,
        maxWidth,
        height,
        modalStyle,
        show,
        children,
    }
) => {

    if (!show) return null;

    return (
        <>
            {enableBackground && <div className={s.background}/>}
            <div className={s.container}>
                <div className={s.modal}
                     style={{
                         maxWidth,
                         height,
                         ...modalStyle,
                     }}
                >
                    {children}
                </div>
            </div>
        </>
    );
};
