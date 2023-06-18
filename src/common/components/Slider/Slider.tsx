import React from "react";
import s from "./Slider.module.scss";

type SliderPropsType = {
    currentStep: number
    steps: number
}
export const Slider: React.FC<SliderPropsType> = ({currentStep, steps}) => {

    const renderSteps = () => {
        const totalSteps = [];
        for (let i = 1; i <= steps; i++) {
            const stepClassName = i < currentStep ? s.passed : i === currentStep ? s.active : "";
            const labelClassName = i > currentStep ? s.labelPassed : "";
            totalSteps.push(<div key={i} className={s.stepContainer}>
                    <div className={`${s.step} ${stepClassName}`}/>
                    <div className={`${s.label} ${labelClassName}`}>{i}</div>
                </div>,
            );
        }
        return totalSteps;
    };

    const renderProgressBar = () => {
        const progress = ((currentStep - 1) / (steps - 1)) * 100;
        return (
            <div
                className={`${s.progress} ${s.filled}`}
                style={{width: `${progress}%`}}
            />
        );
    };

    return (
        <div className={s.slider}>
            <div className={s.steps}>{renderSteps()}</div>
            <div className={s.progress}>{renderProgressBar()}</div>
        </div>
    );
};
