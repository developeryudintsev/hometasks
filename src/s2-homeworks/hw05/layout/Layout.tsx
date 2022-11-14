import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import style from '../sidebar/Sidebar.module.css'


type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
    const [open, setOpen] = useState(false)
    let [newid,setnewid]=useState('hw5-menu')
    const handleClose = (value:string) =>{
        setOpen(false)
        setnewid(value)
    }
    const handleOpen = (value:string) =>{
        setOpen(true)
        setnewid(value)
    }

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    return (
        <>
            <Sidebar id={newid} open={open} handleClose={handleClose} setnewid={setnewid} />
            {open==false && <Header id={'#hw5-menu'} handleOpen={handleOpen} />}
            <div className={style.nav3}>
                {/*страницы*/}
                {children}
            </div>
        </>
    )
}
