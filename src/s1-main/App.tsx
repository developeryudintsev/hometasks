import React from 'react'
import s from './App.module.css'

import HW5 from '../s2-homeworks/hw05/HW5'
import {useSelector} from "react-redux";
import {AppStoreType} from "../s2-homeworks/hw10/bll/store";
import {initStateType} from "../s2-homeworks/hw12/bll/themeReducer";

function App() {
    const id = useSelector<AppStoreType, initStateType>(state => state.theme)
    let classNameApp=s.App1
    console.log(id)
    if(id.themeId==1){
        classNameApp=s.App1
    }
    if(id.themeId==2){
        classNameApp=s.App2
    }
    if(id.themeId==3){
        classNameApp=s.App3
    }
    return (
        <div className={classNameApp}>
            {/*<HW1/>*/}
            {/*/!*раскомментировать по ходу выполнения*!/*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<div></div>*/}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            <HW5/>
        </div>
    )
}

export default App
