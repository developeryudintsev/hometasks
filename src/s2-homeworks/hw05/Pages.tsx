import React from 'react'
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import HW1 from '../hw01/HW1';
import Error404 from './pages/Error404'
import HW2 from "../hw02/HW2";
import HW3 from "../hw03/HW3";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*{currentPath == '/'*/}
                {/*    ?  <Navigate to="/pre-junior" />*/}
                {/*    : ''}*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={PATH.PRE_JUNIOR} id={'#hw5-pre-junior-link'} element={<HW1 id={'hw5-pre-junior-link'}/>}/>
                <Route path={PATH.JUNIOR} id={'#hw5-junior-link'} element={<HW2 id={'hw5-junior-link'} />}/>
                <Route path={PATH.JUNIOR_PLUS} id={'#hw5-junior-plus-link'} element={<HW3 id={'hw5-junior-plus-link'}/>}/>
                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'*'} element={<Error404></Error404>}/>
            </Routes>
        </div>
    )
}

export default Pages