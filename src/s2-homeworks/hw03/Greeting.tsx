import React, {ChangeEvent, ChangeEventHandler, FocusEventHandler, KeyboardEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    onBlur: ()=>void // need to fix any
    onEnter: (e:KeyboardEvent<HTMLInputElement>)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName:string // need to fix any
    hi:boolean
    // setlastUserName?:(lastUserName:string)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
         hi,
    } // деструктуризация пропсов
) => {
    const inputClass = s.errorInput // need to fix with (?:)
// lastUserName=name
    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={(e)=>setNameCallback(e)}
                        className={error?inputClass:s.inputClass}
                        onKeyDown={(e)=>onEnter(e)}
                        onBlur={()=>onBlur()}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={()=>addUser()}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    add
                </button>
            </div>

            {hi && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}

        </div>
    )
}

export default Greeting
