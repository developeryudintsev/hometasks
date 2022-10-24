import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, KeyboardEventHandler, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

export const pureAddUser = (name: string, setError: (error:string)=>void, setName: (name:string)=>void, addUserCallback: (any)) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
if(name){
    setName(name)
    setName('')
}
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
if(name.trim()==''){
    setError('Ошибка! Введите имя!')
}else {
    setError('')
}
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if(e.keyCode===13){
    addUser()
}
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [hi, setHi] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        console.log(e.currentTarget.value)
        error && setError('')
        setHi(false)
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback(name))
        setlastUserName(name)
        setHi(true)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    let [lastUserName,setlastUserName] =useState('some name') // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
            hi={hi}
        />
    )
}

export default GreetingContainer
