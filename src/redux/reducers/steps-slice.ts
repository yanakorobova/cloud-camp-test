import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {resetData} from "redux/reducers/dataForm-slice";

type initialStateType = {
    step: number
}
const initialState: initialStateType = {
    step: 0
}

const stepsSlice = createSlice({
    name: 'create',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<{ newStep: number }>) => {
            state.step = action.payload.newStep
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetData, () => {
            return initialState
        })

    }
})

export const createReducer = stepsSlice.reducer
export const {setStep} = stepsSlice.actions