import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    objmessage: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    console.log(props.objmessage.user.name)
    return (
        <div id={'hw1-message-' + props.objmessage.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.objmessage.id}
                    // создаёт студент
                    src={props.objmessage.user.avatar}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.objmessage.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.objmessage.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.objmessage.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.objmessage.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.objmessage.id} className={s.time}>
                {/*создаёт студент*/}
                {props.objmessage.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
