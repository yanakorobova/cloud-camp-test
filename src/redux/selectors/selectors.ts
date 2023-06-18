import {AppRootStateType} from "redux/store/store";

export const selectStep = (state: AppRootStateType) => state.create.step
export const selectStatus  = (state: AppRootStateType) => state.dataForm.status
export const selectData  = (state: AppRootStateType) => state.dataForm.data

