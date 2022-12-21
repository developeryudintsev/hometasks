import React from 'react'
import s from './App.module.css'

import HW5 from '../s2-homeworks/hw05/HW5'
import {useSelector} from "react-redux";
import {AppStoreType} from "../s2-homeworks/hw10/bll/store";
import {initStateType} from "../s2-homeworks/hw12/bll/themeReducer";

function App() {
    const id = useSelector<AppStoreType, initStateType>(state => state.theme)
    return (
        <html data-theme={`${id.themeId}`}>
            {/*<HW1/>*/}
            {/*/!*раскомментировать по ходу выполнения*!/*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<div></div>*/}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            <HW5/>
        </html>
    )
}

export default App
