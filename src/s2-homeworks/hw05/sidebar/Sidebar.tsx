import React, {FC, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    id:string
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({id,open, handleClose}) => {

    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    const location = useLocation()
    const currentPath = location.pathname
    let resid=id
    console.log(resid)
    let closefunction=()=>{
        handleClose()
    }

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div id={resid} className={s.background} onClick={()=>closefunction}/>}

            <aside id={resid} className={sidebarClass}>
                <button className={s.close} onClick={closefunction}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>
                {open &&
                    <nav id={resid} className={s.nav}>
                        <NavLink
                            id={'#hw5-pre-junior-link'}
                            to={'/pre-junior'}
                            onClick={closefunction}
                            // className={s.nav1}
                            className={(isActive)=>isActive.isActive?s.nav1active:s.nav1}
                             // делает студент
                        >
                            Pre-junior
                        </NavLink>
                        <div></div>
                        <NavLink
                            id={'hw5-junior-link'}
                            to={'/junior'}
                            onClick={closefunction}
                            // className={s.nav2}
                            className={(isActive)=>isActive.isActive?s.nav2active:s.nav2} // делает студент
                        >
                            Junior
                        </NavLink>
                        <div></div>
                        <NavLink
                            id={'hw5-junior-plus-link'}
                            to={'/junior-plus'}
                            onClick={closefunction}
                            // className={s.nav3}
                            className={(isActive)=>isActive.isActive?s.nav3active:s.nav3} // делает студент
                        >
                            Junior Plus
                        </NavLink>
                        <div></div>
                    </nav>
                }
            </aside>
        </>
    )
}
