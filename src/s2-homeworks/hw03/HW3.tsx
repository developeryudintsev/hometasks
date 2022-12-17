import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

export type UserType = {
    _id: number
    name: string
}
export const pureAddUserCallback = (name: string, setUsers:(users:UserType[])=>void, users: UserType[]) => { // need to fix any
    const user = { // need to fix
        _id:users.length+1,
        name:name,
    }

    setUsers([...users, user])
}

type hw3type={
    id?:string
}

const HW3 = (props:hw3type) => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any
    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)

    }

    return (
        <div id={props.id} className={s2.hw3}>
            <div className={s2.hwTitle}>Homework #3</div>
                  <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
