import React from "react";
import S from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import exp from "constants";


export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={S.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={S.messag}>
            {props.message}
        </div>
    )
}


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name:"Gagulik"},
        {id: 2, name:"Vazgenchik"},
        {id: 3, name:"Serobik"},
        {id: 4, name:"Ghukasik"},
    ]

    let dialogs = dialogsData.map(el=><DialogItem name={el.name} id={el.id}/>)

    let messagesData =[
        {id: 1, message:"Hi!"},
        {id: 2, message:"How are you?"},
        {id: 3, message:"Yo!"}
    ]

    let messages = messagesData.map(msg=><Message message={msg.message }/>)

    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogs}
            </div>
            <div className={S.messages}>
                {messages}
            </div>

        </div>

    )
}