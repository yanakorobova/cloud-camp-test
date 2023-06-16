import {AnyAction, combineReducers} from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {createReducer} from "redux/reducers/steps-slice";
import {dataFormReducer} from "redux/reducers/dataForm-slice";
import storageSession from 'redux-persist/lib/storage/session'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'

const persistConfigCreate = {
    key: 'create',
    storage: storageSession
}
const persistConfigData = {
    key: 'dataForm',
    storage: storageSession
}

const rootReducer = combineReducers({
    create: persistReducer(persistConfigCreate, createReducer),
    dataForm: persistReducer(persistConfigData, dataFormReducer),
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, PERSIST, PURGE, REHYDRATE, PAUSE, REGISTER],
            ignoreActions: false,
        },
    }).prepend(thunk)
})

export const persistor = persistStore(store)

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store