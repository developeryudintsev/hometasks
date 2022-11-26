import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [timer, setTimer] = useState<any>()
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    let [stopButn,setstopButn]=useState(true)
    let [startButn,setstartButn]=useState(false)


    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        setTimer(setInterval(() =>{setDate(new Date(restoreState('hw9-date', Date.now())))
            }, 1000))
        setstopButn(false)
        setstartButn(true)
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        // setDate(new Date(restoreState('hw9-date', Date.now())))
        clearInterval(timer)
        setstopButn(true)
        setstartButn(false)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const stringTime = `${date}`.split(' ')[4] || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${date}`.split(' ')[2] || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = `${date}`.split(' ')[0] || <br/> // пишут студенты
    const stringMonth = `${date}`.split(' ')[1] || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}onBlur={onMouseEnter}>
                <div className={s.more} >
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={startButn} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                    xType={'edButton'}
                >
                    start
                </SuperButton>
                <div></div>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={stopButn} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                    xType={'secondary'}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
