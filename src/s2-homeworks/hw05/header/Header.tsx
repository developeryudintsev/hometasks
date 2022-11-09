import React, {FC} from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from '../Pages'

type PropsType = {
    id:string
    handleOpen: () => void
}

export const Header: FC<PropsType> = ({id,handleOpen}) => {
    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    const location = useLocation()
    const currentPath = location.pathname
    console.log( currentPath)
    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Pre-junior'
            : currentPath === PATH.JUNIOR
                ? 'Junior'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Junior Plus'
                    : 'Error'
    return (
        <>
            <div id={id} className={s.header}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={s.burgerMenuIcon}
                    onClick={handleOpen}
                    alt={'open menu'}
                />
                <h1>{pageName}</h1>
            </div>
        </>
    )
}
