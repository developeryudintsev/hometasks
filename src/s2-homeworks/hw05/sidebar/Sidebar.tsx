import React, {FC, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    id:string
    open: boolean
    handleClose: (value:string) => void
    setnewid:(newid:string)=>void
}

export const Sidebar: FC<PropsType> = ({id,open, handleClose,setnewid}) => {

    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    const location = useLocation()
    const currentPath = location.pathname
    let resid=id
    console.log(resid)
    let closefunction=()=>{
        handleClose('hw5-menu-close')
    }
    let navfunction=(nav:string)=>{
        handleClose(nav)
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
                            onClick={()=>navfunction('hw5-pre-junior-link')}
                            className={currentPath=='/pre-junior'?s.nav1active:s.nav1} // делает студент
                        >
                            Pre-junior
                        </NavLink>
                        <NavLink
                            id={'hw5-junior-link'}
                            to={'/junior'}
                            onClick={()=>navfunction('hw5-junior-link')}
                            className={currentPath=='/junior'?s.nav2active:s.nav2} // делает студент
                        >
                            Junior
                        </NavLink>
                        <NavLink
                            id={'hw5-junior-plus-link'}
                            to={'/junior-plus'}
                            onClick={()=>navfunction('hw5-junior-plus-link')}
                            className={s.nav3} // делает студент
                        >
                            Junior Plus
                        </NavLink>
                    </nav>
                }
            </aside>
        </>
    )
}
