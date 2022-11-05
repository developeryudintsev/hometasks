import React, {KeyboardEvent, useState} from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    // console.log(stateForAllInputs)
    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)
    let onEnter = (value: string) => {
        if (value.trim() == '' || value == '') {
            setError('error')
        } else {
            setValue('')
        }
    }
    console.log(stateForAllCheckboxes)

    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        setError={setError}
                        onChange={() => setValue}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        setError={setError}
                        error={error}
                        onEnter={(value) => onEnter(value)}
                    />
                </div>
            </div>
            <div className={s.buttons}>
                {/*обычная кнопка:*/}
                <div>
                    {/*обычная кнопка:*/}
                    <div>
                        <SuperButton id={'hw4-super-button-default'}>
                            default
                        </SuperButton>
                    </div>
                    {/*красная кнопка:*/}
                    <div>
                        <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                            red
                        </SuperButton>
                    </div>
                    {/*задизэйбленная кнопка:*/}
                    <div>
                        <SuperButton
                            id={'hw4-super-button-disabled'}
                            xType={'red'}
                            disabled
                        >
                            disabled
                        </SuperButton>
                    </div>
                    {/*задизэйбленная кнопка:*/}
                    <div>
                        <SuperButton
                            id={'hw4-super-button-secondary'}
                            xType={'secondary'}
                        >
                            secondary
                        </SuperButton>
                    </div>
                </div>
            </div>
            <div className={s.checkboxes}>
                {/*чекбокс с текстом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        onChangeChecked={setChecked}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
