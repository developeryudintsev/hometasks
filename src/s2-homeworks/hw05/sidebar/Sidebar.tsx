import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div id={'#hw5-burger-menu'} className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>
                {open &&
                    <nav id={'hw5-menu'} className={s.nav}>
                        <NavLink
                            id={'hw5-pre-junior-link'}
                            to={'/pre-junior'}
                            onClick={handleClose}
                            className={s.nav1} // делает студент
                        >
                            Pre-junior
                        </NavLink>
                        <NavLink
                            id={'hw5-junior-link'}
                            to={'/junior'}
                            onClick={handleClose}
                            className={s.nav2} // делает студент
                        >
                            Junior
                        </NavLink>
                        <NavLink
                            id={'hw5-junior-plus-link'}
                            to={'/junior-plus'}
                            onClick={handleClose}
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
