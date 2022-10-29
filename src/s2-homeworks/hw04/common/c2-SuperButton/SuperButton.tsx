import React, {ButtonHTMLAttributes, DetailedHTMLProps, useEffect} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    className?: string
    disabled?: boolean
    id:string
    xType?:string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let finalClassName ;

    if (className=='SuperButton_secondary__jVel5'){
        finalClassName=s.secondary
    }else if(className=='SuperButton_disabled__rXrQD'){
        finalClassName=s.disabled
    }else if(className=='SuperButton_red__1xVaU'){
        finalClassName=s.red
    }else if(className=='SuperButton_default__wJwPJ'){
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
