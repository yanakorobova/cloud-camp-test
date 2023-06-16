import * as Yup from 'yup'

export const validateStep1 = Yup.object().shape({
    nickname: Yup.string().max(30).matches(/^[а-яёa-z0-9]+$/i, '\n' +
        'Can consist of a letter and a number').required('Required'),
    name: Yup.string().max(50).matches(/^[а-яёa-z]+$/i, 'Must contain only letters')
        .required('Required'),
    sername: Yup.string().max(50).matches(/^[а-яёa-z]+$/i, 'Must contain only letters')
        .required('Required'),
    sex: Yup.string().required('Required'),
})
export const validateStep2 = Yup.object().shape({
    /*about: Yup.string().max(200).required('Required'),
    /!*  checkbox: Yup.array().required('Required')*!/*/
})
export const validateStep3 = Yup.object().shape({
    about: Yup.string().max(200).required('Required'),
    /*  checkbox: Yup.array().required('Required')*/
})
export const validateMain = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.number().positive().integer().required('Required')
})