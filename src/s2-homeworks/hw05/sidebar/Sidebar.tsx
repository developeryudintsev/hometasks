import React, {FC} from 'react'
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
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div id={id} className={s.background} onClick={handleClose}/>}

            <aside id={id} className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>
                {open &&
                    <nav id={'#hw5-menu'} className={s.nav}>
                        <NavLink
                            id={'#hw5-pre-junior-link'}
                            to={'/pre-junior'}
                            onClick={handleClose}
                            className={currentPath=='/pre-junior'?s.nav1active:s.nav1} // делает студент
                        >
                            Pre-junior
                        </NavLink>
                        <NavLink
                            id={'hw5-junior-link'}
                            to={'/junior'}
                            onClick={handleClose}
                            className={currentPath=='/junior'?s.nav2active:s.nav2} // делает студент
                        >
                            Junior
                        </NavLink>
                        <NavLink
                            id={'hw5-junior-plus-link'}
                            to={'/junior-plus'}
                            onClick={handleClose}
                            className={currentPath=='/junior-plus'?s.nav3active:s.nav3} // делает студент
                        >
                            Junior Plus
                        </NavLink>
                    </nav>
                }
            </aside>
        </>
    )
}
