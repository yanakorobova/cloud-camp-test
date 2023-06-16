import React, {CSSProperties, ReactNode} from 'react';

type IModal =  {
    enableBackground?: boolean;
    width: number;
    height: number;
    modalStyle?: CSSProperties;
    show: boolean
    children: ReactNode
}

export const Modal: React.FC<IModal> = (
    {
        enableBackground,
        width,
        height,
        modalStyle,
        show,
        children,
    }
) => {
    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;

    if (!show) return null;

    return (
        <>
            {enableBackground && <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0, 0, 0, 0.16)',
                    zIndex: 20
                }}
            />}
            <div
                style={{
                    position: 'fixed',
                    top,
                    left,
                    width,
                    height,
                    background: 'white',
                    zIndex: 21,
                    borderRadius: '12px',
                    padding: '32px',
                    ...modalStyle,
                }}
            >
                {children}
            </div>
        </>
    );
};
