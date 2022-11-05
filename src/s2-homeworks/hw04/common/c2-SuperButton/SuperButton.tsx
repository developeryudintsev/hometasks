import React, {ButtonHTMLAttributes, DetailedHTMLProps, useEffect} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    id:string
    xType?:string
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
    let finalClassName ;
    console.log( xType, disabled)
    if (xType=='secondary'){
        finalClassName=s.secondary
    }else if(xType=='disabled'){
        finalClassName=s.disabled
    }else if(xType=='red'){
        finalClassName=s.red
    }else if(xType=='default'){
        finalClassName=s.default
    }

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
