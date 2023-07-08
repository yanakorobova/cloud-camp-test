import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {mainApi} from "common/api/main-api";

export type initialDataType = {
    data: DataFormType
    status: string
}
export type  DataFormType = {
    name: string
    surname: string
    nickname: string
    about: string
    checkbox: number[]
    sex: 'man' | 'woman' | null
    advantages: string[],
    radio: number | null
}
const initialState: initialDataType = {
    data: {
        name: '',
        surname: '',
        nickname: '',
        about: '',
        checkbox: [],
        sex: null,
        advantages: ['', '', ''],
        radio: null
    },
    status: '',
}

const dataFormSlice = createSlice({
    name: 'dataForm',
    initialState,
    reducers: {
        resetData: () => {
            return initialState
        },
        setData: (state, action: PayloadAction<DataFormType>) => {
            console.log(action,action.payload)
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendData.fulfilled, (state, action) => {
            state.status = action.payload.status
        })
    }

})

export const dataFormReducer = dataFormSlice.reducer
export const {resetData, setData} = dataFormSlice.actions

export const sendData = createAsyncThunk('dataForm/sendData', async (data: DataFormType) => {
    try {
        const res = await mainApi.sendDataForm(data)
        return res.data
    } catch (error) {
        //@ts-ignore
        return {status: error.message}
    }
})