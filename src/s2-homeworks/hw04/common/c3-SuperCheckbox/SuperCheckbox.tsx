import React, {
    ChangeEvent,
    ChangeEventHandler,
    DetailedHTMLProps,
    InputHTMLAttributes, useState,
} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    id: string;
    onChangeChecked?: (checked: boolean) => void
    checked: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange,
        onChangeChecked,
        checked,
        className,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        id,
        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    //     let [bool, setBool] = useState<any>(restProps.checked)
//     console.log(bool)
//     const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
//         onChangeChecked(!bool)
//         setBool(!bool)
//
//     }
    let [bool, setBool] = useState<boolean>(checked)
    const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        // let bool:boolean=e.currentTarget.checked
        onChangeChecked?.(!bool)
        onChange?.(e)
        setBool(!bool)
    }

    const finalInputClassName = s.checkbox
        + (className ? ' ' + className : '')

    return (
        <label className={s.label}>
            <input
checked={checked}
                id={id}
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children && (
                <span
                    id={id ? id + '-span' : undefined}
                    className={s.spanClassName}
                >
                    {children}
                </span>
            )}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}

export default SuperCheckbox
