import React, {ButtonHTMLAttributes, DetailedHTMLProps, useEffect} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    id:string
    xType?: string
    disabled?:boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        id,
        xType,
        // className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let classN=id?.split('-')[id.split('-').length-1]
    let finalClassName ;
    // console.log( xType, disabled)
    if (classN=='secondary'){
        finalClassName=s.secondary
    }else if(classN=='disabled'){
        finalClassName=s.disabled
    }else if(classN=='red'){
        finalClassName=s.red
    }else if(classN=='default'){
        finalClassName=s.default
    }
    console.log(finalClassName,'#hw4-super-button-red')

    return (
        <button
            id={id}
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
