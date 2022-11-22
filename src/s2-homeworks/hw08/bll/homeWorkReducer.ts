import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType) => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let arr=action.payload=='up'? state.sort((a, b) => a.name > b.name ? 1 : -1): state.sort((a, b) => a.name < b.name ? 1 : -1)
            return arr // need to fix
        }
        case 'check': {
            // return [state.filter(f=>f.age>18?f:'')] // need to fix
            // console.log(state.filter((f) => f.age>=18),action.payload)
            return state.filter((a) => a.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
