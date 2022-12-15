import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {changeThemeId, initStateType} from "./bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const id = useSelector<AppStoreType, initStateType>(state => state.theme)
    const dispatch = useDispatch();
    let themeId = id
    let classNameApp=s.App1
    if(id.themeId==1){
        classNameApp=s.App1
    }
    if(id.themeId==2){
        classNameApp=s.App2
    }
    if(id.themeId==3){
        classNameApp=s.App3
    }

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])
    console.log()
    // data-theme=``
    return (
        <div id={'hw12'} className={s2.hw} >
            <div className={classNameApp}>
            <div id={'hw12-text'} className={id.themeId==3?s2.hwTitle1:s2.hwTitle}>
                Homework #12
            </div>

            <span className={s.select} >
                change the team
                <p></p>
                <SuperSelect
                    id={'hw12-select-theme'}

                    options={themes}
                    onChangeOption={change}
                    // сделать переключение тем
                />
        </span>
            </div>
        </div>
    )
}

export default HW12
