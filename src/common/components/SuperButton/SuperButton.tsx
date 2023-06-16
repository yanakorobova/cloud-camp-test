import React, {CSSProperties, ReactNode} from 'react';
import {Button, ConfigProvider} from 'antd';
import s from './SuperButton.module.scss';


type SuperButtonPropsType = {
    children: ReactNode
    id: string
    ghost?: boolean
    onClick?: () => void
    style?: CSSProperties
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}
export const SuperButton: React.FC<SuperButtonPropsType> = React.memo((
    {children, ghost, id, onClick, style, type, disabled}) => {

    const onclickHandler = () => {
        onClick && onClick()
    }
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#5558FA',
                },
            }}
        >
            <Button
                type="primary"
                id={id}
                htmlType={type}
                ghost={ghost}
                onClick={onclickHandler}
                style={style}
                className={s.button}
                placeholder={'Placeholder'}
                disabled={disabled}
            >
                {children}
            </Button>
        </ConfigProvider>

    );
});

