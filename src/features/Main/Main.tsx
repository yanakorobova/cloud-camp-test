import React from 'react';
import s from './Main.module.scss'
import folder from 'common/assets/img/folder.svg'
import {contactsData} from "features/Main/data";
import {Avatar, Divider} from 'antd';
import {SuperButton} from "common/components/SuperButton/SuperButton";
import {useNavigate} from "react-router-dom";
import {PATH} from "common/constants/path/path";
import {Form, Formik} from "formik";
import {validateMain} from "common/validate/validate";
import {SuperInput} from "common/components/SuperInput/SuperInput";

export const Main = () => {
    const navigate = useNavigate();
    const contacts = contactsData.map(c => <a key={c.id} rel='noreferrer' href={c.href} target={'_blank'}>
            <img src={folder} alt={'folder img'}/>
            <span>{c.title}</span>
        </a>
    )
    const redirect = () => navigate(PATH.CREATE)
    const style = {
        maxWidth: '400px',
        background: 'rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(0, 0, 0, 0.16)',
        color: 'rgba(0, 0, 0, 0.48)'
    }
    return (
        <div className={s.mainContainer}>
            <div className={s.info}>
                <Avatar className={s.avatar} size={80}>ЯK</Avatar>
                <div className={s.connection}>
                    <div className={s.name}>Яна Коробова</div>
                    <div className={s.contacts}>
                        {contacts}
                    </div>
                </div>
            </div>
            <Divider/>
            <Formik
                initialValues={{
                    phone: '+79999999999',
                    email: 'asdasd@asd.ru',
                }}
                validationSchema={validateMain}
                onSubmit={() => {
                    redirect()
                }}
            >
                <Form className={s.form}>
                    <div className={s.inputs}>
                        <SuperInput
                            label={'Phone'}
                            name={"phone"}
                            id={'field-phone'}
                            mask={'+7 (000) 000-00-00'}
                            style={style}
                        />
                        <SuperInput
                            label={'Email'}
                            name={"email"}
                            id={'field-email'}
                            style={style}
                        />
                    </div>
                    <SuperButton id={'button-start'}
                                 style={{marginTop: '48px'}} type={'submit'}>Начать</SuperButton>
                </Form>
            </Formik>

        </div>
    );
};

