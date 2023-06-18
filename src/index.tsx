import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.scss';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "redux/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'SB Sans Interface',
                            fontWeightStrong: 400,
                            fontSize: 14,
                        },
                    }}
                >
                <App/>
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
