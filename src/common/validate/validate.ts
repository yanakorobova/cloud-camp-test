import * as Yup from 'yup'

export const validateStep1 = Yup.object().shape({
    nickname: Yup.string().max(30).matches(/^[а-яёa-z0-9]+$/i, '\n' +
        'Can consist of a letter and a number').required('Enter your nickname'),
    name: Yup.string().max(50).matches(/^[а-яёa-z]+$/i, 'Must contain only letters')
        .required('Enter your name'),
    surname: Yup.string().max(50).matches(/^[а-яёa-z]+$/i, 'Must contain only letters')
        .required('Enter your surname'),
    sex: Yup.string().required('Required'),
})
export const validateStep2 = Yup.object().shape({
    radio: Yup.number().required('Required'),
    checkbox: Yup.array().min(1).required('Required'),
    advantages: Yup.array().of(Yup.string().required("Fill in the field"))
})
export const validateStep3 = Yup.object().shape({
    about: Yup.string().max(200).required('Required'),
})
export const validateMain = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Enter your email'),
    phone: Yup.string().required('Enter your phone')
})