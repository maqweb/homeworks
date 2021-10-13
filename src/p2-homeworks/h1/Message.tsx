import React from 'react'
import s from './Message.module.css'

type IPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: IPropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.text}>
                <div>{props.name}</div>
                <div>
                    <span>{props.message}</span>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
