import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    id:string
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        id,
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName =  disabled?s.disabled:xType === 'red'?s.red:id=='hw4-super-button-default'?s.default:s.secondary
        // + (className ? ' ' + className : '') // задачка на смешивание классов
    console.log(finalClassName)
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