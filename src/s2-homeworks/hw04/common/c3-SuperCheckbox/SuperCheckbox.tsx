import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes, useState,
} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked: (checked: boolean) => void
    id: string;
    checked: boolean;
    onChange: () => void;
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange,
        onChangeChecked,
        className,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        id,
        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    let [bool, setBool] = useState<any>(restProps.checked)
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked(!bool)
        setBool(!bool)

    }

    const finalInputClassName = s.checkbox
        + (className ? ' ' + className : '')

    return (
        <label className={s.label}>
            <input
                value={bool}
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
