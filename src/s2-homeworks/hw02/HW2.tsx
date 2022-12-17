import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

export type AffairPriorityType = 'high'|'middle' |'low'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: string): any => { // need to fix any
    return filter=='all'?affairs:affairs.filter(f=>f.priority==filter) // need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number) => { // need to fix any
    console.log(defaultAffairs)

    return affairs.filter(f=>f._id!==_id) // need to fix
}

type hw2type={
    id?:string
}

function HW2(props:hw2type) {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    // console.log(affairs)

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any

        setAffairs(deleteAffair(affairs,_id))
    }

    return (
        <div id={props.id} className={s2.hw2}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
