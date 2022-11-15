import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import style from '../sidebar/Sidebar.module.css'


type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const handleClose = () =>{
        setOpen(false)
    }
    const handleOpen = () =>{
        setOpen(true)
    }

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    return (
        <>
            <Sidebar id={'hw5-burger-menu'} open={open} handleClose={handleClose}  />
            {open==false && <Header id={'hw5-menu'} handleOpen={handleOpen} />}
            <div className={style.nav3}>
                {/*страницы*/}
                {children}
            </div>
        </>
    )
}
