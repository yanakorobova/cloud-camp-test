import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Create} from "features/Create/Create";
import {Main} from "features/Main/Main";
import {PATH} from "common/constants/path/path";


function App() {
    return (
        <div>
            <Routes>
                <Route path={PATH.CREATE} element={<Create/>}/>
                <Route path={PATH.MAIN} element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
