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

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])
    console.log()
    return (
        // <html data-theme={`${id.themeId}`}>
        <div id={'hw12'} className={s2.hw} >
            <div id={'hw12-text'} className={s2.hwTitle2}>
                Homework #12
            </div>

            <span >
                change the team
                <p></p>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChangeOption={change}
                />
        </span>
        </div>
        // </html>
    )
}

export default HW12
