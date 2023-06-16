import axios from "axios";
import {DataFormType} from "redux/reducers/dataForm-slice";

export const instance = axios.create({
    baseURL: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
    withCredentials: false,
})

export const mainApi = {
    sendDataForm(data: DataFormType) {
        return instance.post('', data)
    }
}